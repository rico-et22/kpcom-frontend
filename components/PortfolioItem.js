import {Component} from 'react'
import APIURL from '../components/APIURL'
import Link from 'next/link'
import LinkButton from '../components/LinkButton'
export default class PortfolioItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            focus: false
        }
        this.focus = this.focus.bind(this)
    }
    focus() {
        if (!this.state.focus) {
            this.setState({focus: true})
        }
        else {
            this.setState({focus: false})
        }
    }
    render() {
        return (
                    <div className='portfolio-item' id={this.props.anchorID}>
                        <div className='portfolio-item-image' style={{backgroundImage:`url('${APIURL}${this.props.image}')`}}></div>
                        <div className='portfolio-item-info'>
                            <div className='portfolio-item-up'>
                                <div className='portfolio-item-title'>
                                    <h3>{this.props.title ? this.props.title : 'Project name'}</h3>
                                    <div>{this.props.json ? this.props.json.tech.map(tech => <p className='portfolio-item-tech-breadcrumb' key={tech}>{tech}</p>) : 'Technologies used'}</div>
                                </div>
                                <p>{this.props.description ? this.props.description : 'No description provided'}</p>
                            </div>
                            <div className='portfolio-item-down'>
                                <div className='portfolio-item-buttons-container'>
                                    <a href={this.props.link} className='portfolio-item-button link' target='_blank' rel='noopener'>See it live</a>
                                </div>
                            </div>
                        </div>
                    </div>
        )
    }
}