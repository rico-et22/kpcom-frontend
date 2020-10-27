import {Component} from 'react'
import APIURL from '../components/APIURL'
import Link from 'next/link'
export default class AboutPortfolioGallery extends Component {
rearrange(items) {
    const sortedItems = items.slice(0, 3).sort((a,b) => (a.order > b.order) ? 1 : -1);
    let cutOut = sortedItems.splice(1,1) [0];
    sortedItems.splice(0,0,cutOut);
    return sortedItems;
}
render() {
    return (
        <section className='about-portfolio'>
            <div className='about-portfolio-images'>
                {this.rearrange(this.props.items).map(item => (
                <img src={`${APIURL}${item.image.url}`} key={item.id} alt={item.title} loading='lazy'/>
                ))}
            </div>
            <Link href='/portfolio'>
                <a>Check out my portfolio
                    <div className='about-portfolio-circle'>
                        <img src='/static/icons/arrow-right.svg' alt='Go'/>
                    </div>
                </a>
            </Link>
        </section> 
    )
}
}