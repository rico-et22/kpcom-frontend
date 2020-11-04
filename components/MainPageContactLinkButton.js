export default function MainPageContactLinkButton(props) {
  return (
    <a href={props.href} className={props.email ? "mainpage-contact-link-button email" : "mainpage-contact-link-button"}>
      <img src={`/static/icons/${props.svg}.svg`} className='mainpage-contact-link-button-svg' alt={props.svg}/>
      {props.text}
    </a>
  )
}
