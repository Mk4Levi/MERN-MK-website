import project1 from "../assets/projects/codeup.png";
import project2 from "../assets/projects/portfolio.png";
import project3 from "../assets/projects/project3.png";

export const HERO_CONTENT = `
  I am a full stack development enthusiast passionate about building dynamic and scalable websites. 
  I specialize in React.js, Node.js, and other modern web technologies, and I love solving DSA problems on LeetCode.Currently, I'm enhancing my skills in Docker and best practices for building robust applications. 
  Check out my projects on GitHub and connect with me on Twitter to follow my journey in the tech world.
`;

export const ABOUT_TEXT = `
  I'm Manthan Kumar, a passionate Full Stack Web Developer and problem solver with a keen interest in exploring the tech world 
  and continuously learning new technologies. I specialize in Web Development, leveraging my expertise in HTML, CSS, 
  JavaScript, React, Node.js, and more to build dynamic and scalable applications.
  Education:
  - B.Tech. in Computer Science Engineering from National Institute of Technology, AP (2020 - 2024) - CGPA: 8.6/10. 
  I'm always open to new opportunities and collaborations. Feel free to reach out!
`;

export const EXPERIENCES = [
  {
    year: "2023 - 2024",
    role: "Full Stack Developer Intern",
    company: "Inlustro Company",
    description: `Engineered and maintained a scalable online learning platform using React.js, Node.js, Tailwind CSS, PostgreSQL, Prisma, NestJS, and TypeScript; optimized database queries and enhanced overall system performance. Engineered a robust API in Node.js and NestJS, enabling seamless data retrieval from a PostgreSQL database, improving user experience. Integrated Judge0 API to create an online compiler supporting multiple programming languages, enhancing coding efficiency.`,
    technologies: [
      "React.js",
      "Node.js",
      "Tailwind CSS",
      "PostgreSQL",
      "Prisma",
      "NestJS",
      "TypeScript",
    ],
  },
];

export const PROJECTS = [
  {
    title: "MK-CodeZone",
    image: project1,
    github: "https://github.com/mk4levi/mk-codezone",
    link: "https://mk-codezone.vercel.app/",
    description:
      "MK-CodeZone is a fully functional ed-tech platform enabling users to create, consume, and rate educational content, built using the MERN stack (ReactJS, NodeJS, MongoDB, ExpressJS). " +
      "Advanced User Management: Implemented secure and scalable user authentication and authorization mechanisms. " +
      "Dynamic Course Management: Developed comprehensive tools for seamless course creation, updating, deletion, and rating, enhancing user engagement and content quality. " +
      "Seamless Payment Integration: Integrated Razorpay for efficient and secure payment processing, ensuring a smooth transaction experience. " +
      "Robust Media Management: Leveraged Cloudinary for optimized cloud-based media handling, supporting high-quality videos, images, and documents to enrich the learning experience.",
    technologies: [
      "ReactJS",
      "NodeJS",
      "MongoDB",
      "ExpressJS",
      "Razorpay",
      "Cloudinary",
      "Nodemailer",
      "Tailwind",
    ],
  },
  {
    title: "Portfolio Website",
    image: project2,
    github: "https://github.com/mk4levi/my-portfolio-web-app",
    link: "https://manthan-mk-portfolio.vercel.app/",
    description:
      "This is my personal Portfolio web-app, built with advanced React.js. I have crafted this to showcase my finest projects, skills, contact details, collaborations, and achievements.",
    technologies: [
      "React",
      "JavaScript",
      "firebase-database",
      "HTML",
      "CSS",
      "eslint",
      "firestore",
    ],
  },
  {
    title: "Anime Hub",
    image: project3,
    github: "https://github.com/Mk4Levi/Manthan-Anime-Hub",
    link: "https://manthan-anime-hub.vercel.app/",
    description:
      "Anime-Hub is a vibrant and inclusive online community platform which I've built specifically for anime enthusiasts. It serves as a central hub for anime fans to connect.",
    technologies: ["React", "JavaScript", "HTML", "CSS"],
  },
];

export const CONTACT = {
  phoneNo: "+91-6296924852",
  email: "mksoul1811@gmail.com",
  address: "Bangalore - India",
};
