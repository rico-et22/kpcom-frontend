import Navbar from '../components/Navbar'
import PortfolioPageHeader from '../components/PortfolioPageHeader'
import PortfolioItemContainer from '../components/PortfolioItemContainer'
import MainPageContact from '../components/MainPageContact'
import BottomNavBar from '../components/BottomNavBar'
import '../styles/main.scss'
import Head from 'next/head'
import { gql } from '@apollo/client'
import { initializeApollo } from '../lib/apolloClient'

export function Portfolio(props) {
  return (
    <div id='site-root'>
      <Head>
        <title>Portfolio • Kamil Pawlak - front-end web developer</title>
        <meta name='description' content="Check my recent web development & design projects."/>
      </Head>
        <Navbar navItems={props.menuItems} emails={props.emails} activePage='/portfolio'/>
        <PortfolioPageHeader/>
        <main>
          <PortfolioItemContainer items={props.portfolioItems}/>
        </main>
        <MainPageContact links={props.socialLinks}/>
        <BottomNavBar activePage='/portfolio' emails={props.emails}/>
    </div>
  )
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()
  
  await apolloClient.query({
    query: gql`
      query {
        menuItemCollection {
          items {
          title
          link
          }
        }
        portfolioItemCollection {
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
      }
    `,
  })
  
  return {
    props: {
      menuItems: apolloClient.cache.extract().ROOT_QUERY.menuItemCollection.items,
      emails: apolloClient.cache.extract().ROOT_QUERY.emailCollection.items,
      portfolioItems: apolloClient.cache.extract().ROOT_QUERY.portfolioItemCollection.items,
      socialLinks: apolloClient.cache.extract().ROOT_QUERY.socialLinkCollection.items
    }
  }
}

export default Portfolio
