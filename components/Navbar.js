import {Component} from 'react'
import Link from 'next/link'
import NavbarMenu from './NavbarMenu'
export default class Navbar extends Component {
    render() {
        return (
            <div>
                <nav>
                    <Link href='/'>
                        <a className="navbar-name">
                            <h1>Kamil <span>Pawlak</span></h1>
                        </a>
                    </Link>
                    <NavbarMenu navItems={this.props.navItems} emails={this.props.emails} activePage={this.props.activePage}/>
                </nav>
            </div>
        )
    }
}