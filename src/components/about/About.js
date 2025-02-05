import React from 'react';
import Style from './About.module.scss';
import Terminal from "./Terminal";
import {Box} from "@mui/material";
import {info} from "../../info/Info";


export default function About({innerRef}) {

    function aboutMeText() {
        return <>
          <p><span style={{color: info.baseColor}}>about_me %
          </span>
          {`  ${info.bio1}`}
            </p>
            <p><span style={{color: info.secondaryColor}}>
            {info.bio2}
            </span>
            </p>
            <p><span>
            {info.bio3}
            </span>
            </p>
            <p><span style={{color: info.secondaryColor}}>
            {info.bio4}
            </span>
            </p>
            <p><span style={{color: info.baseColor}}>
            {info.bio5}
            </span>
            </p>
            <p><span style={{color: info.secondaryColor}}>
            {info.bio6}
            </span>
            </p>
            <p><span style={{color: info.secondaryColor}}>
            {info.bio7}
            </span>
            </p>
        </>;
    }

    function skillsText() {
        return <>
            <p style={{color: info.baseColor}}> languages/frameworks</p>
            <ul className={Style.skills}>
                {info.skills.languagesFrameworks.map((proficiency, index) => <li key={index}>{proficiency}</li>)}
            </ul>
            <p style={{color: info.baseColor}}> testing</p>
            <ul className={Style.skills}>
                {info.skills.testing.map((skill, index) => <li key={index}>{skill}</li>)}
            </ul>
            <p style={{color: info.baseColor}}> tools/workflow</p>
            <ul className={Style.skills}>
                {info.skills.toolsWorkflow.map((skill, index) => <li key={index}>{skill}</li>)}
            </ul>
        </>
           
    }

    function industriesText() {
      return <>
        <p><span style={{color: info.baseColor}}>previous_industries </span></p>
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
        <Box className={Style.aboutMe}ref={innerRef} display={'flex'} flexDirection={'column'} alignItems={'center'} mt={'3rem'} id={'about'} marginTop={'0'}>
            <Terminal text={aboutMeText()}/>
            <Terminal text={skillsText()}/>
            <Terminal text={industriesText()}/>
            <Terminal text={miscText()}/>
        </Box>
    )
}