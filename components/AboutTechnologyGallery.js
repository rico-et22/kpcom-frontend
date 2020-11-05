export default function AboutTechnologyGallery(props) {
  return (
    <div className='about-technology-gallery'>
      {props.images.map((image, index) => (
          <img src={image.logo.url} key={index} alt={image.name}/>
      ))}
    </div>
  )
}
