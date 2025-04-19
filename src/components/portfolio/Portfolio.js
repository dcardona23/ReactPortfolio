import React from 'react';
import { Box, Grid, Container, styled } from "@mui/material";
import PortfolioBlock from "./PortfolioBlock";
import { info } from "../../info/Info";

const StyledPortfolio = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(135deg, #00C9FF 0%, #FF3CAC 100%)',
  backgroundAttachment: 'fixed',
  minHeight: '100%',
  padding: '1.5rem',
  boxSizing: 'border-box',
}));

const StyledContainer = styled(Container)(({ theme }) => ({
  marginTop: '2rem',
}));

export default function Portfolio({ innerRef }) {
  return (
    <StyledPortfolio id="portfolio" ref={innerRef}>
      <StyledContainer maxWidth="xl">
        <Grid container spacing={4}>
          {info.portfolio.map((project, index) => (
            <Grid item xs={12} lg={6} key={index}>
              <PortfolioBlock
                image={project.image}
                live={project.live}
                source1={project.source1}
                source2={project.source2}
                title={project.title}
                contributors={project.contributors}
                description={project.description}
                solo={project.solo}
              />
            </Grid>
          ))}
        </Grid>
      </StyledContainer>
    </StyledPortfolio>
  );
}