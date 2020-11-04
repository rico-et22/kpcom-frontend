import Navbar from '../components/Navbar'
import MainPageHeader from '../components/MainPageHeader'
import MainPagePortfolio from '../components/MainPagePortfolio'
import MainPageContact from '../components/MainPageContact'
import BottomNavBar from '../components/BottomNavBar'
import '../styles/main.scss'
import Head from 'next/head'
import { gql } from '@apollo/client'
import { initializeApollo } from '../lib/apolloClient'

function Index(props) {
  return (
    <div id='site-root'>
      <Head>
        <title>Kamil Pawlak - front-end web developer</title>
        <meta name='description' content="I'm a passionate and aspiring web developer using React, Next.js, Vue and Nuxt. Visit this site to view my portfolio"/>
      </Head>
      <Navbar navItems={props.menuItems} emails={props.emails} activePage='/'/>
      <main>
        <MainPageHeader/>
        <MainPagePortfolio items={props.portfolioItems}/>
        <MainPageContact links={props.socialLinks}/>
      </main>
      <BottomNavBar activePage='/' emails={props.emails}/>
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

export default Index
