import {Component} from 'react'
import Link from 'next/link'
export default class BottomNavItem extends Component {
    checkActive() {
        if (this.props.href === this.props.active) {
            return "bottom-nav-item active";
        }
        else {
            return "bottom-nav-item";
        }
    }
    render() {
        return (
            <li>
                <Link href={this.props.href}>
                    <a href={this.props.href} style={{'display':'flex', 'flex-direction':'column', alignItems:'center'}} className={this.checkActive()}>
                        <img src={`/static/icons/${this.props.icon}.svg`} className='bottom-nav-item-svg' alt={this.props.icon}/>
                        <p style={{fontSize:'.75rem'}}>{this.props.caption}</p>
                    </a>
                </Link>
            </li>
        )
    }
}