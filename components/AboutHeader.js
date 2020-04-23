import {Component} from 'react'
import Link from 'next/link'
export default class AboutHeader extends Component {
    calculateAge() {
        //Get my birthday
        const birthday = new Date('2003-08-11')
        //Get current date
        const now = new Date()
        //Calculate age by subtracting current year with birthday year
        let age = now.getFullYear() - birthday.getFullYear();
        //Calculate month difference by subtracting current month with birthday month
        const m = now.getMonth() - birthday.getMonth();
        //If month difference is negative or current date is smaller than birthday date, decrease age by 1
        if (m < 0 || (m === 0 && now.getDate() < birthday.getDate())) {
            age--;
        }
        let text;
        if (age <= 1) {
            text = `${age} year old`
        }
        else {
            text = `${age} years old`
        }
        return text;
    }
    checkRelocation(value){
        if (value == false) {
            return <span className='about-header-infobox-noremote'> • Remote work only, not available for relocation</span>;
        }
    }
    render(){
        return (
            <header className='about-header'>
                <div className='about-header-container'>
                    <div className='about-header-left'>
                        <img src='/static/face.jpg' className='about-header-photo'
                        alt='My face'/>
                    </div>
                    <div className='about-header-right'>
                        <h1>Kamil Pawlak</h1>
                        <h3>Front-end web developer & designer</h3>
                        <div className='about-header-infobox'>
                            <div className='about-header-infobox-item'>
                                <img src='/static/icons/place.svg' className='about-header-infobox-icon' alt='Location'/>
        <p>{this.props.listJSON[0].text}{this.checkRelocation(this.props.listJSON[0].other[0].availableForRelocation)}</p>
                            </div>
                            <div className='about-header-infobox-item'>
                                {this.props.social.map(social => (
                                    <a href={social.link} className='about-header-infobox-link' key={social.id}>
                                        <img src={`/static/icons/${social.icon}.svg`} alt={social.name}/>
                                        {social.name}
                                    </a>
                                ))}
                                <a className='about-header-infobox-link' href={`mailto:${this.props.emails[0].email}`}>
                                    <img src={`/static/icons/email.svg`} alt='Email'/>
                                    Contact options
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}