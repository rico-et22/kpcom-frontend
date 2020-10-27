import {Component} from 'react';
export default class PortfolioPageHeader extends Component {
    render() {
        return (
            <header className='portfolio-page-header'>
                <div className='portfolio-page-header-text'>
                    <h1>My portfolio</h1>
                    <h2>Check out what cool stuff I’ve recently made.</h2>
                </div>
            </header>
        )
    }
}