import {Component} from 'react';
export default class PortfolioPageHeader extends Component {
    render() {
        return (
            <header className='portfolio-page-header'>
                <div className='portfolio-page-header-text'>
                    <h1>My portfolio</h1>
                    <h2>Check out what cool stuff <br/>
                        I’ve recently made.</h2>
                </div>
                <div className='portfolio-page-header-color'></div>
                <div className='portfolio-page-header-image' style={{'background-image':`url('/static/background.jpg')`}}>
                </div>
            </header>
        )
    }
}