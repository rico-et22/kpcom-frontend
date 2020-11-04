export default function AboutBio(props) {
  return (
    <section className='about-bio'>
      <div className='about-bio-container'>
        <img src='/static/about-arrow.svg' className='about-arrow normal' alt='arrow'/>
          <div dangerouslySetInnerHTML={{__html:props.text[0].text}}></div>
        <img src='/static/about-arrow.svg' className='about-arrow reverse' alt='arrow'/>
      </div>
    </section>
  )
}
