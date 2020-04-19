import {Component} from 'react'
import APIURL from '../components/APIURL'
export default class AboutExperienceCard extends Component {
    render() {
        return (
            <div className='about-info-card'>
                <div className='about-info-card-left'>
                    {this.props.image ? <img src={`${APIURL}${this.props.image.url}`} className='about-info-card-image'  alt={`Logo of ${this.props.companyName}`}/> : ''}
                </div>
                <div className='about-info-card-right'>
                    <div className='about-info-card-header-group'>
                        {this.props.image ? <img src={`${APIURL}${this.props.image.url}`} className='about-info-card-image-mobile' alt={`Logo of ${this.props.companyName}`}/> : ''}
                        <div className='about-info-card-headers'>
                            <h2>{this.props.companyName}</h2>
                            <h3>{this.props.jobTitle}</h3>
                        </div>
                    </div>
                    <div className='about-info-card-additionaldata'>
                        <div className='about-info-card-additionaldata-item'>
                            <img src='/static/icons/place-gray.svg' alt='Location'/>
                            <p>{this.props.location}</p>
                        </div>
                        <div className='about-info-card-additionaldata-item'>
                            <img src='/static/icons/clock-outline-gray.svg' alt='Time'/>
                            <p>{this.props.time}</p>
                        </div>
                    </div>
                    <p className='about-info-card-description' dangerouslySetInnerHTML={{__html:this.props.description}}/>
                </div>
            </div>
        )
    }
}