import {Component} from 'react'
import APIURL from '../components/APIURL'
import fetch from 'isomorphic-unfetch'
import Navbar from '../components/Navbar'
import PortfolioPageHeader from '../components/PortfolioPageHeader'
import PortfolioItemContainer from '../components/PortfolioItemContainer'
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
                    <title>Portfolio • Kamil Pawlak - front-end web developer and designer</title>
                    <meta name='description' content="Check my recent web development & design projects."/>
                </Head>
                    <Navbar navItems={this.props.menuItemsJSON} emails={this.props.emailsJSON} activePage='/portfolio'/>
                    <PortfolioPageHeader/>
                    <main>
                        <PortfolioItemContainer items={this.props.portfolioItemsJSON}/>
                    </main>
                    <MainPageContact links={this.props.socialLinksJSON}/>
                    <BottomNavBar activePage='/portfolio' emails={this.props.emailsJSON}/>
            </div>
        )
    }
}