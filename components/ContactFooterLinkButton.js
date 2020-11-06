export default function ContactFooterLinkButton(props) {
  return (
    <a href={props.href} className={props.email ? "contact-footer-link-button email" : "contact-footer-link-button"}>
      <img src={`/static/icons/${props.svg}.svg`} className='contact-footer-link-button-svg' alt={props.svg}/>
      {props.text}
    </a>
  )
}
