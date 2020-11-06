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
        <meta property="og:url" content="https://kamilpawlak.com/portfolio" />
        <meta property="og:title" content="Portfolio • Kamil Pawlak - front-end web developer" />
      </Head>
        <Navbar navItems={props.menuItems} emails={props.emails} activePage='/portfolio'/>
        <PortfolioPageHeader/>
        <main>
          <PortfolioItemContainer items={props.portfolioItems}/>
        </main>
        <MainPageContact links={props.socialLinks} emails={props.emails}/>
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
        portfolioItemCollection(order:[sys_publishedAt_ASC]) {
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
      }
    `,
  })
  
  return {
    props: {
      menuItems: apolloClient.cache.extract().ROOT_QUERY.menuItemCollection.items,
      emails: apolloClient.cache.extract().ROOT_QUERY.emailCollection.items,
      portfolioItems: apolloClient.cache.extract().ROOT_QUERY['portfolioItemCollection({"order":["sys_publishedAt_ASC"]})'].items,
      socialLinks: apolloClient.cache.extract().ROOT_QUERY.socialLinkCollection.items
    }
  }
}

export default Portfolio
