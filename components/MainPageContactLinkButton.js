import {Component} from 'react'
export default class MainPageContactLinkButton extends Component {
    render() {
        return (
            <a href={this.props.href} className={this.props.email ? "mainpage-contact-link-button email" : "mainpage-contact-link-button"}>
                <img src={`/static/icons/${this.props.svg}.svg`} className='mainpage-contact-link-button-svg' alt={this.props.svg}/>
                {this.props.text}
            </a>
        )
    }
}