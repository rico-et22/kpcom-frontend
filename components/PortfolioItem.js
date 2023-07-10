export default function PortfolioItem(props) {
  const {
    anchorId,
    image,
    title,
    technologiesUsed,
    description,
    previewLink,
    repoLink,
    date,
  } = props.itemData;
  return (
    <div className="portfolio-item" id={anchorId}>
      <div
        className="portfolio-item-image"
        style={{ backgroundImage: `url('${image.url}')` }}
      ></div>
      <div className="portfolio-item-info">
        <div className="portfolio-item-up">
          <div className="portfolio-item-title">
            <h3>
              {title ? title : "Project name"} <span>{date}</span>
            </h3>
            <div>
              {technologiesUsed
                ? technologiesUsed.map((tech) => (
                    <p className="portfolio-item-tech-breadcrumb" key={tech}>
                      {tech}
                    </p>
                  ))
                : "Technologies used"}
            </div>
          </div>
          <div
            className="portfolio-item-description"
            dangerouslySetInnerHTML={{
              __html: description ? description : "No description provided",
            }}
          />
        </div>
        <div className="portfolio-item-down">
          <div className="portfolio-item-buttons-container">
            {previewLink && (
              <a
                href={previewLink}
                className="portfolio-item-button link"
                target="_blank"
                rel="noopener"
              >
                See it live
              </a>
            )}
            {repoLink && (
              <a
                href={repoLink}
                className="portfolio-item-button link github"
                target="_blank"
                rel="noopener"
              >
                GitHub repo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
