// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Santiago",
  middleName: "",
  lastName: "Restrepo",
  message: "A passionate fullstack web developer",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/santiagor06",
    },

    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/santiagorestrepo06/",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/santiago1.jpg"),
  imageSize: 375,
  message:
    "I am a full Stack Developer,with experience working in NodeJS, React, Redux, and SQL among other technologies in the industry. I started my professional career as a sound engineer and through it I discovered my interest in programming, using programming languages like JUCE/C++ and MATLAB for digital signal processing. At the end of my undergraduate, I decided that I wanted to strengthen my skills as a programmer focusing on web development, that is how I entered the Henry bootcamp where I enhanced my theoretical and practical knowledge and got my title as Full Stack Web Developer. I excel in continuous learning, and creative thinking, with strong interpersonal skills, and as a proactive being.",
  resume: require("../editable-stuff/santiago.pdf"),
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "santiagor06", //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: [""],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    {
      img: require("../editable-stuff/santiago1.jpg"),
      label: "First slide label",
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },
    {
      img: require("../editable-stuff/santiago1.jpg"),
      label: "Second slide label",
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },
  ],
  imageSize: {
    width: "615",
    height: "450",
  },
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Express", value: 70 },
    { name: "PostgreSQL", value: 68 },
    { name: "Node.js", value: 78 },
    { name: "Sequelize", value: 74 },
    { name: "JavaScript", value: 90 },
    { name: "React", value: 80 },
    { name: "HTML/CSS", value: 75 },
    { name: "Redux", value: 80 },
  ],
  softSkills: [
    { name: "Result-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Logical Thinking", value: 85 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 88 },
    { name: "Proactive", value: 75 },
    { name: "Agile Learning", value: 90 },
    { name: "Empaty", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for full-time Full Stack Developer opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "santiago.restrepo06@hotmail.com",
};

const experiences = {
  show: false,
  heading: "Experiences",
  data: [
    {
      role: "Software Engineer", // Here Add Company Name
      companylogo: require("../assets/img/dell.png"),
      date: "June 2018 – Present",
    },
    {
      role: "Front-End Developer",
      companylogo: require("../assets/img/boeing.png"),
      date: "May 2017 – May 2018",
    },
  ],
};

// Blog SECTION
// const blog = {
//   show: false,
// };

export {
  navBar,
  mainBody,
  about,
  repos,
  skills,
  leadership,
  getInTouch,
  experiences,
};
