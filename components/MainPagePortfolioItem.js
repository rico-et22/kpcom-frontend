import {Component} from 'react'
import APIURL from '../components/APIURL'
import Link from 'next/link'
export default class MainPagePortfolioItem extends Component {
    /*constructor(props) {
        super(props);
        this.state = {
            focus: false
        }
        this.focus = this.focus.bind(this)
    }*/
    /*focus() {
        if (!this.state.focus) {
            this.setState({focus: true})
        }
        else {
            this.setState({focus: false})
        }
    }*/
    render() {
        return (
            <Link href={`/portfolio#${this.props.anchorID}`}>
                <a /*onMouseEnter={this.focus} onMouseLeave={this.focus}*/>
                    <div className='mainpage-portfolio-item' style={{backgroundImage:`url('${APIURL}${this.props.image}')`}}>
                        <div className={/*this.state.focus ?'mainpage-portfolio-item-caption true' : */'mainpage-portfolio-item-caption'}>
                            <h3>{this.props.title ? this.props.title : 'Project name'}</h3>
                            <h6>{this.props.technologiesUsed_thumbnail ? this.props.technologiesUsed_thumbnail : 'Technologies used'}</h6>
                        </div>
                    </div>
                </a>
            </Link>
        )
    }
}