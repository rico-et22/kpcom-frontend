import {Component} from 'react'
import MainPagePortfolioItem from './MainPagePortfolioItem'
import LinkButton from '../components/LinkButton'
export default class MainPagePortfolio extends Component {
    render() {
        return (
            <section className='mainpage-portfolio' id='portfolio'>
                <h1>My latest projects</h1>
                <div className='mainpage-portfolio-items'>
                {this.props.items.map(item => (
                    <MainPagePortfolioItem 
                    title={item.title}
                    technologiesUsed_thumbnail={item.technologiesUsed_thumbnail}
                    image={item.image.url}
                    anchorID={item.anchorID}
                    key={item.id}/>
                ))}
                </div>
                <LinkButton href='/portfolio' text='See more'/>
            </section>
        )
    }
}