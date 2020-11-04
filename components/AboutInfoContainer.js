export default function AboutInfoContainer(props) {
  return (
    <section className='about-info'>
      <div className='about-info-container'>
        {props.children}
      </div>
    </section>
  )
}
