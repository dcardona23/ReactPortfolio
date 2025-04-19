import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Box, 
  styled,
  Button
} from "@mui/material";
import { info } from "../info/Info";
import { singlePage } from '../info/Info';

const StyledLink = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  color: theme.palette.text.primary,
  '&:hover': {
    color: theme.palette.text.primary,
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  margin: '0 0.5rem',
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  color: 'black',
  fontWeight: 500,
  textTransform: 'lowercase',
}));

const StyledBox = styled(Box)(({ theme }) => ({
  borderBottom: '5px solid',
  borderImageSlice: 1,
  borderImageSource: info.gradient,
}));

const links = [
  {
    name: 'Home',
    to: '',
    active: 'home'
  },
  {
    name: 'About Me',
    to: 'about',
    active: 'about'
  },
  {
    name: info.initials,
    type: 'initials',
    to: '',
    active: 'home'
  },
  {
    name: 'Portfolio',
    to: 'portfolio',
    active: 'portfolio'
  }
];

// This function is used to create a scroll offset to compensate for the navbar
// when you click on the nav buttons to scroll down.
const scrollWidthOffset = (el) => {
  const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
  const yOffset = -80; 
  window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
};

export default function Navbar({ handleClick, active, setActive }) {
  return (
    <AppBar 
      position={singlePage ? 'fixed' : 'relative'}
      sx={{
        backgroundColor: 'background.paper',
        boxShadow: 'none',
        transition: 'all 400ms',
        zIndex: 1,
        color: 'text.primary',
        paddingBottom: '0.5rem',
      }}
    >
      <Toolbar>
        <Box 
          component="ul" 
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: { xs: '2rem', md: '6rem' },
            width: '100%',
            listStyle: 'none',
            p: 0,
            m: 0,
            color: 'text.primary',
          }}
        >
          {links.map((link, index) => (
            <Box 
              key={index} 
              component="li"
              sx={{
                ...(link.active === active && !link.type && {
                  borderBottom: '5px solid',
                  borderImageSlice: 1,
                  borderImageSource: info.gradient,
                }),
                color: 'text.primary',
              }}
            >
              <StyledLink
                to={singlePage ? `#${link.to}` : `/${link.to}`}
                scroll={el => scrollWidthOffset(el)}
                smooth
                onClick={() => setActive(link.active)}
              >
                {!link.type ? (
                  <StyledTypography variant="h6">
                    {link.name}
                  </StyledTypography>
                ) : (
                  <Typography 
                    variant="h4" 
                    component="h1" 
                    sx={{ 
                      color: 'text.primary',
                      textTransform: 'lowercase',
                    }}
                  >
                    {link.name}
                  </Typography>
                )}
              </StyledLink>
            </Box>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}