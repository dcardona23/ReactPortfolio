import React from 'react';
import { styled } from '@mui/material';

const StyledLink = styled('a')(({ theme }) => ({
  color: 'black',
  textDecoration: 'none',
  '&:hover': {
    color: 'white',
  },
}));

function IconLink(props) {
   const {link, title, icon} = props;
   return (
      <StyledLink href={link} target={"_blank"} rel="noopener noreferrer">
         <i className={icon}/> {title}
      </StyledLink>
   );
}

export default IconLink;