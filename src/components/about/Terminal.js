import React from 'react';
import { Box, styled } from "@mui/material";

const StyledTerminal = styled(Box)(({ theme }) => ({
  width: '65%',
  borderRadius: '0.5rem',
  marginBottom: theme.spacing(0.5),
  marginTop: '40px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  display: 'flex',
  flexDirection: 'column',
  marginLeft: 'auto',
  marginRight: 'auto',
}));

const TerminalHeader = styled(Box)(({ theme }) => ({
  backgroundColor: '#8c8c8c',
  padding: theme.spacing(0.5),
  borderRadius: '0.5rem 0.5rem 0 0',
  fontSize: '1rem',
  width: '100%',
}));

const TerminalContent = styled(Box)(({ theme }) => ({
  padding: {
    xs: theme.spacing(2, 3),
    md: theme.spacing(3, 4),
  },
  borderRadius: '0 0 0.5rem 0.5rem',
  backgroundColor: '#27242f',
  fontSize: '1.5rem',
  fontFamily: 'Courier New, Courier, monospace',
  width: '100%',
  boxSizing: 'border-box',
  '& p, & li': {
    margin: theme.spacing(1.5, 0),
    color: theme.palette.common.white,
    wordBreak: 'break-word',
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
  },
  '& a, & a:visited': {
    animation: 'changeColors 3s infinite',
    fontWeight: 'bold',
  },
  '@keyframes changeColors': {
    '0%': {
      color: '#00a47f',
    },
    '33.3%': {
      color: '#1d91e3',
    },
    '66.6%': {
      color: '#d419fe',
    },
    '100%': {
      color: '#00a47f',
    },
  },
}));

const TerminalIcon = styled('i')(({ theme, color }) => ({
  paddingLeft: theme.spacing(0.5),
  color: color,
}));

function Terminal({ text }) {
  return (
    <StyledTerminal component="section">
      <TerminalHeader>
        <TerminalIcon className="fa fa-circle" color="#ff5f56" />
        <TerminalIcon className="fa fa-circle" color="#ffbd2e" />
        <TerminalIcon className="fa fa-circle" color="#27c93f" />
      </TerminalHeader>
      <TerminalContent>
        {text}
      </TerminalContent>
    </StyledTerminal>
  );
}

export default Terminal;