import self from "../img/self.jpg"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
// import mock4 from "../img/mock4.png"
// import mock5 from "../img/mock5.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

/* 
This variable will change the layout of the website from multipage to single, scrollable page
*/
export let singlePage = false;

/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Danielle",
    lastName: "Cardona",
    initials: "dc", // the example uses first and last, but feel free to use three or more if you like.
    position: "a Full Stack Developer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
      {
        emoji: "⚖️",
        text: "Former lawyer"
      },  
      {
          emoji: '☃️',
          text: 'based in Colorado'
      },
      
      {
          emoji: "📧",
          text: "danielle.cardona23@gmail.com"
      }, 
    ],
    socials: [
        {
            link: "https://github.com/dcardona23",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/danielle-cardona-se",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        }
    ],
    bio1: "Hi, I'm Danielle! For over a decade, I worked as a lawyer, tackling complex problems, analyzing intricate details, and delivering results. I thrived under pressure, turning challenges into clear, actionable solutions.",
    bio2: "Now, I’m bringing those skills into software development. Learning Ruby, JavaScript, and other languages has been a natural extension of my love for problem-solving, and I’m excited to apply my expertise in new ways. I’m driven by curiosity and always eager to learn. I look forward to combining my legal background with my growing technical skills to contribute to teams and build software that makes a real impact.",
    skills:
        {
            languagesFrameworks: ['ruby', 'rails', 'javascript', 'sql', 'html', 'css', 'active record', 'react'],
            testing: ['rspec', 'tdd', 'cypress', 'webmock', 'vcr', 'simplecov'],
            toolsWorkflow: ['git', 'github', 'postman', 'postico', 'heroku', 'render', 'agile', 'npm']
        }
    ,
    hobbies: [
        {
            label: 'reading',
            emoji: '📖'
        },
        {
            label: 'pickleball',
            emoji: '🥒'
        },
        {
            label: 'snowboarding',
            emoji: '🏂'
        },
        {
            label: 'cooking',
            emoji: '🥘'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    previousIndustries: [
      {
        emoji: '👩🏽‍⚖️',
        label: 'law',
      },
      {
        emoji: '📚',
        label: 'education',
      },
      {
        emoji: '🏥',
        label: 'healthcare'
      }
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Rancid Tomatillos",
            live: "https://cosmic-brioche-acca7e.netlify.app/", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source1: "https://github.com/dcardona23/rancid-tomatillos", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock1
        },
        {
            title: "Mood Boost",
            live: "https://mood-boost-fe.onrender.com/",
            source1: "https://github.com/Mood-Boost/mood_boost_fe",
            source2: "https://github.com/Mood-Boost/mood_boost_be",
            image: mock2
        },
        {
            title: "Festify",
            // live: "https://paytonpierce.dev",
            source1: "https://github.com/dcardona23/festify_react",
            source2: "https://github.com/dcardona23/festify",
            image: mock3
        },
        {
            title: "Project 4",
            live: "https://paytonpierce.dev",
            source1: "https://github.com/paytonjewell"
            // image: mock4
        }
    ]
}