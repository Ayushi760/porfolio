import {
    web,
    mobile,
    backend,
    creator,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    bestgoods,
    qutrix,
    numeric,
    resume,
    workplace,
    mypic1,
    mypic2,
    mypic3,
    mypic4,
    mypic5,
    visionclara
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "education",
      title: "Education",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      icon: mypic1,
    },
    {
      icon: mypic2,
    },
    {
      icon: mypic3,
    },
    {
      icon: mypic4,
    },
    {
      icon: mypic5,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },

    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "git",
      icon: git,
    },
  ];
  
  const experiences = [
    {
      title: "Full Software Developer - Intern",
      company_name: "VisionClara IT Solutions",
      icon: visionclara,
      iconBg: "#383E56",
      date: "January 2024 - Present",
      points:[
        "Understanding the project requirements.",
        "Developed UI as per the requirements.",
        "Resolved feedback on code review."
      ]
    },
    {
      title: "Software Developer - Intern",
      company_name: "Qutrix Solutions Private Limited",
      icon: qutrix,
      iconBg: "#383E56",
      date: "August 2022 - November 2022",
      points: [
        "Successfullymanaged and resolved a total of 25 complex issues by handling 25 merge requests during a highly productive 3-month internship.",
        "Collaborated seamlessly with cross-functional teams to translate business requirements into technical solutions.",
        "Played a pivotal role in implementing new features, enhancing user experiences, and ensuring a high-quality product through rigorous testing and adherence to responsive design principles",
        "Employed version control tools, notably Git, to efficiently manage and track changes to the codebase, ensuring code stability and collaboration with team members.",
      ],
    },
    {
      title: "Full Stack Developer",
      company_name: "Numeric Infosystems Private LImited",
      icon: numeric,
      iconBg: "#E6DEDD",
      date: "May 2021 - Dec 2022",
      points: [
        "Designed and developed a comprehensive E-commerce website using a tech stack encompassing ReactJS, NodeJS, MySQL, HTML, CSS, and JavaScript.",
        "Implemented robust CRUD (Create, Read, Update, Delete) operations, enhancing data management capabilities within the web application.",
        "Elevated the user experience by implementing responsive design principles and optimizing the userinterface,resulting in an intuitive and visually appealing E- commerce website.",
      ],
    },
  ];
  
  const testimonials = [
    {
      degree:"Post Graduation",
      name: "Master of Computer Applications",
      institute:"Madhav Institute of Technology and Science, Gwalior",
      period:'2022 - 2024',
      marks:'8.89'
    },
    {
      degree:"Under Graduation",
      name: "B.Sc Computer Science",
      institute:"Govt. KamlaRaja Girls P.G. Autonomous College, Gwalior",
      period:'2019 - 2022',
      marks:'7.75'  
    },
    {
      degree:"Higher Secondary Certificate",
      name: "School of Excellence No.1, Gwalior",
      institute:"State Board",
      period:'2019',
      marks:'90.8'
    },
    {
      degree:"Secondary School Certificate",
      name: "St. John High School, Gwalior",
      institute:"State Board",
      period:'2017',
      marks:'93.16'
    },
  ];
  
  const projects = [
    {
      name: "BestGoods | E-Commerce Website",
      description:
        "BestGoods is an eCommerce website powered by React, Node.js, and MySQL! Our platform combines the latest technologies to deliver a seamless and user-friendly shopping experience. Let's delve into how these technologies work together to implement all CRUD (Create, Read, Update, Delete) operations.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "node",
          color: "green-text-gradient",
        },
        {
          name: "mysql",
          color: "pink-text-gradient",
        },
        {
          name: "html",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "white-text-gradient",
        },
      ],
      image: bestgoods,
      source_code_link: "https://github.com/Ayushi1610/bestgoods.git",
    },
    {
      name: "Resume Builder",
      description:
        "With a focus on simplicity and efficiency, this project offers an intuitive user interface to create and customize professional resumes effortlessly. Leveraging the power of Node.js, seamless data management is ensured, while CSS and HTML provide visually appealing templates. JavaScript enhances the user experience with interactive components, making it a seamless process to craft standout resumes. By incorporating MySQL, the project enables secure and efficient data storage, making it a complete and impressive resume-building solution.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "node",
          color: "pink-text-gradient",
        },
        {
          name: "mysql",
          color: "white-text-gradient",
        },        
        {
          name: "javascript",
          color: "blue-text-gradient",
        },        

      ],
      image: resume,
      source_code_link: "https://github.com/Ayushi1610/resumebuilder.githttps://github.com/",
    },
    {
      name: "CollabSphere | Workplace",
      description:
        "This innovative platform simplifies how businesses handle tasks, projects, communication, and document sharing. With real-time messaging, event scheduling, and performance analytics, it's designed to enhance teamwork and productivity.",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "nodejs",
          color: "green-text-gradient",
        },
        {
          name: "mongodb",
          color: "pink-text-gradient",
        },
      ],
      image: workplace,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };