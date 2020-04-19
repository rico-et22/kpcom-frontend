import {Component} from 'react'
import PortfolioItem from './PortfolioItem'
export default class PortfolioItemContainer extends Component {
    render() {
        return (
            <div className='portfolio-page'>
                <div className='portfolio-item-container'>
                {this.props.items.sort((a,b) => (a.order > b.order) ? 1 : -1).map(item => (
                    <PortfolioItem 
                    title={item.title}
                    technologiesUsed_thumbnail={item.technologiesUsed_thumbnail}
                    image={item.image.url}
                    description={item.description}
                    link={item.link}
                    anchorID={item.anchorID}
                    json={item.technologiesUsed_JSON}
                    key={item.id}
                    usesInternalPreview={item.usesInternalPreview}/>
                ))}
                </div>
            </div>
        )
    }
}