import MainPagePortfolioItem from './MainPagePortfolioItem'
import LinkButton from '../components/LinkButton'

export default function MainPagePortfolio(props) {
  return (
    <section className='mainpage-portfolio' id='portfolio'>
      <h1>Recent projects</h1>
      <div className='mainpage-portfolio-items'>
      {props.items.slice(0, 3).map((item, index) => (
        <MainPagePortfolioItem 
          itemData={item}
          key={index}
        />
      ))}
      </div>
      <LinkButton href='/portfolio' text='See more'/>
    </section>
  )
}
