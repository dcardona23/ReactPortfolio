import React from 'react';
import { styled } from '@mui/material';

const StyledLink = styled('a')(({ theme }) => ({
  color: 'black',
  textDecoration: 'none',
  transition: 'transform 0.2s ease-in-out',
  '&:hover': {
    transform: 'scale(1.1)',
  },
}));

const StyledIcon = styled('i')(({ theme }) => ({
  fontSize: '3rem',
  [theme.breakpoints.up('md')]: {
    fontSize: '4rem',
  },
}));

function SocialIcon(props) {
    const {link, icon, label} = props;
    return (
        <StyledLink target="_blank" aria-label={label}
           rel="noopener noreferrer" href={link}>
            <StyledIcon className={icon} aria-hidden="true"/>
        </StyledLink>
    );
}

export default SocialIcon;