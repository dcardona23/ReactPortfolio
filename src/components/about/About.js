import React from 'react';
import Style from './About.module.scss';
import Terminal from "./Terminal";
import {Box} from "@mui/material";
import {info} from "../../info/Info";


export default function About({innerRef}) {

    function aboutMeText() {
        return <>
          <p><span style={{color: info.baseColor}}>about_me </span>
            {info.bio1}
            </p>
            <p><span style={{color: info.baseColor}}></span>
            {info.bio2}
            </p>
        </>;
    }

    function skillsText() {
        return <>
         <p><span style={{color: info.baseColor}}>skills/tools </span></p>
            <p style={{color: info.baseColor}}> Languages/Frameworks</p>
            <ul className={Style.skills}>
                {info.skills.languagesFrameworks.map((proficiency, index) => <li key={index}>{proficiency}</li>)}
            </ul>
            <p style={{color: info.baseColor}}> Testing</p>
            <ul className={Style.skills}>
                {info.skills.testing.map((skill, index) => <li key={index}>{skill}</li>)}
            </ul>
            <p style={{color: info.baseColor}}> Tools/Workflow</p>
            <ul className={Style.skills}>
                {info.skills.toolsWorkflow.map((skill, index) => <li key={index}>{skill}</li>)}
            </ul>
        </>
           
    }

    function industriesText() {
      return <>
        <p><span style={{color: info.baseColor}}>previous industries </span></p>
          <ul>
              {info.previousIndustries.map((industry, index) => (
                  <li key={index}><Box component={'span'} mr={'1rem'}>{industry.emoji}</Box>{industry.label}</li>
              ))}
          </ul>
      </>
    }

    function miscText() {
        return <>
            <p><span style={{color: info.baseColor}}>hobbies/interests </span></p>
            <ul>
                {info.hobbies.map((hobby, index) => (
                    <li key={index}><Box component={'span'} mr={'1rem'}>{hobby.emoji}</Box>{hobby.label}</li>
                ))}
            </ul>
        </>;
    }

    return (
        <Box ref={innerRef} display={'flex'} flexDirection={'column'} alignItems={'center'} mt={'3rem'} id={'about'}>
            <Terminal text={aboutMeText()}/>
            <Terminal text={skillsText()}/>
            <Terminal text={industriesText()}/>
            <Terminal text={miscText()}/>
        </Box>
    )
}