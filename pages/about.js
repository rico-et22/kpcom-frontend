import {Component} from 'react'
import APIURL from '../components/APIURL'
import fetch from 'isomorphic-unfetch'
import Head from 'next/head'
import '../styles/main.scss'
import Navbar from '../components/Navbar'
import AboutHeader from '../components/AboutHeader'
import AboutBio from '../components/AboutBio'
import AboutInfoContainer from '../components/AboutInfoContainer'
import AboutEducationCard from '../components/AboutEducationCard'
import AboutExperienceCard from '../components/AboutExperienceCard'
import AboutTechnologyGallery from '../components/AboutTechnologyGallery'
import MainPageContact from '../components/MainPageContact'
import BottomNavBar from '../components/BottomNavBar'

export default class About extends Component {
    static async getInitialProps() {
        const menuItems = await fetch(`${APIURL}/menuitems`)
        const menuItemsJSON = await menuItems.json()
        const aboutHeaderListItems = await fetch(`${APIURL}/aboutheaderlistitems`)
        const aboutHeaderListItemsJSON = await aboutHeaderListItems.json()
        const aboutsocialLinks = await fetch(`${APIURL}/aboutsociallinks`)
        const aboutsocialLinksJSON = await aboutsocialLinks.json()
        const aboutInfoText = await fetch(`${APIURL}/aboutinfotexts`)
        const aboutInfoTextJSON = await aboutInfoText.json()
        const aboutEducationItems = await fetch(`${APIURL}/abouteducationitems`)
        const aboutEducationItemsJSON = await aboutEducationItems.json()
        const aboutExperienceItems = await fetch(`${APIURL}/aboutexperienceitems?_sort=id:DESC`)
        const aboutExperienceItemsJSON = await aboutExperienceItems.json()
        const aboutTechnologyItems = await fetch(`${APIURL}/abouttechnologyitems`)
        const aboutTechnologyItemsJSON = await aboutTechnologyItems.json()
        const emails = await fetch(`${APIURL}/emails`)
        const emailsJSON = await emails.json()
        const socialLinks = await fetch(`${APIURL}/sociallinks`)
        const socialLinksJSON = await socialLinks.json()
        return {menuItemsJSON, aboutHeaderListItemsJSON, aboutsocialLinksJSON, aboutInfoTextJSON, aboutEducationItemsJSON, aboutExperienceItemsJSON, aboutTechnologyItemsJSON, emailsJSON, socialLinksJSON}
    }
    render(){
        return (
            <div id='site-root'>
                <Head>
                    <title>About me • Kamil Pawlak - front-end web developer</title>
                    <meta name='description' content="My experience, skills & more"/>
                </Head>
                <Navbar navItems={this.props.menuItemsJSON} emails={this.props.emailsJSON} activePage='/about'/>
                <AboutHeader listJSON={this.props.aboutHeaderListItemsJSON} social={this.props.aboutsocialLinksJSON} emails={this.props.emailsJSON}/>
                <main>
                    <AboutBio textJSON={this.props.aboutInfoTextJSON}/>
                    <AboutInfoContainer>
                        <div className='about-info-grid'>
                            <div className='about-info-grid-left'>
                                <h1>Work experience</h1>
                            </div>
                            <div className='about-info-grid-right'>
                                {this.props.aboutExperienceItemsJSON.map(item => (
                                    <AboutExperienceCard
                                    companyName={item.companyName}
                                    jobTitle={item.jobTitle}
                                    image={item.image}
                                    location={item.location}
                                    time={item.date}
                                    description={item.description}
                                    key={item.id}
                                    />
                                ))}
                                    <hr className='about-info-separator'/>
                            </div>
                        </div>
                        <div className='about-info-grid'>
                            <div className='about-info-grid-left'>
                                <h1>Education</h1>
                            </div>
                            <div className='about-info-grid-right'>
                                {this.props.aboutEducationItemsJSON.map(item => (
                                    <AboutEducationCard
                                    schoolName={item.schoolName}
                                    degreeInfo={item.degreeInfo}
                                    image={item.image}
                                    location={item.location}
                                    time={item.time}
                                    key={item.id}
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
                                <AboutTechnologyGallery images={this.props.aboutTechnologyItemsJSON}/>
                            </div>
                        </div>
                    </AboutInfoContainer>
                </main>
                <MainPageContact links={this.props.socialLinksJSON}/>
                <BottomNavBar activePage='/about' emails={this.props.emailsJSON}/>
            </div>
        )
    }
}