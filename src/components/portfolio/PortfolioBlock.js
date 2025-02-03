import React from 'react';
import IconLink from "./IconLink";
import './Portfolio.css';

function PortfolioBlock(props) {
  const { image, live, source1, source2, title, contributors, description, solo } = props;
  return (
    <div className="page">
      <div className="project-card-container">
      <section className="project-card">
        <h1 className="project-title">{title}</h1>
        <img className="project-image" component="img" src={image} alt="mockup" />
        <p className="project-description">{description}</p>
        {solo &&
          <p className="project-contributors">{solo}</p>}
        {contributors && 
          <p className="project-contributors">Contributors: {contributors}</p>}
          <div className="buttons">
            {live && (
            <button className="icon-link-box">
              <IconLink link={live} title="Deployed Site" icon="fa fa-safari" />
            </button>
            )}
            <button className="icon-link-box">
              <IconLink link={source1} title="FE Source Code" icon="fa fa-code" />
            </button>
            {source2 && (
              <button className="icon-link-box">
                <IconLink link={source2} title="BE Source Code" icon="fa fa-code" />
              </button>
            )
          }
          </div>
      </section>
      </div>
    </div>
  );
}

export default PortfolioBlock;
