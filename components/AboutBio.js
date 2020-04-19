import {Component} from 'react'
import Link from 'next/link'
export default class AboutBio extends Component {
    render() {
        return (
            <section className='about-bio'>
                <div className='about-bio-container'>
                    <img src='/static/about-arrow.svg' className='about-arrow normal' alt='arrow'/>
                        <div dangerouslySetInnerHTML={{__html:this.props.textJSON[0].text}}></div>
                    <img src='/static/about-arrow.svg' className='about-arrow reverse' alt='arrow'/>
                </div>
            </section>
        )
    }
}