import PortfolioItem from './PortfolioItem'

export default function PortfolioItemContainer(props) {
  return (
    <div className='portfolio-page'>
      <div className='portfolio-item-container'>
        {props.items.map((item, index) => (
          <PortfolioItem 
            itemData={item}
            key={index}
          />
        ))}
      </div>
    </div>
  )
}
