export default function AboutTechnologyGallery(props) {
  const divide = (items, maxItemsInRow) => {
    let length = items.length;
    let rowCount = Math.ceil(length / maxItemsInRow);
    let rows = []
    for (let i=0; i<rowCount; i++) {
      let row = []
      for (let x=0; x<maxItemsInRow; x++) {
        if (items[x + maxItemsInRow*i]) row.push(items[x + maxItemsInRow*i])
      }
      rows.push(row)
    }
    return rows;
  }
  return (
    <div className='about-technology-gallery'>
      {divide(props.images, 3).map((row, index) => (
        <div className='about-technology-gallery-row' key={index}>
          {row.map((img, index) => <img src={img.logo.url} key={index} alt={img.name}/>)}
        </div>
      ))}
    </div>
  )
}         /* {props.images.map(img => <img src={`http://${APIURL}${img.logo.url}`}alt={img.name}/>)}*/
