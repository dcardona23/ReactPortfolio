import React from 'react';
import Style from './Home.module.scss';
import me from '../../img/self.png';
import classNames from 'classnames';
import EmojiBullet from "./EmojiBullet";
import SocialIcon from "./SocialIcon";
import {Box} from "@mui/material";
import {info} from "../../info/Info";

export default function Home({innerRef}) {

   return (
      <Box className={Style.mainInfo} ref={innerRef} component={'main'} display={'flex'} flexDirection={{xs: 'column', md: 'row'}} alignItems={'center'}
           justifyContent={'center'} minHeight={'calc(100vh - 175px)'} id={'home'}>
            <img id={Style.me} alt={'me'} src={me}></img>
         <Box className={classNames(Style.avatar, Style.shadowed)} ></Box>
         <Box>
            <h2>Hi, I'm {info.firstName}<span className={Style.hand}>🤚</span>
            </h2>
            <h2>I'm {info.position}.</h2>
            <Box component={'ul'} p={'0.8rem'} color={"white"}>
               {info.miniBio.map((bio, index) => (
                  <EmojiBullet key={index} emoji={bio.emoji} text={bio.text}/>
               ))}
              <a className={Style.resume} href="/resume.pdf" download id="resume-link">Check Out My Resume</a>
            </Box>
            <Box className={Style.social} display={'flex'} gap={'2rem'} fontSize={{xs: 'rem', md: '2.5rem'}}>
               {info.socials.map((social, index) => (
                  <SocialIcon key={index} link={social.link} icon={social.icon} label={social.label} />
               ))}
            </Box>
         </Box>
      </Box>
   )
}