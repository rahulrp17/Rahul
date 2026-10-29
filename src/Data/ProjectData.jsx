import cab from "../assets/projects/cab.webp";
import food from "../assets/projects/food.webp";
import weather from "../assets/projects/weather.webp";
import portfolio from "../assets/projects/portfolio.webp";
import authify from "../assets/projects/authify.webp";
import todo from "../assets/projects/todo.webp";
import craftAI from "../assets/projects/craftAI.png";
import AureliaStay from "../assets/projects/image.png";
import rahul from "../assets/projects/rahul.webp";

export const projects = [

  {
    title: "AureliaStay Hotel Booking Website",
    category: "Full Stack",
    image: AureliaStay,
    description:
      "A secure and user-friendly hotel booking website with authentication and admin dashboard.",
    tech: ["React", "Tailwind", "Framer Motion", "Express.js", "MongoDB", "JWT"],
    github: "https://github.com/rahulrp17/AureliaStay",
    demo: "https://aureliastay.vercel.app/",
    features: [
      "Hotel Booking",
      "Responsive Design",
      "Modern UI",
      "Authentication",
      "Admin Dashboard",
      "Customer Dashboard",
      "Rating and Review System",
      "Email Notification",
    ],
  },

  {
    title: "GenZRides Cab Booking App",
    category: "Full Stack",
    image: cab,
    featured: false,
    description:
      "A responsive cab booking platform with ride booking, live Tracking, and modern UI.",
    tech: ["React", "Tailwind", "Framer Motion", "Express.js", "MongoDB", "Cloudinary",],
    github: "https://github.com/rahulrp17/GenZRides",
    demo: "https://genzrides.vercel.app/",
    features: [
      "Ride Booking",
      "Responsive Design",
      "Modern UI",
      "Authentication",
      "Admin Dashboard",
      "Driver Dashboard",
      "Customer Dashboard",
      "Live Ride Tracking",
      "Ride History",
      "Rating and Review System",
      "Email Notification",
    ],
  },
  {
    title: "CraftAI Handmade Marketplace",
    category: "Full Stack",
    image: craftAI,
    description:
      "AI-powered handmade marketplace with admin dashboard, Cloudinary uploads, and WhatsApp ordering.",
    tech: [
      "React",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "Framer Motion",
      "JWT",
      "Cloudinary",
      "Axios",
      "OpenRouter AI",
    ],
    github: "https://github.com/rahulrp17/CraftAI",
    demo: "https://craftai-qb66.onrender.com/",
    features: [
      "AI Chatbot Assistant",
      "Admin Dashboard",
      "Cloudinary Image Upload",
      "WhatsApp Ordering",
      "JWT Authentication",
      "Responsive Design",
    ],
  },


  {
    title: "Food Delivery App",
    category: "Full Stack",
    image: food,
    description:
      "Food ordering application with menu browsing, cart management and responsive design.",
    tech: ["React", "CSS", "Framer Motion", "Express js", "MongoDB"],
    github: "https://github.com/rahulrp17/Food-Delivery",
    demo: "https://food-delivery-frontend-ib75.onrender.com/",
    features: [
      "Food Ordering",
      "Shopping Cart",
      "Responsive Layout",
      "Product Listing",
    ],
  },

    {
    title: "Rahul-Portfolio",
    category: "Frontend",
    image: rahul,
    description:
      "Animated portfolio built with React, Vite, Tailwind CSS and Framer Motion.",
    tech: ["React", "Vite", "Tailwind", "Framer Motion"],
    github: "https://github.com/rahulrp17/Rahul-Portfolio",
    demo: "https://rahul-portfolio-krhj.onrender.com/",
    features: [
      "Animated Portfolio",
      "Responsive Design",
      "Project Showcase",
      "Contact Form",
    ],
  },

  {
    title: "Three.js Portfolio Website",
    category: "Frontend",
    image: portfolio,
    description:
      "Modern animated portfolio built with React and Framer Motion.",
    tech: ["React", "Framer Motion", "Three.js", "Tailwind"],
    github: "https://github.com/rahulrp17/ThreeJs-Portfolio",
    demo: "https://threejs-portfolio-oih3.onrender.com/",
    features: [
      "Animations",
      "Responsive Design",
      "Project Showcase",
      "Contact Form",
    ],
  },
  {
    title: "Weather App",
    category: "API",
    image: weather,
    description: "Real-time weather forecasting app using API integration.",
    tech: ["React", "API", "Tailwind"],
    github: "https://github.com/rahulrp17/Weather-App",
    demo: "https://weather-app-cvzb.onrender.com/",
    features: [
      "Weather API",
      "Live Updates",
      "Location Search",
      "Responsive UI",
    ],
  },

  {
    title: "Authify",
    category: "Full Stack",
    image: authify,
    description: "Authentication system featuring JWT login and registration.",
    tech: ["React", "Tailwind", "Spring Boot"],
    github: "https://github.com/rahulrp17/Authentication_System",
    demo: "https://authentication-system-frontend-cukc.onrender.com/",
    features: [
      "JWT Authentication",
      "Login",
      "Registration",
      "Protected Routes",
    ],
  },

  {
    title: "Todo App",
    category: "Frontend",
    image: todo,
    description: "Task management application with CRUD functionality.",
    tech: ["React", "Tailwind"],
    github: "https://github.com/rahulrp17/Todo_Applicaton",
    demo: "https://todo-applicaton.onrender.com/",
    features: ["Add Tasks", "Edit Tasks", "Delete Tasks", "Responsive UI"],
  },
];
