import {Component} from 'react'
import Link from 'next/link'
import MainPageContactLinkButton from '../components/MainPageContactLinkButton'
export default class MainPageContact extends Component {
    copyright() {
        let date = new Date().getFullYear()
        if (date === 2019){
            return `© ${date} Kamil Pawlak.`
        }
        else{
            return `© 2019-${date} Kamil Pawlak.`
        }
    }
    prepare(links) {
        let newArray = links.shift();
        return newArray;
    }
    render() {
        return (
            <footer className='mainpage-contact'>
                <div className='mainpage-contact-left'>
                    <h1>Get in touch ✉</h1>
                    <p>If you are interested in my work and want to do something with me,
                    <br/>feel free to drop me a line 📝.</p>
                </div>
                <div className='mainpage-contact-right'>
                    <MainPageContactLinkButton href='mailto:ricoet22@gmail.com' svg='email' text='ricoet22@gmail.com' email/>
                    <div className="mainpage-contact-buttons">
                        {this.props.links.map(link => (
                            <MainPageContactLinkButton href={link.url} svg={link.icon} text={link.text}
                            key={link.id}/>
                        ))}
                    </div>
                    <p className='mainpage-contact-copyright'>{this.copyright()} All rights reserved. <br/> Version 1.0 React + Next.js + Strapi</p>
                </div>
            </footer>
        )
    }
}