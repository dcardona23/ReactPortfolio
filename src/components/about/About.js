import React from 'react';
import { Box, Typography, List, ListItem, styled } from "@mui/material";
import Terminal from "./Terminal";
import { info } from "../../info/Info";

const StyledListItem = styled(ListItem)(({ theme }) => ({
  margin: 0,
  lineHeight: 1.75,
  color: theme.palette.common.white,
  fontFamily: 'Courier New, Courier, monospace',
  fontSize: '1.5rem',
}));

const StyledList = styled(List)(({ theme }) => ({
  columns: 1,
  [theme.breakpoints.up('md')]: {
    columns: 2,
  },
  padding: 0,
  margin: 0,
  listStyle: 'none',
}));

const StyledSection = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  position: 'relative',
  background: 'linear-gradient(135deg, #00C9FF 0%, #FF3CAC 100%)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(3, 0),
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  fontFamily: 'Courier New, Courier, monospace',
  fontSize: '1.5rem',
  color: theme.palette.common.white,
  margin: theme.spacing(1.5, 0),
}));

const TerminalTitle = styled(Typography)(({ theme }) => ({
  fontFamily: 'Courier New, Courier, monospace',
  fontSize: '1.5rem',
  color: info.baseColor,
  margin: theme.spacing(1.5, 0),
}));

export default function About({ innerRef }) {
  const aboutMeText = () => (
    <>
      <StyledTypography>
        <TerminalTitle component="span">
          about_me %
        </TerminalTitle>
        {`  ${info.bio1}`}
      </StyledTypography>
      <StyledTypography sx={{ color: info.secondaryColor }}>
        {info.bio2}
      </StyledTypography>
      <StyledTypography>
        {info.bio3}
      </StyledTypography>
      <StyledTypography sx={{ color: info.secondaryColor }}>
        {info.bio4}
      </StyledTypography>
      <StyledTypography sx={{ color: info.baseColor }}>
        {info.bio5}
      </StyledTypography>
      <StyledTypography sx={{ color: info.secondaryColor }}>
        {info.bio6}
      </StyledTypography>
      <StyledTypography sx={{ color: info.secondaryColor }}>
        {info.bio7}
      </StyledTypography>
    </>
  );

  const skillsText = () => (
    <>
      <StyledTypography>
        <TerminalTitle component="span">
          languages/frameworks %
        </TerminalTitle>
      </StyledTypography>
      <StyledList>
        {info.skills.languagesFrameworks.map((proficiency, index) => (
          <StyledListItem key={index}>{proficiency}</StyledListItem>
        ))}
      </StyledList>
      <StyledTypography>
        <TerminalTitle component="span">
          testing %
        </TerminalTitle>
      </StyledTypography>
      <StyledList>
        {info.skills.testing.map((skill, index) => (
          <StyledListItem key={index}>{skill}</StyledListItem>
        ))}
      </StyledList>
      <StyledTypography>
        <TerminalTitle component="span">
          tools/workflow %
        </TerminalTitle>
      </StyledTypography>
      <StyledList>
        {info.skills.toolsWorkflow.map((skill, index) => (
          <StyledListItem key={index}>{skill}</StyledListItem>
        ))}
      </StyledList>
    </>
  );

  const industriesText = () => (
    <>
      <StyledTypography>
        <TerminalTitle component="span">
          previous_industries %
        </TerminalTitle>
      </StyledTypography>
      <List>
        {info.previousIndustries.map((industry, index) => (
          <StyledListItem key={index}>
            <Box component="span" mr={2}>
              {industry.emoji}
            </Box>
            {industry.label}
          </StyledListItem>
        ))}
      </List>
    </>
  );

  const miscText = () => (
    <>
      <StyledTypography>
        <TerminalTitle component="span">
          hobbies/interests %
        </TerminalTitle>
      </StyledTypography>
      <List>
        {info.hobbies.map((hobby, index) => (
          <StyledListItem key={index}>
            <Box component="span" mr={2}>
              {hobby.emoji}
            </Box>
            {hobby.label}
          </StyledListItem>
        ))}
      </List>
    </>
  );

  return (
    <StyledSection ref={innerRef} id="about">
      <Terminal text={aboutMeText()} />
      <Terminal text={skillsText()} />
      <Terminal text={industriesText()} />
      <Terminal text={miscText()} />
    </StyledSection>
  );
}