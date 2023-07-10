import Navbar from "../components/Navbar";
import MainPageHeader from "../components/MainPageHeader";
import MainPagePortfolio from "../components/MainPagePortfolio";
import ContactFooter from "../components/ContactFooter";
import BottomNavBar from "../components/BottomNavBar";
import Head from "next/head";
import { gql } from "@apollo/client";
import { initializeApollo } from "../lib/apolloClient";

function Index(props) {
  return (
    <div id="site-root">
      <Head>
        <title>Kamil Pawlak - front-end web developer</title>
        <meta property="og:url" content="https://kamilpawlak.com" />
        <meta
          property="og:title"
          content="Kamil Pawlak - front-end web developer"
        />
      </Head>
      <Navbar
        navItems={props.menuItems}
        resumeLink={props.resumeLinks[0].file.url}
        activePage="/"
      />
      <main>
        <MainPageHeader />
        <MainPagePortfolio items={props.portfolioItems} />
        <ContactFooter links={props.socialLinks} emails={props.emails} />
      </main>
      <BottomNavBar activePage="/" resumeLink={props.resumeLinks[0].file.url} />
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
            anchorId
            technologiesUsed
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

export default Index;
