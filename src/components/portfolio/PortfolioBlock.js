import React from 'react';
import { Box, Typography, Button, styled } from "@mui/material";
import IconLink from "./IconLink";
import './Portfolio.css';

const StyledCard = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '2rem',
  background: 'rgba(255, 255, 255, 0.95)',
  borderRadius: '15px',
  boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)',
  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
  width: '600px',
  height: '1050px',
  margin: '0.5rem 1rem 1.5rem 1rem',
  overflow: 'hidden',
  border: '2px solid black',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 12px 25px rgba(0, 0, 0, 0.2)',
  },
}));

const StyledTitle = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  width: '100%',
  fontSize: '2.5rem',
  color: '#333',
  marginTop: '1rem',
  marginBottom: '1rem',
}));

const StyledImage = styled('img')(({ theme }) => ({
  width: '90%',
  height: 'auto',
  borderRadius: '10px',
  objectFit: 'cover',
  marginBottom: '1rem',
}));

const StyledDescription = styled(Typography)(({ theme }) => ({
  textAlign: 'justify',
  padding: '1rem',
  borderRadius: '12px',
  backgroundColor: 'skyblue',
  color: '#343434',
  fontSize: '1rem',
  fontWeight: 500,
  lineHeight: 1.6,
  boxShadow: '0 6px 15px rgba(0, 0, 0, 0.15)',
  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
  marginBottom: '0.5rem',
  border: '2px solid black',
  height: '350px',
  width: '100%',
  overflow: 'hidden',
  '&:hover': {
    transform: 'scale(1.02)',
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)',
  },
}));

const StyledContributors = styled(Typography)(({ theme }) => ({
  width: '100%',
  maxWidth: '600px',
  fontSize: '1.2rem',
  fontWeight: 'bold',
  marginBottom: '0.5rem',
}));

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#1a1f21',
  color: 'white',
  display: 'inline-block',
  padding: '0.5em 1em',
  fontSize: '1rem',
  fontWeight: 600,
  textAlign: 'center',
  textDecoration: 'none',
  border: 'none',
  borderRadius: '1rem',
  cursor: 'pointer',
  margin: '0.5rem',
  '&:hover': {
    backgroundColor: 'white',
    color: 'black',
    transform: 'scale(1.01)',
    boxShadow: '0 6px 8px rgba(0, 0, 0, 0.15)',
  },
}));

const StyledButtonsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  gap: '1rem',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: '0.5rem',
  marginBottom: '0.25rem',
  flexWrap: 'nowrap',
}));

function PortfolioBlock(props) {
  const { image, live, source1, source2, title, contributors, description, solo } = props;
  return (
    <StyledCard>
      <StyledTitle variant="h2">{title}</StyledTitle>
      <StyledImage src={image} alt="mockup" />
      <StyledDescription>{description}</StyledDescription>
      {solo && <StyledContributors>{solo}</StyledContributors>}
      {contributors && <StyledContributors>Contributors: {contributors}</StyledContributors>}
      <StyledButtonsContainer>
        {live && (
          <StyledButton>
            <IconLink link={live} title="Deployed Site" />
          </StyledButton>
        )}
        <StyledButton>
          <IconLink link={source1} title="FE Source Code" />
        </StyledButton>
        {source2 && (
          <StyledButton>
            <IconLink link={source2} title="BE Source Code" />
          </StyledButton>
        )}
      </StyledButtonsContainer>
    </StyledCard>
  );
}

export default PortfolioBlock;
