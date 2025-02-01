import React from 'react';
import IconLink from "./IconLink";
import {Box} from "@mui/material";
import './Portfolio.css'

function PortfolioBlock(props) {
  const { image, live, source1, source2, title } = props;
  return (
    <div className="page">
        <Box className="project-card">
        <Box className="project-image" component="img" src={image} alt="mockup" />
        <h1 className="movie-title" style={{ fontSize: "2.75rem" }}>{title}</h1>
        <Box className="portfolio">
          {live &&
            <Box p={1} className="icon-link-box" style={{ fontSize: "1.25rem" }}>
              <IconLink link={live} title="Deployed Site" icon="fa fa-safari" />
            </Box>
          }
           <Box p={1} className="icon-link-box" style={{ fontSize: "1.25rem" }}>
              <IconLink link={source1} title="FE Source Code" icon="fa fa-code" />
           </Box>
           {source2 ? (
              <Box p={1} className="icon-link-box" style={{ fontSize: "1.25rem" }}>
                 <IconLink link={source2} title="BE Source Code" icon="fa fa-code" />
              </Box>
           ) : (
            <Box p={1} className="icon-link-box" style={{ visibility: "hidden" }}>
                 <IconLink link="#" title="No BE Code" icon="fa fa-code" />
              </Box>
           )}
        </Box>
     </Box>
    </div>
  );
}


export default PortfolioBlock;