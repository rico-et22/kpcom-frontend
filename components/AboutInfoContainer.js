import {Component} from 'react'

export default class AboutInfoContainer extends Component {
    render() {
        return (
            <section className='about-info'>
                <div className='about-info-container'>
                    {this.props.children}
                </div>
            </section>
        )
    }
}