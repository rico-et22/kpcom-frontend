import LinkButton from '../components/LinkButton'

export default function MainPageHeader(props) {
  return (
    <header className='mainpage-header'>
      <div className='mainpage-header-container'>
        <div className='mainpage-header-info'>
          <h1><span>Hello 👋 </span>I'm Kamil.</h1>
          <p>
          I’m a front-end web developer <br/>
          developing websites
          mainly using technologies <br/> like React, Next.js and more.
          </p>
          <LinkButton text='More about me' href='/about'/>
        </div>
      </div>
    </header>
  )
}
