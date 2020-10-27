import {Component} from 'react'
import LinkButton from '../components/LinkButton'
export default class MainPageHeader extends Component {
    constructor(props) {
        super(props);
        this.calculateAge = this.calculateAge.bind(this)
    }
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
        return age;
    }
    render() {
        return (
            <header className='mainpage-header'>
                <div className='mainpage-header-container'>
                    {/*<div className='mainpage-header-photo'>
                        <img src='/static/face.jpg' alt='My face'/>
        </div>*/}
                    <div className='mainpage-header-info'>
                        <h1><span>Hello 👋 </span>I'm Kamil.</h1>
                        <p>
                        I’m a front-end web developer <br/>
                        developing websites
                        mainly using technologies <br/> like React, Next.js, Vue and Nuxt.
                        </p>
                        <LinkButton text='More about me' href='/about'/>
                    </div>
                </div>
                <a href='#portfolio' className='mainpage-header-bottom-icon-link'>
                    <img className='mainpage-header-bottom-icon' src='/static/fabric-bottom.svg' alt='Swipe up'/>
                </a>
            </header>
        )
    }
}