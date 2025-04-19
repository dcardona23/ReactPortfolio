import React from 'react';
import { Box, Link } from "@mui/material";

function EmojiBullet(props) {
    const {emoji, text} = props;
    const isEmail = text.includes('@');

    return (
        <Box component={'li'} fontSize={'1rem'} lineHeight={1.5} style={{cursor: 'default'}}>
            <Box component={'span'} aria-label="cheese"
                 role="img"
                 mr={{xs: '0.5rem', md: '1rem'}} fontSize={'1.5rem'}>{emoji}</Box>
            {isEmail ? (
                <Link 
                    href={`mailto:${text}`}
                    sx={{
                        color: 'white',
                        textDecoration: 'none',
                        '&:hover': {
                            textDecoration: 'underline',
                        }
                    }}
                >
                    {text}
                </Link>
            ) : text}
        </Box>
    );
}

export default EmojiBullet;