import LinkButton from '../components/LinkButton'

export default function MainPageHeader(props) {
  return (
    <header className='mainpage-header'>
      <div className='mainpage-header-container'>
        {/*<div className='mainpage-header-photo'>
          <img src='/static/face.jpg' alt='My face'/>
  </div>*/}
        <div className='mainpage-header-info'>
          <h1><span>Hello 👋 </span>I'm Kamil.</h1>
          <p>
          I’m a front-end web developer <br/>
          developing websites
          mainly using technologies <br/> like React, Next.js, Vue and Nuxt.
          </p>
          <LinkButton text='More about me' href='/about'/>
        </div>
      </div>
      <a href='#portfolio' className='mainpage-header-bottom-icon-link'>
        <img className='mainpage-header-bottom-icon' src='/static/fabric-bottom.svg' alt='Swipe up'/>
      </a>
    </header>
  )
}
