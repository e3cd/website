export const projectsData = [
  {
    id: 1,
    name: "Client Management System",
    description:
      "CaterLog is a two-sided marketplace where caterers can sign up and list their catering menus, whilst customers looking for caterers can sign up and view menu options from caterers. ",
    link: "http://myspamtool.com.s3-website-ap-southeast-2.amazonaws.com/",
    githubLink: "https://github.com/e3cd/cater_log",
    tech: [
      "MongoDB",
      "Express",
      "React",
      "NodeJS",
      "Material-UI",
      "Redux",
      "Enzyme"
    ],
    img: { preview: "", gif: "" }
  },
  {
    id: 2,
    name: "FakeSlack",
    description:
      "FakeSlack is a slack clone built with React and CircleCI for continuous integration. The application utilises Firebase's realtime storage to provide messaging between users.",
    link: "https://fake-slack.firebaseapp.com/",
    githubLink: "https://github.com/e3cd/fake-slack",
    tech: [
      "React - Hooks",
      "Context API",
      "Firebase",
      "CSS3",
      "Material UI",
      "CircleCI",
      "Enzyme"
    ],
    img: {
      preview: require("./img/fakeslack-min.png"),
      gif: require("./img/fakeslack.gif")
    }
  },
  {
    id: 3,
    name: "React NBA",
    description:
      "A React application which uses the NBA API to display statistics of the teams and players for the 2018-2019 season.",
    link: "http://reactnba-app.s3-website-ap-southeast-2.amazonaws.com/",
    githubLink: "https://github.com/e3cd/nba2019-react",
    tech: ["React", "Redux", "Axios", "CSS3"],
    img: {
      preview: require("./img/react-nba-min.png"),
      gif: require("./img/react-nba.gif")
    }
  },
  {
    id: 4,
    name: "CaterLog",
    description:
      "A full stack two-sided marketplace for caterers built with Ruby on rails. Caterers can sign up and list their catering menus, while customers looking for caterers can sign up and view menu options from caterers",
    link: "https://caterlog.herokuapp.com",
    githubLink: "https://github.com/e3cd/cater_log",
    tech: ["Ruby", "Ruby on Rails", "HTML", "CSS", "Bootstrap"],
    img: {
      preview: require("./img/caterlog-min.png"),
      gif: require("./img/caterlog-min.png")
    }
  },
  {
    id: 5,
    name: "Personal Website",
    description: "Personal portolio website showcasing my projects",
    link: "https://caterlog.herokuapp.com",
    githubLink: "https://github.com/e3cd/website",
    tech: ["React", "CSS"],
    img: { preview: "", gif: "" }
  }
];
