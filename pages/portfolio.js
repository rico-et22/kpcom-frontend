import Navbar from "../components/Navbar";
import PortfolioPageHeader from "../components/PortfolioPageHeader";
import PortfolioItemContainer from "../components/PortfolioItemContainer";
import ContactFooter from "../components/ContactFooter";
import BottomNavBar from "../components/BottomNavBar";
import Head from "next/head";
import { gql } from "@apollo/client";
import { initializeApollo } from "../lib/apolloClient";

export function Portfolio(props) {
  return (
    <div id="site-root">
      <Head>
        <title>Portfolio • Kamil Pawlak - front-end web developer</title>
        <meta property="og:url" content="https://kamilpawlak.com/portfolio" />
        <meta
          property="og:title"
          content="Portfolio • Kamil Pawlak - front-end web developer"
        />
      </Head>
      <Navbar
        navItems={props.menuItems}
        resumeLink={props.resumeLinks[0].file.url}
        activePage="/portfolio"
      />
      <PortfolioPageHeader />
      <main>
        <PortfolioItemContainer items={props.portfolioItems} />
      </main>
      <ContactFooter links={props.socialLinks} emails={props.emails} />
      <BottomNavBar
        activePage="/portfolio"
        resumeLink={props.resumeLinks[0].file.url}
      />
    </div>
  );
}

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: gql`
      query {
        menuItemCollection {
          items {
            title
            link
          }
        }
        portfolioItemCollection(order: [orderId_ASC]) {
          items {
            title
            image {
              url
            }
            description
            previewLink
            repoLink
            usesInternalPreview
            anchorId
            technologiesUsed
            date
          }
        }
        socialLinkCollection {
          items {
            name
            text
            icon
            url
          }
        }
        emailCollection {
          items {
            email
          }
        }
        resumeLinkCollection {
          items {
            file {
              url
            }
          }
        }
      }
    `,
  });

  return {
    props: {
      menuItems:
        apolloClient.cache.extract().ROOT_QUERY.menuItemCollection.items,
      emails: apolloClient.cache.extract().ROOT_QUERY.emailCollection.items,
      portfolioItems:
        apolloClient.cache.extract().ROOT_QUERY[
          'portfolioItemCollection({"order":["orderId_ASC"]})'
        ].items,
      socialLinks:
        apolloClient.cache.extract().ROOT_QUERY.socialLinkCollection.items,
      resumeLinks:
        apolloClient.cache.extract().ROOT_QUERY.resumeLinkCollection.items,
    },
  };
}

export default Portfolio;
