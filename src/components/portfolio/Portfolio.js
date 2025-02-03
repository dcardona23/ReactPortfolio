import React from 'react';
import PortfolioBlock from "./PortfolioBlock";
import {Box, Grid} from "@mui/material";
import {info} from "../../info/Info";

export default function Portfolio({innerRef}) {
    return (
        <Box id={'portfolio'} ref={innerRef}>
            <Grid container display={'flex'} justifyContent={'center'}>
                {info.portfolio.map((project, index) => (
                   <Grid item xs={12} md={6} key={index} style={{height: 'auto' }}>
                       <PortfolioBlock image={project.image} live={project.live} source1={project.source1} source2={project.source2} title={project.title} contributors={project.contributors} description={project.description} solo={project.solo}/>
                   </Grid>
                ))}
            </Grid>
        </Box>
    );
};