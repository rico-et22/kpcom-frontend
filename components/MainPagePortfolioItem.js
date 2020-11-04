import Link from 'next/link'

export default function MainPagePortfolioItem(props) {
  return (
    <Link href={`/portfolio#${props.anchorID}`}>
      <a /*onMouseEnter={this.focus} onMouseLeave={this.focus}*/>
        <div className='mainpage-portfolio-item' style={{backgroundImage:`url('${props.image}')`}}>
          <div className={/*this.state.focus ?'mainpage-portfolio-item-caption true' : */'mainpage-portfolio-item-caption'}>
            <h3>{props.title ? props.title : 'Project name'}</h3>
            <h6>{props.technologiesUsed_thumbnail ? props.technologiesUsed_thumbnail : 'Technologies used'}</h6>
          </div>
        </div>
      </a>
    </Link>
  )
}
