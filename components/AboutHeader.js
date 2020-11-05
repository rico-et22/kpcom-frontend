export default function AboutHeader(props) {
  const checkRelocation = (value) => {
    if (value == false) {
      return <span className='about-header-infobox-noremote'> • Remote or local work only, not available for relocation</span>;
    }
  }
  return (
    <header className='about-header'>
      <div className='about-header-container'>
        <div className='about-header-left'>
          <img src='/static/face.jpg' className='about-header-photo'
          alt='My face'/>
        </div>
        <div className='about-header-right'>
          <h1>Kamil Pawlak</h1>
          <h3>Front-end web developer</h3>
          <div className='about-header-infobox'>
            <div className='about-header-infobox-item'>
              <img src='/static/icons/place.svg' className='about-header-infobox-icon' alt='Location'/>
              <p>{props.location[0].location}{checkRelocation(props.location[0].availableForRelocation)}</p>
            </div>
            <div className='about-header-infobox-item'>
              {props.social.map((social, index) => (
                <a href={social.link} className='about-header-infobox-link' key={index}>
                  <img src={`/static/icons/${social.icon}.svg`} alt={social.name}/>
                  {social.name}
                </a>
              ))}
              <a className='about-header-infobox-link' href={`mailto:${props.emails[0].email}`}>
                <img src={`/static/icons/email.svg`} alt='Email'/>
                Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
