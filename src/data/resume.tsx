import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon, Target } from "lucide-react";

"Hello is this you? How are you doing? have tyou loked into the tiume? only 8 mins left are you're still workuing ion tyhjios? you need to be working on the this as qwell right?"

export const DATA = {
  name: "Prabhjot Kaur",
  initials: "Prabhs",
  url: "https://codewithharshad.com",
  location: "Bangalore, India",
  locationLink: "https://www.google.com/maps/place/bangalore",
  description:
    "Are you looking for a Developer? Highly motivated and fast learner? I'm here for you!",
  summary:
    "I am an accomplished and results-oriented Software Developer with over 3+ years of expertise, specialising in React.js. My proficiency lies in optimising performance to deliver efficient, responsive, and visually appealing user interfaces. Always on the lookout for opportunities to learn and evolve as a developer, I am ready to bring my skills and enthusiasm to your team",
  avatarUrl: "/you.png",
  arrow: "/arrow.png",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    // "Python",
    // "Go",
    "Postgres",
    "Docker",
    // "Kubernetes",
    // "Java",
    "C++",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "prabhjotkaur1243@gmail.com",
    tel: "+123456789",
    social: {
       GitHub: {
        name: "GitHub",
        url: "https://github.com/Prabhs-kaur",
        icon: Icons.github,

        navbar: true,
      },
     
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/prabhjotkaur1111/",
        target: "_blank",
    
        icon: Icons.linkedin,

        navbar: true,
      },
      
      // // X: {
      // //   name: "X",
      // //   url: "https://x.com/codewithharshad",
      // //   icon: Icons.x,

      // //   navbar: true,
      // // },
      // // Youtube: {
      // //   name: "Youtube",
      // //   url: "https://www.youtube.com/@codewithharshad",
      // //   icon: Icons.youtube,
      // //   navbar: true,
      // },
      email: {
        name: "Send Email",
        url: "prabhjotkaur1243@gmail.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Cosmic Digital Studio",
       start: "April 2023",
      end: "Oct",
      href: "https://cosmicdigitalstudio.com/",
      badges: [],
      location: "Remote",
      title: "Frontend Developer",
      logoUrl: "/work1.svg",
     
      description:
      
        "Cosmic Digital Studio is a project to provide digital services as a company dedicated to helping businesses succeed in the digital world. We provide website development services, digital marketing, and free resume services, with a focus on making the process fun, easy, and stress-free. This website demonstrates the skillset of seo and faster web performance.",
    },
    {
      company: "HCL Technologies",
      badges: [],
      href: "https://www.hcltech.com/",
      location: "India",
      title: "Senior Software Engineer",
     
      logoUrl: "/work2.svg",
       Image: "public/p1.png",
      start: "April 2022",
      end: "April 2023",
      description:
        "HCL Technologies is a leading global IT services and consulting company headquartered in Noida, India. It specializes in providing technology solutions and services to enterprises worldwide, helping businesses digitally transform and innovate. Here’s an overview of what HCL Technologies",
    },
    {
      company: "ACF Consultant",
      href: "https://hcl.com/",
      badges: [],
      location: "Santa Clara, CA",
      title: "Software Engineer",
      logoUrl: "/work3.svg",
      start: "January 2020",
      end: "April 2020",
      description:
        "At ACF Consultant, we are dedicated to empowering students and educators through innovative education support services. Founded on the principles of accessibility, quality, and inclusivity, we work to bridge the gap between academic challenges and student success.",
    },
    {
      company: "Aptech Computer Education ",
      href: "#",
      badges: [],
      location: "San Jose, CA",
      title: "Software Trainer",
      logoUrl: "/work4.svg",
      start: "January 2019",
      end: "April 2019",
      description:
        "At Aptech, we specialize in equipping individuals with the skills and knowledge they need to thrive in the ever-evolving world of technology. As a leading software training institute, we are committed to delivering hands-on, industry-focused training programs that empower learners to master in-demand technologies and tools..",
    },
     
  ],
  
  
  projects: [
    {
      title: "Shoping Cart",
      href: "https://shopping-cart-inreact.netlify.app/",
      // dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "This Shopping Cart project is a responsive, single-page application built using React.js. It allows users to browse products, add items to the cart, adjust quantities, and remove items. The app efficiently manages state using React hooks and ensures a smooth user experience with dynamic updates. Components are modular and reusable, promoting clean and maintainable code. It features basic styling and routing, making it a great example of practical React development. This project demonstrates key frontend concepts like component composition, event handling, and conditional rendering, making it ideal for showcasing skills in building interactive and functional web applications.",
      technologies: [
        "React.js",
        "React Router",
        "Context API",
        "TypeScript",
        "PostgreSQL",
      ],
      links: [
        {
          type: "Website",
          href: "https://shopping-cart-inreact.netlify.app/",
          Target: "_blank",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Prabhs-kaur/Shopping-Cart",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      // video:
      //   "https://portfolio-5r1.pages.dev/1221.mp4",
        video:
        "vid5.mov",
    },
    {
      title: "Tic-Tac-Toe",
      href: "https://google.com/",
      // dates: "June 2023 - Present",
      active: true,
      description:
        "In my Tic-Tac-Toe project, I utilized React to create an interactive and visually appealing game experience. By leveraging React's component-based architecture, I was able to efficiently manage the game's state, user interactions, and rendering logic. The project showcases my proficiency in React fundamentals such as state management, event handling, and component composition. Additionally, I implemented features like game history tracking and dynamic board resizing to enhance the user experience.",
      technologies: [
        "React.js",
        "Typescript",
        "JavaScript",
        "JSX",
      ],
      links: [
        {
          type: "App",
          href: "https://react-tic-tac-toegame.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Prabhs-kaur/React-Tic-Tac-Toe-Game",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      // video: "https://portfolio-5r1.pages.dev/1221.mp4",
      video: "tic 2.mov"
    },
    {
      title: "Project Management",
      href: "https://google.com",
      // dates: "April 2023 - September 2023",
      active: true,
      description:
        "This Project Management App is a full-featured React.js application designed to help teams organize, track, and manage tasks efficiently. It enables users to create projects, assign tasks, set deadlines, and update progress in real-time. The app uses React hooks for state management and modular components for scalability and maintainability. Features include dynamic task status updates, project filtering, and responsive UI for seamless use across devices. This project showcases my ability to build practical, user-friendly tools using React, emphasizing performance optimization, clean code architecture, and real-world functionality.",
      technologies: [
        "React.js",
        "React Router",
        "JavaScript",
        "Shadcn UI",
        "Axios",
 
      ],
      links: [
        {
          type: "Website",
          href: "https://project-management-reactinreact.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Prabhs-kaur/Project-Management",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      // video: "https://portfolio-5r1.pages.dev/1221.mp4",
      video: "vid3.mov"
    },
    {
      title: "3D Nike Card",
      href: "https://google.com",
      // dates: "April 2023 - March 2024",
      active: true,
      description:
        "My portfolio showcases a meticulously crafted draggable animated Nike card developed using the Framer library. This dynamic piece of work seamlessly blends design and functionality, offering a visually captivating user experience. The project demonstrates my proficiency to create engaging and immersive digital experiences.",
      technologies: [
        "React",
        "JavaScript (Vanila)",
        "Magic UI",
        
      ],
      links: [
        {
          type: "Website",
          href: "https://nike-card-3d.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Prabhs-kaur/NIKE-CARD-3D",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      // video:
      //   "https://portfolio-5r1.pages.dev/1221.mp4",
      video: "vid4.mov"
    },
  ],
} as const;
