import React from 'react';
import { Box, Typography, Button, styled } from "@mui/material";
import me from '../../img/self.png';
import EmojiBullet from "./EmojiBullet";
import SocialIcon from "./SocialIcon";
import { info } from "../../info/Info";

const StyledMain = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(135deg, #00C9FF 0%, #FF3CAC 100%)',
  minHeight: 'calc(100vh - 175px)',
  display: 'flex',
  flexDirection: { xs: 'column', md: 'row' },
  alignItems: 'center',
  justifyContent: 'center',
  gap: '5vw',
}));

const StyledImage = styled('img')(({ theme }) => ({
  height: '45vh',
  width: 'auto',
  margin: '20px',
  borderRadius: '30px',
}));

const StyledTitle = styled(Typography)(({ theme }) => ({
  textAlign: { xs: 'center', md: 'left' },
  color: 'white',
  fontSize: { xs: '3rem', md: '4.5rem' },
  fontWeight: 600,
}));

const StyledHand = styled('span')(({ theme }) => ({
  display: 'inline-block',
  animation: 'wave 2.5s infinite',
  transformOrigin: '70% 70%',
  '@keyframes wave': {
    '0%': { transform: 'rotate(0.0deg)' },
    '10%': { transform: 'rotate(14.0deg)' },
    '20%': { transform: 'rotate(-8.0deg)' },
    '30%': { transform: 'rotate(14.0deg)' },
    '40%': { transform: 'rotate(-4.0deg)' },
    '50%': { transform: 'rotate(10.0deg)' },
    '60%': { transform: 'rotate(0.0deg)' },
    '100%': { transform: 'rotate(0.0deg)' },
  },
}));

const StyledList = styled(Box)(({ theme }) => ({
  padding: '0.8rem',
  color: 'white',
  '& ul': {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
}));

const StyledListItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
  marginBottom: '0.5rem',
}));

const StyledResumeButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#1a1f21',
  display: 'inline-block',
  padding: '0.5em 1em',
  fontSize: '1rem',
  fontWeight: 600,
  textAlign: 'center',
  textDecoration: 'none',
  border: 'none',
  borderRadius: '1rem',
  cursor: 'pointer',
  marginTop: '1rem',
  marginBottom: '1rem',
  color: 'white',
  '&:hover': {
    backgroundColor: 'white',
    color: 'black',
    transform: 'scale(1.01)',
    boxShadow: '0 6px 8px rgba(0, 0, 0, 0.15)',
  },
}));

const StyledSocialBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '2rem',
  fontSize: { xs: '1rem', md: '2.5rem' },
  justifyContent: { xs: 'center', md: 'flex-start' },
}));

export default function Home({ innerRef }) {
  return (
    <StyledMain ref={innerRef} component="main" id="home">
      <StyledImage alt="me" src={me} />
      <Box>
        <StyledTitle variant="h2">
          Hi, I'm {info.firstName}
          <StyledHand>🤚</StyledHand>
        </StyledTitle>
        <StyledTitle variant="h2">
          I'm {info.position}.
        </StyledTitle>
        <StyledList component="ul">
          {info.miniBio.map((bio, index) => (
            <StyledListItem key={index}>
              <Typography variant="body1" sx={{ color: 'white', fontSize: '1.5rem' }}>
                {bio.emoji}
              </Typography>
              <Typography variant="body1" sx={{ color: 'white' }}>
                {bio.text}
              </Typography>
            </StyledListItem>
          ))}
          <StyledResumeButton
            href="/resume.pdf"
            download
            id="resume-link"
            variant="contained"
          >
            Check Out My Resume
          </StyledResumeButton>
        </StyledList>
        <StyledSocialBox>
          {info.socials.map((social, index) => (
            <SocialIcon
              key={index}
              link={social.link}
              icon={social.icon}
              label={social.label}
            />
          ))}
        </StyledSocialBox>
      </Box>
    </StyledMain>
  );
}