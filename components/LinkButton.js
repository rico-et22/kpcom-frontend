import {Component} from 'react'
import Link from 'next/link'
export default class LinkButton extends Component {
    render() {
        if (this.props.href) {
            return (
                <Link href={this.props.href}>
                    <a href={this.props.href} className='link-button'>
                        {this.props.text}
                        {this.props.children}
                    </a>
                </Link>
            )
        }
        else {
            return (
                <a href='#' className='link-button'>
                    {this.props.text}
                </a>
            )
        }
    }
}