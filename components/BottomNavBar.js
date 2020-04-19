import {Component} from 'react'
import BottomNavItem from '../components/BottomNavItem'
export default class BottomNavBar extends Component {
    render() {
        return (
            <div className='bottom-nav'>
                <ul className='bottom-nav-items-container'>
                    <BottomNavItem icon='home' caption='Home' href='/' active={this.props.activePage}/>
                    <BottomNavItem icon='account-details' caption='About' href='/about' active={this.props.activePage}/>
                    <BottomNavItem icon='briefcase' caption='Portfolio' href='/portfolio' active={this.props.activePage}/>
                    <BottomNavItem icon='email-black' caption='Contact me' href={`mailto:${this.props.emails[0].email}`} active={this.props.activePage}/>
                </ul>
            </div>
        )
    }
}