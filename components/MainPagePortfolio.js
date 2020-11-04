import MainPagePortfolioItem from './MainPagePortfolioItem'
import LinkButton from '../components/LinkButton'

export default function MainPagePortfolio(props) {
  return (
    <section className='mainpage-portfolio' id='portfolio'>
      <h1>My latest projects</h1>
      <div className='mainpage-portfolio-items'>
      {props.items.slice(0, 3).map((item, index) => (
        <MainPagePortfolioItem 
        title={item.title}
        technologiesUsed_thumbnail={item.technologiesUsed_thumbnail}
        image={item.image.url}
        anchorID={item.anchorID}
        key={index}/>
      ))}
      </div>
      <LinkButton href='/portfolio' text='See more'/>
    </section>
  )
}
