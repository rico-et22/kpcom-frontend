import {Component} from 'react'
import APIURL from '../components/APIURL'
import fetch from 'isomorphic-unfetch'
import Navbar from '../components/Navbar'
import MainPageHeader from '../components/MainPageHeader'
import MainPagePortfolio from '../components/MainPagePortfolio'
import MainPageContact from '../components/MainPageContact'
import BottomNavBar from '../components/BottomNavBar'
import '../styles/main.scss'
import Head from 'next/head'
export default class Index extends Component {
    static async getInitialProps() {
        const portfolioItems = await fetch(`${APIURL}/portfolioitems`)
        const portfolioItemsJSON = await portfolioItems.json()
        const menuItems = await fetch(`${APIURL}/menuitems`)
        const menuItemsJSON = await menuItems.json()
        const emails = await fetch(`${APIURL}/emails`)
        const emailsJSON = await emails.json()
        const socialLinks = await fetch(`${APIURL}/sociallinks`)
        const socialLinksJSON = await socialLinks.json()
        return {portfolioItemsJSON, menuItemsJSON, emailsJSON, socialLinksJSON}
    }
    render(){
        return (
            <div id='site-root'>
                <Head>
                    <title>Kamil Pawlak - front-end web developer and designer</title>
                    <meta name='description' content="I'm a passionate and aspiring web developer loving React, Next.js and Strapi. Visit this site to view my portfolio"/>
                </Head>
                <Navbar navItems={this.props.menuItemsJSON} emails={this.props.emailsJSON} activePage='/'/>
                <main>
                    <MainPageHeader/>
                    <MainPagePortfolio items={this.props.portfolioItemsJSON}/>
                    <MainPageContact links={this.props.socialLinksJSON}/>
                </main>
                <BottomNavBar activePage='/' emails={this.props.emailsJSON}/>
            </div>
        )
    }
}