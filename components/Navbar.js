import {Component} from 'react'
import Link from 'next/link'
import NavbarMenu from './NavbarMenu'
export default class Navbar extends Component {
    render() {
        return (
            <div>
                <nav>
                    <Link href='/'>
                        <a className='logo-image-link'>
                            <img src='/static/kamilcodes.svg' className='logo-image' alt='Kamil Pawlak'/>
                        </a>
                    </Link>
                    <NavbarMenu navItems={this.props.navItems} emails={this.props.emails} activePage={this.props.activePage}/>
                </nav>
            </div>
        )
    }
}