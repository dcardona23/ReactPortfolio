import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255), rgb(255,255,255)"];
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
    secondaryColor: colors[2],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
      {
        emoji: "⚖️",
        text: "former lawyer"
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
    bio1: "Hi👋 I’m Danielle! After over a decade as a public sector attorney, I’m transitioning into a new field—software development. Fueled by a passion for lifelong learning and a fascination with all things tech, I took a leap of faith - leaving my legal career behind to embark on an exciting new journey.",
    bio2: "While, at first glance this path may not seem especially linear, to me, it's a natural extension of my legal career. I’m taking the parts I loved most about the law:",
    bio3: <ul>
      <li>
      ✅ problem-solving,
      </li>
      <li>
      ✅ logical reasoning,
      </li>
      <li>
      ✅ organization
      </li>
    </ul>, 
    bio4: "...and trading in the not so fun parts of being a lawyer:", 
    bio5: <ul>
      <li>
      ☹️ arguing with opposing counsel, 
      </li>
      <li>
      🥱 responding to discovery,
      </li>
      <li>
      👩🏽‍💼 wearing suits 
      </li>
    </ul>, 
    bio6: "...for the excitement of building something tangible.",
    bio7: "Now, I couldn’t be more excited 🥳 to combine my legal expertise with my growing technical skills to collaborate with innovative teams and create impactful software solutions.",
    skills:
        {
            languagesFrameworks: ['ruby', 'rails', 'javascript', 'sql', 'html', 'css', 'active record', 'react'],
            testing: ['rspec', 'tdd', 'webmock', 'vcr', 'cypress', 'faker', 'factorybot', 'simplecov'],
            toolsWorkflow: ['git', 'github', 'postman', 'postico', 'heroku', 'render', 'netfliy', 'agile development']
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
            image: mock1, 
            contributors: "Alora Riley",
            description: "Rancid Tomatillos is a dynamic, feature-rich movie voting web application that allows users to explore movie details, cast votes for favorites, and view real-time updates on voting trends. My contributions included developing a responsive user interface with React and React Router to display movie posters, implementing functionality for dynamic voting updates, and building a reusable React movie poster component that optimized rendering efficiency while maintaining clean, modular code. I also implemented end-to-end testing with Cypress to validate critical features, including image rendering on page load, dynamic vote tallying, and user navigation reliability."
        },
        {
            title: "Mood Boost",
            live: "https://mood-boost-fe.onrender.com/",
            source1: "https://github.com/Mood-Boost/mood_boost_fe",
            source2: "https://github.com/Mood-Boost/mood_boost_be",
            image: mock2,
            contributors: "Karl Fallenius, Paul Knapp, Terra Manning, Michael O'Brien",
            description: "Mood Boost is a React web application with a Rails API that delivers curated content to uplift users' moods. My contributions included designing a modal with conditional rendering for login and account creation, featuring robust client-side validations; integrating an external API to fetch and display inspirational quotes in a responsive, dynamic user interface; connecting the frontend to the Rails API to manage user profiles and log completed activities for personalized tracking; and implementing end-to-end testing with Cypress to ensure reliable quote fetching, dynamic content updates, and seamless user navigation."
        },
        {
            title: "Festify",
            source1: "https://github.com/dcardona23/festify_react",
            source2: "https://github.com/dcardona23/festify",
            image: mock3,
            solo: "Solo Project", 
            description: "Festify is a music festival scheduling application designed to provide festival administrators with detailed information about festival schedules, shows, and attendees. In this solo project, I was given 16 hours to create a full-stack application with a React frontend and a Rails API backend. I designed a database to store festival schedule information and implemented RESTful API endpoints to fetch schedules and attendees, as well as remove shows from schedules. I also created a responsive, intuitive user interface and implemented robust testing on both the frontend and backend."
        },
        {
            title: "Little Shop",
            source1: "https://github.com/dcardona23/little-shop-fe", 
            source2: "https://github.com/dcardona23/Little_Shop",
            image: mock4, 
            contributors: "Michael O'Brien, Jeremiah Ross, Brian Willett",
            description: "Little Shop is an e-commerce platform that allows users to manage merchants, items, and coupons. My contributions included implementing RESTful API endpoints to create and sort merchants, find merchants by invoice, and create, activate, and deactivate coupons. I also implemented robust backend validations to ensure that only one coupon could be applied to an invoice and to limit merchants to a maximum of five active coupons at a time."
        }
    ]
}