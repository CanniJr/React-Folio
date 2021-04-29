import emoji from "react-easy-emoji";

const illustration = {
  animated: true // set to false to use static SVG
};

const greeting = {
  username: "Cannigia Laluw",
  title: "Hi all, I'm Canni 🇮🇩",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of designing and building Web and Mobile applications with JavaScript / Reactjs and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1nPuOkJmPZiJhR3gRbl7FEXzZopavQ9t8/view?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/CanniJr",
  linkedin: "https://www.linkedin.com/in/cannigialaluw",
  gmail: "cannigialaluw@gmail.com",
  // gitlab: "https://gitlab.com/",
  // facebook: "https://www.facebook.com/",
  medium: "https://cannigialaluw.medium.com/",
  // instagram: 'https://www.instagram.com/davidrakosi/',
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    // {
    //   skillName: "html-5",
    //   fontAwesomeClassname: "fab fa-html5"
    // },
    // {
    //   skillName: "css3",
    //   fontAwesomeClassname: "fab fa-css3-alt"
    // },
    // {
    //   skillName: "sass",
    //   fontAwesomeClassname: "fab fa-sass"
    // },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    // {
    //   skillName: "nodejs",
    //   fontAwesomeClassname: "fab fa-node"
    // },
    // {
    //   skillName: "swift",
    //   fontAwesomeClassname: "fab fa-swift"
    // },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Flatiron School",
      logo: require("./assets/images/Flatiron.png"),
      subHeader: "Software Engineering Immersive Program",
      duration: "August 2020 - November 2020",
      desc: "15 weeks of learning Full-Stack Web Developing using Ruby, JavaScript and their Frameworks (Ruby on Rails and React).",
      descBullets: [
        "Graduated the program with 5 capstone projects with the final one being a full-stack using Ruby on Rails for the Back-end, and React Front-end."
      ]
    },
    {
      schoolName: "Trisakti Institute of Tourism, Indonesia",
      logo: require("./assets/images/trisakti.jpeg"),
      subHeader: "Bachelor of Applied Science in Hospitality Management",
      duration: "August 2008 - October 2012",
      desc:
        "Learned about managing a hotel business and how to work as a hotelier in back and front of house.",
      // descBullets: [""]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend / Design", //Insert stack or technology you have experience in
      progressPercentage: "70%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "30%"
    },
    {
      Stack: "Programming",
      progressPercentage: "50%"
    }
  ],
  displayCodersrank: true // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Warehouse Associate",
      company: "Amazon",
      companylogo: require("./assets/images/amazon.png"),
      date: "November 2017 - October 2020",
      desc:
        "-----------------------------------",
      descBullets: [
        "Achieved a consisten high production rate during my time as a packer with 300 boxes per hour",
        "Trained over 70+ onboarding associate as Direct role ambassador",
        "Achieved daily goals of shipping over 10000 units in one work shift",
        "Trained 20+ people to be in the Indirect role(Problem Solver)"
      ]
    },
    {
      role: "Busser / Server",
      company: "Sushi Of Gari",
      companylogo: require("./assets/images/sog.png"),
      date: "August 2013 - June 2017",
      desc:
        "-----------------------------------",
      descBullets: [
        "Maintain a steady workflow between the back and front of house",
        "Handled busy days with over 160 parties of 2 or more as a single busser and helped with server duty."
      ]
    },
    {
      // role: "",
      company: "",
      // companylogo: require("./assets/images/sog.png"),
      date: "Other Work experiences",
      desc:
        "-----------------------------------",
      descBullets: [
        "Starbucks Indonesia (2011 - 2012) ",
        "Mandarin Oriental Hotel Jakarta (2010 - 2011)"
      ]
    },

  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "CanniJr", // Change to your github username to view your profile in Contact Section.
  showGithubProfile: true, // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "Some of the projects I created during bootcamp and after",
  projects: [
    {
      image: require("./assets/images/amaclone.png"),
      projectName: "Amaclone",
      projectDesc: "E-commerce website with Firebase login functionality and to store database, also Stripe to process user payments.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://amaclone01.web.app/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/trackit19.png"),
      projectName: "Trackit - 19",
      projectDesc: "React app to track coronavirus cases, recovery and deaths using Leaflet.js for map functionality.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/CanniJr/trackit-19"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        {
          name: "Certification",
          url:
            ""
        },
        {
          name: "Award Letter",
          url:
            ""
        },
        {
          name: "Google Code-in Blog",
          url:
            ""
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [
        {
          name: "View Google Assistant Action",
          url:
            ""
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: ""
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "I wrote about what I learned so far. I hope it can inspire others to learn as well.",

  blogs: [
    {
      url:
        "https://medium.com/swlh/working-on-dom-nodes-and-its-properties-in-javascript-af3ac77f803",
      title: "Working on DOM Nodes and Their Properties in JavaScript",
      description:
        "Beginners insight on how to work on DOM nodes in JavaScript"
    },
    {
      url: "https://cannigialaluw.medium.com/mapping-with-react-leaflet-js-5079ba516f00",
      title: "Mapping with React Leaflet.js",
      description:
        "React is a JavaScript library for building User Interface. This is a library that can be used inside a React app to render a map and some other functionalitites"
    },
    {
      url: "https://cannigialaluw.medium.com/treat-your-mock-technical-interviews-as-a-real-interview-e55846d9d5f3",
      title: "Treat your Mock Technical Interviews as a real interview",
      description:
        "Mock interviews are as important as the real one, so if you ever get a chance for one, try and ace it for real!"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    ""
  ),

  talks: [
    {
      title: "",
      subtitle: "",
      slides_url: "",
      event_url: ""
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    ""
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "(908) 463 2699",
  email_address: "cannigialaluw@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "canni_junior", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
