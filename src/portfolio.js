// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Khushboo Portfolio",
  description:
    "Computer Science Enthusiast on a Journey of Continuous Learning: Mastering Development and Data Analysis. Fun Fact: I learn things accidentally!",
  og: {
    title: "Portfolio Website",
    type: "website",
  },
};

//Home Page
const greeting = {
  title: "Khushboo Agarwal",
  logo_name: "KhushbooAgarwal",
  subTitle:
    "Computer Science Enthusiast on a Journey of Continuous Learning: Mastering Development and Data Analysis. Fun Fact: I learn things accidentally!",
  resumeLink:
    "https://drive.google.com/file/d/1urDveJG_jOT-ZVIwEEs62GXRTfLVq6I-/view?usp=sharing",
  githubProfile: "https://www.github.com/khushbooag4",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://www.github.com/khushbooag4",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/khushboo-agarwal-8b72151bb/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:kushbooagarwal3584@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/_khushbooag4/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React-Redux",
        "⚡ Debugging and testing teething bugs",
        "⚡ Creating application backend in Node, Express",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "VueJs",
          fontAwesomeClassname: "logos:vue",
          style: {
            color: "#CB3837",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
      ],
    },
    {
      title: "Open Source Contributor",
      fileName: "open-source",
      skills: [
        "⚡ Developer getting hands dirty in OpenSource world",
        "⚡ Looking to collaborate on open-source projects.",
      ],
      softwareSkills: [
        {
          skillName: "Git",
          fontAwesomeClassname: "logos:git",
          // style: {
          //   color: "#339933",
          // },
        },
        {
          skillName: "TypeScript",
          fontAwesomeClassname: "cib:typescript",
          style: {
            backgroundColor: "#000000",
            color: "#007acc",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/kushbooagarwal31",
    },
    {
      siteName: "Leetcode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#ffa116",
      },
      profileLink: "https://leetcode.com/khushbooag/",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/khushbooag4",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Jaipur Engineering College and Research Center",
      subtitle: "B.Tech. in Computer Engineering",
      logo_path: "",
      alt_name: "",
      duration: "2020 - Present",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.",
        "⚡ Winner of the Smart India Hackathon'22",
      ],
      website_link: "https://jecrcfoundation.com/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Smart India Hackathon - Winner",
      subtitle: "- DRDO",
      logo_path: "sih.png",
      certificate_link:
        "https://drive.google.com/file/d/1awkniu5owUOJplKDslJjkOtgTjFmolHx/view?usp=sharing",
      alt_name: "SIH",
      color_code: "#4285F499",
    },
    {
      title: "Data Analytics",
      subtitle: "- Mukesh Mohania, IIT BHU",
      logo_path: "IIT.png",
      certificate_link:
        "https://drive.google.com/drive/folders/1QcNTbxjqhPbLPS5ETeBM0DelLc4Gz-QJ?usp=sharing",
      alt_name: "certificate",
      color_code: "#8C151599",
    },
    {
      title: "Full Stack Development",
      subtitle: "- Internshala",
      logo_path: "Internshala.svg",
      certificate_link:
        "https://drive.google.com/file/d/1fCg6I6C8EYz0jwEn1bBcrn8yd8Dj27b0/view?usp=sharing",
      alt_name: "certificate",
      color_code: "#00000099",
    },
    {
      title: "Tech-u-thon",
      subtitle: "- iNeuron",
      logo_path: "ineuron.png",
      certificate_link:
        "https://drive.google.com/file/d/1LMaBoLf0uuVF3T3oIDvYTWQAGDL9l9Ws/view?usp=sharing",
      alt_name: "iNeuron",
      color_code: "#1F70C199",
    },
    {
      title: "Advanced Data Science",
      subtitle: "- Romeo Kienzler",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1yQigPjHrCTg90HvDzqseOmKtny3-idAJ/view?usp=sharing",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Machine learning",
      subtitle: "- Romeo Kienzler",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1yQigPjHrCTg90HvDzqseOmKtny3-idAJ/view?usp=sharing",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I'm skilled software developer with experience in JavaScript and TypeScript, and expertise in frameworks like React, Node.js and Vue. I'm a quick learner and want to develop scalable, reusable and user's friendly solutions.",
  header_image_path: "experience.png",
  sections: [
    {
      title: "Internships",
      experiences: [
        {
          title: "Data Informatics Analyst Intern",
          company: "ServiceNow",
          company_url: "https://www.servicenow.com/",
          logo_path: "now.png",
          duration: "Apr 2023 - May 2023",
          location: "Hyderabad, Telegana",
          description:
            "As a part of their Product Analytics team, I have designed a rule simulator that empowers users to extract valuable insights through customized patterns. This has effectively replaced the need for spontaneous data requests across 16 different departments. To accomplish this, I employed user-friendly UI scripting and harnessed the Now Platform, SQL, and Snowflake capabilities. Moreover, I integrated interactive reports and visualizations into the platform, greatly enhancing user engagement and facilitating data-informed decisions. As a result of these enhancements, the time needed for this process has been significantly shortened, decreasing from 6-8 weeks to just 2 weeks.",
          color: "#0879bf",
        },
        {
          title: "SDE(Full Stack) Intern",
          company: "GoEgonetwork",
          company_url: "https://www.goegonetwork.com/",
          logo_path: "goego.svg",
          duration: "Mar 2022 - Aug 2022",
          location: "Remote",
          description:
            "Collaboratively contributing to the end-to-end process of designing, developing, and seamlessly integrating REST APIs, I've been an instrumental part of the team. My skills came to life as I crafted intricate features such as map views, dynamic triggers, and information tabs, harnessing the power of TypeScript, Node.js, Firebase, and Vue.js. Notably, my optimizations resulted in a remarkable 55% reduction in map loading latency, vastly enhancing user experience. Additionally, I exhibited my problem-solving acumen by resolving over 20 persistent bugs in their SaaS product.",
          color: "#0879bf",
        },
        {
          title: "Code For GovTech Contributor",
          company: "Samagra Transforming Governance",
          company_url: "https://www.codeforgovtech.in/contributors",
          logo_path: "samagra.jpeg",
          duration: "Jun 2022 -  Aug 2022",
          // location: "Pune, Maharashtra",
          description:
            "Shortlisted as one of 13 contributors from over 300+ applicants nationwide for CodeForGovTech 2022 organized by Samagra, recognized for impactful contributions to digital public goods.",
          color: "#9b1578",
        },
        {
          title: "Software Intern - Backend",
          company: "Sohpy Technologies Pvt Ltd.",
          company_url: "https://www.sophytechnologies.com/",
          logo_path: "sophy.jpeg",
          duration: "Jan 2022 - Mar 2022",
          location: "Jaipur, Rajasthan",
          description: "Worked on creating REST APIs in NodeJS language",
          color: "#fc1f20",
        },
      ],
    },
    {
      title: "Hackathons",
      experiences: [
        {
          title: "Winner",
          company: "Smart India Hackthon 2022",
          company_url: "https://www.sih.gov.in/",
          logo_path: "sih.jpeg",
          duration: "Mar 2022 - Aug 2022",
          location: "Bangalore, Karnataka",
          description:
            "Our solution focuses on the challenging task of quickly identifying and showing human faces in videos given by Ministry of Defense DRDO, which is crucial for defense and security. Our team worked tirelessly and used advanced skills like Machine learning, Python, Amazon Web Services to create a solution that not only meets but surpasses the tough standards set by this important problem.",
          color: "#ee3c26",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Mentor - GDSC",
          company: "Google Developer Student Clubs - WoC",
          company_url: "https://gdsc.winterofcode.tech/",
          logo_path: "gdsc.jpeg",
          duration: "Jan 2023 - Mar 2023",
          description: "",
          color: "#4285F4",
        },
        {
          title: "Mentee",
          company: "CLIMB (Connect Learn Inspire Mentor Belong)",
          company_url: "https://www.linkedin.com/company/climb-dtu/",
          logo_path: "climb.jpeg",
          duration: "Jan 2022 - Apr 2022",
          description: "",
          color: "#4285F4",
        },
        {
          title: "Student Council Member- Technical",
          company: "JECRC College",
          logo_path: "studentCouncil.jpg",
          duration: "Mar 2022 - Present",
          location: "Jaipur, Rajasthan",
          description: "",
          color: "#D83B01",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create MERN projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image1.jpg",
};

const publicationsHeader = {
  title: "Technical Blogs",
  description: "I have worked on and published a few blogs of my own.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
      name: "Code for GovTech'22 Journey",
      description: "",
      createdAt: "2022-07-17T16:26:54Z",
      url:
        "https://medium.com/@kushbooagarwal3584/code-for-gov-tech22-journey-b7a496416217",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "khushboo_contact.jpeg",
    description:
      "Connect with me and contact for any queries. I can help you with JavaScript, React, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "https://medium.com/@kushbooagarwal3584",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Surajpole Bazaar Galta Gate, Jaipur Rajasthan - 302003",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/qhKG1hVM8HsovHtU6",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+91 9649324901",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
