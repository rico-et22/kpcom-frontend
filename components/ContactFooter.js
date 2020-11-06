import ContactFooterLinkButton from '../components/ContactFooterLinkButton'

export default function ContactFooter(props) {
  const copyright = () => {
    let date = new Date().getFullYear()
    if (date === 2019) {
      return `© ${date} Kamil Pawlak`
    } else {
      return `© 2019-${date} Kamil Pawlak`
    }
  }
  return (
    <footer className='contact-footer'>
      <div className='contact-footer-left'>
        <h1>Let's work together 👨‍💻</h1>
        <p>If you have any job offers or simply want to talk,
        <br/>feel free to connect 🙂.</p>
      </div>
      <div className='contact-footer-right'>
        <ContactFooterLinkButton href={`mailto:${props.emails[0].email}`} svg='email-black' text={props.emails[0].email} email/>
        <div className="contact-footer-buttons">
          {props.links.map((link, index) => (
            <ContactFooterLinkButton href={link.url} svg={link.icon} text={link.text}
            key={index}/>
          ))}
        </div>
        <p className='contact-footer-copyright'>{copyright()} <br/> Version 1.3 React + Next.js + Contentful</p>
      </div>
    </footer>
  )
}
