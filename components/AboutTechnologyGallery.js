import {Component} from 'react'
import APIURL from '../components/APIURL'
export default class AboutTechnologyGallery extends Component {
    divide(items, maxItemsInRow) {
        let length = items.length;
        let rowCount = Math.ceil(length / maxItemsInRow);
        let rows = []
        for (let i=0; i<rowCount; i++) {
            let row = []
            for (let x=0; x<maxItemsInRow; x++) {
                row.push(items[x + maxItemsInRow*i])
            }
            rows.push(row)
        }
        return rows;
    }
    render() {
        return (
            <div className='about-technology-gallery'>
                {this.divide(this.props.images, 3).map((row, index) => (
                <div className='about-technology-gallery-row' key={index}>
                    {row.map(img => <img src={`${APIURL}${img.logo.url}`} key={img.id}alt={img.name}/>)}
                </div>
                ))}
            </div>
        )
    }
}               /* {this.props.images.map(img => <img src={`http://${APIURL}${img.logo.url}`}alt={img.name}/>)}*/