export default function AboutExperienceCard(props) {
  return (
    <div className="about-info-card">
      <div className="about-info-card-left">
        {props.image ? (
          <img
            src={props.image.url}
            className="about-info-card-image"
            alt={`Logo of ${props.companyName}`}
          />
        ) : (
          ""
        )}
      </div>
      <div className="about-info-card-right">
        <div className="about-info-card-header-group">
          {props.image ? (
            <img
              src={props.image.url}
              className="about-info-card-image-mobile"
              alt={`Logo of ${props.companyName}`}
            />
          ) : (
            ""
          )}
          <div className="about-info-card-headers">
            <h2>{props.companyName}</h2>
            <h3>{props.jobTitle}</h3>
          </div>
        </div>
        <div className="about-info-card-additionaldata">
          <div className="about-info-card-additionaldata-item">
            <img src="/static/icons/place-gray.svg" alt="Location" />
            <p>{props.location}</p>
          </div>
          <div className="about-info-card-additionaldata-item">
            <img src="/static/icons/clock-outline-gray.svg" alt="Time" />
            <p>{props.time}</p>
          </div>
        </div>
        <div
          className="about-info-card-description"
          dangerouslySetInnerHTML={{ __html: props.description }}
        />
      </div>
    </div>
  );
}
