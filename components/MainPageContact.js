import MainPageContactLinkButton from '../components/MainPageContactLinkButton'

export default function MainPageContact(props) {
  const copyright = () => {
    let date = new Date().getFullYear()
    if (date === 2019) {
      return `© ${date} Kamil Pawlak`
    } else {
      return `© 2019-${date} Kamil Pawlak`
    }
  }
  return (
    <footer className='mainpage-contact'>
      <div className='mainpage-contact-left'>
        <h1>Get in touch ✉</h1>
        <p>If you are interested in my work and want to do something with me,
        <br/>feel free to drop me a line 📝.</p>
      </div>
      <div className='mainpage-contact-right'>
        <MainPageContactLinkButton href='mailto:ricoet22@gmail.com' svg='email-black' text='ricoet22@gmail.com' email/>
        <div className="mainpage-contact-buttons">
          {props.links.map((link, index) => (
            <MainPageContactLinkButton href={link.url} svg={link.icon} text={link.text}
            key={index}/>
          ))}
        </div>
        <p className='mainpage-contact-copyright'>{copyright()} <br/> Version 1.2 React + Next.js + Contentful</p>
      </div>
    </footer>
  )
}
