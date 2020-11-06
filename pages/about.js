import Head from 'next/head'
import '../styles/main.scss'
import Navbar from '../components/Navbar'
import AboutHeader from '../components/AboutHeader'
import AboutBio from '../components/AboutBio'
import AboutInfoContainer from '../components/AboutInfoContainer'
import AboutEducationCard from '../components/AboutEducationCard'
import AboutExperienceCard from '../components/AboutExperienceCard'
import AboutTechnologyGallery from '../components/AboutTechnologyGallery'
import ContactFooter from '../components/ContactFooter'
import BottomNavBar from '../components/BottomNavBar'
import { gql } from '@apollo/client'
import { initializeApollo } from '../lib/apolloClient'

export function About(props) {
  return (
    <div id='site-root'>
      <Head>
        <title>About me • Kamil Pawlak - front-end web developer</title>
        <meta property="og:url" content="https://kamilpawlak.com/about" />
        <meta property="og:title" content="About me • Kamil Pawlak - front-end web developer" />
      </Head>
      <Navbar navItems={props.menuItems} emails={props.emails} activePage='/about'/>
      <AboutHeader location={props.aboutLocationInfo} social={props.aboutSocialLinks} emails={props.emails} resumeLinks={props.resumeLinks}/>
      <main>
        <AboutBio text={props.aboutInfoText}/>
        <AboutInfoContainer>
          <div className='about-info-grid'>
            <div className='about-info-grid-left'>
              <h1>Work experience</h1>
            </div>
            <div className='about-info-grid-right'>
              {props.aboutExperienceItems.map((item, index) => (
                <AboutExperienceCard
                companyName={item.companyName}
                jobTitle={item.jobTitle}
                image={item.image}
                location={item.location}
                time={item.date}
                description={item.description}
                key={index}
                />
              ))}
                <hr className='about-info-separator'/>
            </div>
          </div>
          <div className='about-info-grid'>
            <div className='about-info-grid-left'>
              <h1>Technologies<br/>that I use</h1>
            </div>
            <div className='about-info-grid-right'>
              <AboutTechnologyGallery images={props.aboutTechnologyItems}/>
              <hr className='about-info-separator'/>
            </div>
          </div>
          <div className='about-info-grid'>
            <div className='about-info-grid-left'>
              <h1>Education</h1>
            </div>
            <div className='about-info-grid-right'>
              {props.aboutEducationItems.map((item, index) => (
                <AboutEducationCard
                schoolName={item.schoolName}
                degreeInfo={item.degreeInfo}
                image={item.image}
                location={item.location}
                time={item.time}
                key={index}
                />
              ))}
            </div>
          </div>
        </AboutInfoContainer>
      </main>
      <ContactFooter links={props.socialLinks} emails={props.emails}/>
      <BottomNavBar activePage='/about' emails={props.emails}/>
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
      aboutPageLocationInfoCollection {
        items {
          location
          availableForRelocation
        }
      }
      aboutPageSocialLinkCollection {
        items {
          name
          icon
          link
        }
      }
      aboutPageInfoTextCollection {
        items {
          text
        }
      }
      aboutPageExperienceItemCollection {
        items {
          companyName
          jobTitle
          location
          date
          description
          image {
            url
          }
        }
      }
      aboutPageEducationItemCollection {
        items {
          schoolName
          degreeInfo
          location
          time
          image {
            url
          }
        }
      }
      aboutPageTechnologyItemCollection(order: [sys_publishedAt_ASC]) {
        items {
          name
          logo {
            url
          }
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
          url
        }
      }
    }
    `,
  })
  return {
    props: {
      menuItems: apolloClient.cache.extract().ROOT_QUERY.menuItemCollection.items,
      emails: apolloClient.cache.extract().ROOT_QUERY.emailCollection.items,
      socialLinks: apolloClient.cache.extract().ROOT_QUERY.socialLinkCollection.items,
      aboutLocationInfo: apolloClient.cache.extract().ROOT_QUERY.aboutPageLocationInfoCollection.items,
      aboutSocialLinks: apolloClient.cache.extract().ROOT_QUERY.aboutPageSocialLinkCollection.items,
      aboutInfoText: apolloClient.cache.extract().ROOT_QUERY.aboutPageInfoTextCollection.items,
      aboutExperienceItems: apolloClient.cache.extract().ROOT_QUERY.aboutPageExperienceItemCollection.items,
      aboutEducationItems: apolloClient.cache.extract().ROOT_QUERY.aboutPageEducationItemCollection.items,
      aboutTechnologyItems: apolloClient.cache.extract().ROOT_QUERY['aboutPageTechnologyItemCollection({"order":["sys_publishedAt_ASC"]})'].items,
      resumeLinks: apolloClient.cache.extract().ROOT_QUERY.resumeLinkCollection.items
    }
  }
}

export default About
