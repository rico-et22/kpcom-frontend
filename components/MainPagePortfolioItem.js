import Link from "next/link";

export default function MainPagePortfolioItem(props) {
  const { image, anchorId, title, technologiesUsed } = props.itemData;
  return (
    <Link href={`/portfolio#${anchorId}`}>
      <div
        className="mainpage-portfolio-item"
        style={{ backgroundImage: `url('${image.url}')` }}
      >
        <div
          className={
            /*this.state.focus ?'mainpage-portfolio-item-caption true' : */ "mainpage-portfolio-item-caption"
          }
        >
          <h3>{title ? title : "Project name"}</h3>
          <h6>
            {technologiesUsed
              ? technologiesUsed.map((tech, index) => (
                  <span key={index}>
                    {tech}
                    {index < technologiesUsed.length - 1 ? "," : ""}{" "}
                  </span>
                ))
              : "Technologies used"}
          </h6>
        </div>
      </div>
    </Link>
  );
}
