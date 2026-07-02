import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Github, ExternalLink, ChevronLeft, ChevronRight, ArrowLeft,
  Filter, ShoppingCart, ShieldCheck, Settings, UserCheck, FileText, 
  Package, Clock, Calendar, DollarSign, Megaphone, Users, Briefcase
} from 'lucide-react';

const getFeatureIcon = (title: string) => {
  const t = title.toLowerCase();
  if (t.includes("filter") || t.includes("search")) return <Filter className="text-amber-500 w-8 h-8" />;
  if (t.includes("cart") || t.includes("wishlist")) return <ShoppingCart className="text-emerald-500 w-8 h-8" />;
  if (t.includes("checkout") || t.includes("payment")) return <ShieldCheck className="text-indigo-500 w-8 h-8" />;
  if (t.includes("admin") || t.includes("control") || t.includes("management")) return <Settings className="text-purple-500 w-8 h-8" />;
  if (t.includes("lead") || t.includes("inquiry")) return <UserCheck className="text-teal-500 w-8 h-8" />;
  if (t.includes("spec") || t.includes("technical")) return <FileText className="text-blue-500 w-8 h-8" />;
  if (t.includes("inventory") || t.includes("stock")) return <Package className="text-orange-500 w-8 h-8" />;
  if (t.includes("attendance")) return <Clock className="text-pink-500 w-8 h-8" />;
  if (t.includes("leave")) return <Calendar className="text-rose-500 w-8 h-8" />;
  if (t.includes("payroll") || t.includes("salary")) return <DollarSign className="text-green-500 w-8 h-8" />;
  if (t.includes("announce") || t.includes("notice")) return <Megaphone className="text-yellow-500 w-8 h-8" />;
  if (t.includes("role") || t.includes("access")) return <Users className="text-sky-500 w-8 h-8" />;
  
  return <Briefcase className="text-moonstone w-8 h-8" />;
};

const getFeatureTagline = (projectName: string) => {
  if (projectName.toUpperCase() === "EYEGLAZE") {
    return "Explore powerful commerce tools designed to browse eyewear catalogues, manage items, and process secure payments.";
  }
  if (projectName.toUpperCase() === "CARZZI") {
    return "Explore advanced listing directories, granular searches, and real-time dealer lead management pipelines.";
  }
  if (projectName.toUpperCase() === "SPESHWAY HRMS") {
    return "Explore automated employee clock-ins, leave lifecycles, payroll calculation engines, and roster directories.";
  }
  return "Discover the core features designed to automate operations and simplify user interactions.";
};


interface Project {
  id: number;
  name: string;
  description: string;
  stack: string[];
  image: string | null;
  github: string | null;
  live: string | null;
  caseStudy?: {
    workflows: { title: string; steps: string[] }[];
    features: { title: string; desc: string }[];
    screens: { name: string; details: string; image?: string }[];
    architecture: string;
  };
}

interface CaseStudyPageProps {
  project: Project;
  onClose: () => void;
}

const getStepDetails = (step: string) => {
  if (step.includes("Browse Eyewear Catalog")) {
    return { title: "Browse Catalog", desc: "Browse eyewear catalog and select from various premium frame styles." };
  }
  if (step.includes("Filter by Frame Size")) {
    return { title: "Filter & Find", desc: "Filter listings by frame size, color, design, and material." };
  }
  if (step.includes("Add Eyewear to Cart")) {
    return { title: "Save to Cart", desc: "Easily add eyewear products to your shopping cart or personal wishlist." };
  }
  if (step.includes("Complete Secure Checkout")) {
    return { title: "Secure Payment", desc: "Complete secure online checkout via encrypted digital payment gateways." };
  }
  
  if (step.includes("Add or Update Eyewear")) {
    return { title: "Inventory Setup", desc: "Add, update, and manage eyeglasses and frame stock inventories easily." };
  }
  if (step.includes("Review Customer Transactions")) {
    return { title: "Review Orders", desc: "Track customer order details, transactions, and historical purchase logs." };
  }
  if (step.includes("Manage Stock Quantities")) {
    return { title: "Stock Operations", desc: "Manage variations, stock counts, sizes, and colors in real-time." };
  }
  if (step.includes("Monitor Real-time Sales")) {
    return { title: "Sales Monitoring", desc: "Track revenue analytics, checkout logs, and real-time sales dashboards." };
  }

  // Carzzi
  if (step.includes("Search Cars by Brand")) {
    return { title: "Search Vehicles", desc: "Search and discover vehicles by brand, budget, location, and year." };
  }
  if (step.includes("Filter by Transmission")) {
    return { title: "Refine Criteria", desc: "Filter by automatic/manual transmission, fuel type, and mileage." };
  }
  if (step.includes("View Comprehensive Automobile")) {
    return { title: "Inspect Specs", desc: "Review complete vehicle spec sheets, engine layout, and history logs." };
  }
  if (step.includes("Submit Lead Inquiry")) {
    return { title: "Connect Dealer", desc: "Submit inquiries directly to dealers for test drives and quotes." };
  }
  if (step.includes("Create and Manage Dealer")) {
    return { title: "Dealer Portal", desc: "Create, customize, and verify your official dealer brand profile." };
  }
  if (step.includes("Post New Vehicle")) {
    return { title: "Create Listing", desc: "Post new vehicle listings with complete specifications and photos." };
  }
  if (step.includes("Receive Real-time Customer")) {
    return { title: "Lead Alerts", desc: "Get real-time customer purchase lead alerts instantly on your dashboard." };
  }
  if (step.includes("Respond to Buyer")) {
    return { title: "Follow Up", desc: "Chat and follow up with prospective car buyers directly through the portal." };
  }

  // HRMS
  if (step.includes("Clock-In/Out")) {
    return { title: "Attendance Log", desc: "Quickly clock in or clock out on the daily workspace attendance panel." };
  }
  if (step.includes("Submit Paid Time Off")) {
    return { title: "Leave Request", desc: "Submit leave requests and monitor your remaining PTO balances easily." };
  }
  if (step.includes("Access Monthly Pay")) {
    return { title: "View Payslips", desc: "Review and download monthly salaries, allowances, and tax breakdown payslips." };
  }
  if (step.includes("Read General Company")) {
    return { title: "Announcements", desc: "Access the company feed to stay updated with general team announcements." };
  }
  if (step.includes("Manage Central Employee")) {
    return { title: "Employee Roster", desc: "Manage the central employee database roster, roles, and profiles." };
  }
  if (step.includes("Approve or Reject Pending")) {
    return { title: "Process Leaves", desc: "Review and approve/reject pending employee leave applications." };
  }
  if (step.includes("Calculate and Disburse")) {
    return { title: "Payroll Engine", desc: "Generate salary bills and disburse employee payrolls automatically." };
  }
  if (step.includes("Post Announcements")) {
    return { title: "Announce Feed", desc: "Draft and publish new team announcements to the organization." };
  }

  return { title: "Step Action", desc: step };
};

const getWorkflowTagline = (projectName: string) => {
  if (projectName.toUpperCase() === "EYEGLAZE") {
    return "Eyeglaze makes eyewear e-commerce simple—browse, select, add to cart, and checkout in four easy steps.";
  }
  if (projectName.toUpperCase() === "CARZZI") {
    return "Carzzi makes buying and selling cars simple—search, refine, view specifications, and contact dealers easily.";
  }
  if (projectName.toUpperCase() === "SPESHWAY HRMS") {
    return "Speshway HRMS makes employee operations simple—attendance logs, leaves, payroll, and notices in four easy steps.";
  }
  return `${projectName} makes workflows simple, clean, and highly automated.`;
};

const getTechTagline = (projectName: string) => {
  if (projectName.toUpperCase() === "EYEGLAZE") {
    return "Our application is built using a powerful blend of frontend interfaces, state management, and lightweight server APIs.";
  }
  if (projectName.toUpperCase() === "CARZZI") {
    return "Our application is built using a robust blend of MERN stack services, AWS storage, containerized engines, and proxy tools.";
  }
  if (projectName.toUpperCase() === "SPESHWAY HRMS") {
    return "Our application is built using a scalable blend of full-stack MERN libraries, containerization, security tokens, and cloud servers.";
  }
  return "Our app is built using a powerful blend of frontend, backend, and cloud technologies ensuring speed and reliability.";
};

const getTechLogoSvg = (techName: string) => {
  const name = techName.toLowerCase();
  
  if (name.includes("react")) {
    return (
      <svg viewBox="0 0 100 100" className="w-12 h-12 text-[#61dafb] fill-none stroke-current stroke-2">
        <ellipse rx="11" ry="4.2" transform="translate(50 50) rotate(0)"/>
        <ellipse rx="11" ry="4.2" transform="translate(50 50) rotate(60)"/>
        <ellipse rx="11" ry="4.2" transform="translate(50 50) rotate(120)"/>
        <circle cx="50" cy="50" r="2" fill="currentColor" stroke="none"/>
      </svg>
    );
  }
  if (name.includes("tailwind")) {
    return (
      <svg viewBox="0 0 24 24" className="w-12 h-12 text-[#38bdf8] fill-current">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"/>
      </svg>
    );
  }
  if (name.includes("mongodb")) {
    return (
      <svg viewBox="0 0 24 24" className="w-12 h-12 text-[#13aa52] fill-current">
        <path d="M17.19 10.16c-.53-2.92-2.31-5.86-4.69-7.96-.28-.25-.72-.25-1 0-2.38 2.1-4.16 5.04-4.69 7.96-.65 3.59.39 7.02 2.69 9.2a.51.51 0 0 0 .5.12c1.3-.47 1.48-1.89 1.5-2.97.02-1.3-.3-2.61-.5-3.92-.1-.66-.2-1.33-.27-2a.49.49 0 0 1 .43-.54c.26-.03.5.15.54.41.13 1 .32 2 .59 3 .34 1.25.75 2.5 1.32 3.67.57 1.18 1.42 2.23 2.76 2.68a.5.5 0 0 0 .5-.12c2.3-2.18 3.34-5.61 2.69-9.2zM12 22v-2c.55 0 1-.45 1-1h-2v3z"/>
      </svg>
    );
  }
  if (name.includes("typescript")) {
    return (
      <svg viewBox="0 0 24 24" className="w-12 h-12 text-[#3178c6] fill-current">
        <path d="M1.5 1.5v21h21v-21H1.5zm14.773 14.542c0 .943-.273 1.7-.82 2.273-.547.573-1.33.86-2.348.86-.713 0-1.344-.13-1.892-.39-.547-.26-.98-.654-1.302-1.182l1.666-1.077c.215.353.473.618.775.795.302.176.657.265 1.066.265.452 0 .807-.1 1.066-.3.258-.2.387-.52.387-.96 0-.324-.09-.594-.27-.81-.18-.216-.492-.423-.934-.622l-.995-.443c-.882-.396-1.527-.88-1.936-1.455-.409-.575-.613-1.285-.613-2.13 0-.82.253-1.488.758-2.006.505-.518 1.2-.777 2.086-.777.678 0 1.259.13 1.745.39.486.26.864.63 1.134 1.112l-1.573 1.002c-.173-.284-.393-.496-.662-.636-.269-.14-.587-.21-.954-.21-.387 0-.694.093-.92.28-.226.187-.339.447-.339.78 0 .285.086.52.257.705.172.186.463.376.874.57l1.01.46c.925.422 1.6.938 2.028 1.548.428.61.642 1.353.642 2.228zm6.227-7.792h-2.617v10.5h-2.164v-10.5h-2.602v-1.858h7.383v1.858z"/>
      </svg>
    );
  }
  if (name.includes("node")) {
    return (
      <svg viewBox="0 0 24 24" className="w-12 h-12 text-[#339933] fill-current">
        <path d="M12 1.5a1.5 1.5 0 0 0-.75.2L4.5 5.57a1.5 1.5 0 0 0-.75 1.3v7.26a1.5 1.5 0 0 0 .75 1.3l6.75 3.87a1.5 1.5 0 0 0 1.5 0l6.75-3.87a1.5 1.5 0 0 0 .75-1.3V6.87a1.5 1.5 0 0 0-.75-1.3L12.75 1.7a1.5 1.5 0 0 0-.75-.2zm0 1.8L18 6.18v6.64l-6 3.44-6-3.44V6.18l6-2.88z"/>
      </svg>
    );
  }
  if (name.includes("express")) {
    return (
      <svg viewBox="0 0 100 100" className="w-12 h-12 text-zinc-400 fill-current">
        <text x="50" y="65" textAnchor="middle" className="font-mono font-extrabold text-5xl tracking-tighter uppercase">ex</text>
      </svg>
    );
  }
  if (name.includes("redux")) {
    return (
      <svg viewBox="0 0 24 24" className="w-12 h-12 text-[#764abc] fill-current">
        <path d="M12.43 14.28a3.1 3.1 0 0 1-1.07 0c-.8-.2-1.37-.8-1.57-1.57a3.1 3.1 0 0 1 0-1.07c.2-.8.8-1.37 1.57-1.57.8-.2 1.63 0 2.28.5a.5.5 0 0 0 .6-.8C13.25 9.07 12 8.7 10.74 9c-1.32.32-2.3 1.3-2.62 2.62a4.93 4.93 0 0 0 0 1.76c.32 1.32 1.3 2.3 2.62 2.62 1.32.32 2.7-.13 3.5-.98a.5.5 0 0 0-.74-.68c-.58.6-1.38.93-2.07.96zm4.12-6.53c-.34-.4-.84-.66-1.38-.72s-1.08.08-1.5.38a3.13 3.13 0 0 1-2.28.5.5.5 0 0 0-.1 1c1.26 0 2.45-.6 3.15-1.63a1.12 1.12 0 0 1 1.6.14c.72.82.72 2.05 0 2.87-.7.8-1.9 1.4-3.15 1.4a.5.5 0 0 0 0 1c1.68 0 3.23-.83 4.18-1.9a3.13 3.13 0 0 0-.47-4.04zm-9.1.5c-.42-.3-.96-.44-1.5-.38a1.9 1.9 0 0 0-1.38.72 3.13 3.13 0 0 0-.47 4.04c.95 1.07 2.5 1.9 4.18 1.9a.5.5 0 0 0 0-1c-1.25 0-2.45-.6-3.15-1.4-.72-.82-.72-2.05 0-2.87a1.12 1.12 0 0 1 1.6-.14c.42.36.9.54 1.42.5a.5.5 0 0 0 .1-1c-.32 0-.64-.1-.9-.3z"/>
      </svg>
    );
  }
  if (name.includes("aws")) {
    return (
      <svg viewBox="0 0 24 24" className="w-12 h-12 text-[#ff9900] fill-current">
        <path d="M18.8 13.2c-1.8.8-4 1.2-6.2 1.2-3.8 0-7.3-1.6-9.6-4.3-.4-.5-.1-1.1.5-.9 2.2.8 4.7 1.2 7.3 1.2 2.6 0 5-.4 7.2-1.2.6-.2.9.4.5.9-1.3 1.5-2.9 2.6-4.7 3.1zM21.2 9c0-.4-.4-.6-.8-.4-1 .5-2 .8-3.1 1-.4 0-.6.4-.4.8.4 1 1 1.8 1.8 2.5.3.3.8.1.8-.3.3-1.1.6-2.3.7-3.6z"/>
      </svg>
    );
  }
  if (name.includes("docker")) {
    return (
      <svg viewBox="0 0 24 24" className="w-12 h-12 text-[#2496ed] fill-current">
        <path d="M13.983 8.871h-1.996V6.885h1.996v1.986zm-2.89 0H9.097V6.885h1.996V8.871zm-2.89 0H6.207V6.885h1.996V8.871zm-2.89 0H3.317V6.885h1.996V8.871zm11.67 0h-1.997V6.885h1.996V8.871zm-2.89 0h-1.996V6.885h1.996V8.871zm5.78 0h-1.996V6.885h1.996V8.871zm-2.89-2.87h-1.996V4.014h1.996V6.001zm-2.89 0h-1.996V4.014h1.996V6.001zm8.67 2.87h-1.996V6.885h1.996V8.871zM22.3 14.28c-.122-.724-.543-1.341-1.218-1.579-.1-.035-.205-.06-.312-.078-.066-.356-.226-.688-.475-.953-.41-.437-.996-.64-1.576-.554a3.1 3.1 0 0 0-.256-.474 3.036 3.036 0 0 0-1.748-1.229 4.195 4.195 0 0 0-.613-.095c-.097-.333-.298-.625-.572-.828A2.08 2.08 0 0 0 14.33 8h-8.66v4.61s.147.28.43.46c.284.18.662.296 1.1.296h8.34c.57 0 1.09-.23 1.48-.61.166-.16.3-.35.4-.55.19.12.4.21.63.26.47.1 1 .01 1.43-.24.16.2.37.37.62.48.51.24 1.12.24 1.63 0a3.03 3.03 0 0 0 .57-.35c.14.23.33.43.57.57a3.03 3.03 0 0 0 1.63 0c.26-.06.51-.17.74-.32.06.27.19.52.37.73.4.45.98.71 1.58.71h.06c.64 0 1.25-.29 1.66-.79a2.08 2.08 0 0 0 .37-1.3z"/>
      </svg>
    );
  }
  if (name.includes("nginx")) {
    return (
      <svg viewBox="0 0 24 24" className="w-12 h-12 text-[#009639] fill-current">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14h-2V8.5l-3 4.5V16H6V8h2v5.5l3-4.5V8h2v8z"/>
      </svg>
    );
  }
  if (name.includes("jwt")) {
    return (
      <svg viewBox="0 0 24 24" className="w-12 h-12 text-[#d63aff] fill-current">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-3.31 0-6-2.69-6-6h12c0 3.31-2.69 6-6 6z"/>
      </svg>
    );
  }
  if (name.includes("vercel")) {
    return (
      <svg viewBox="0 0 24 24" className="w-12 h-12 text-white fill-current">
        <path d="M12 2L2 22h20L12 2z"/>
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className="w-12 h-12 text-moonstone fill-none stroke-current stroke-2">
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
      <line x1="8" y1="21" x2="16" y2="21"/>
      <line x1="12" y1="17" x2="12" y2="21"/>
    </svg>
  );
};

const CaseStudyPage: React.FC<CaseStudyPageProps> = ({ project, onClose }) => {
  const [activeScreenIndex, setActiveScreenIndex] = useState(0);

  // Force scroll to top on page mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [project]);

  const screens = project.caseStudy?.screens || [];

  const revealVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } 
    },
  };



  return (
    <div className="min-h-screen bg-[#04080f] text-white py-12 px-6 sm:px-8 lg:px-16 relative overflow-hidden select-text">
      
      {/* Background Subtle Glows */}
      <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-indigo-900/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-moonstone/5 blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto space-y-16">
        
        {/* Top Back Navigation Bar */}
        <motion.div 
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-between items-center pb-4 border-b border-white/10"
        >
          <button
            onClick={onClose}
            className="flex items-center gap-2 text-xs font-mono text-white/50 hover:text-white uppercase tracking-widest cursor-pointer transition-colors duration-300"
          >
            <ArrowLeft size={16} />
            Back to Home
          </button>
          <span className="text-[10px] tracking-widest text-[#aaa] uppercase font-mono">
            [ Project Case Study ]
          </span>
        </motion.div>

        {/* 1. HEADER SECTION (Full-Width Showcase image with details below) */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={revealVariants}
          className="space-y-8"
        >
          {/* Title Header */}
          <div className="text-left">
            <span className="text-[10px] tracking-widest text-moonstone uppercase font-mono font-bold">
              [ {project.name} CASE STUDY ]
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight uppercase mt-1">
              {project.name}
            </h1>
          </div>

          {/* Showcase Banner Image */}
          <div className="relative group w-full">
            <div className="absolute -inset-1.5 bg-gradient-to-r from-moonstone to-indigo-500 rounded-2xl blur-lg opacity-20 group-hover:opacity-35 transition duration-500" />
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-zinc-900/40 backdrop-blur-3xl shadow-2xl p-2 flex justify-center">
              <img 
                src={project.image || '/images/logo.png'} 
                alt={`${project.name} showcase screen banner`}
                className="w-full h-auto rounded-xl object-contain max-h-[480px]"
              />
            </div>
          </div>

          {/* Project Details & Actions Below */}
          <div className="space-y-6 text-left max-w-3xl">
            <p className="text-[#8aacbe] text-base sm:text-lg leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 min-h-11 px-5 py-2.5 rounded-xl border border-white/20 bg-white/5 text-white font-bold text-xs uppercase tracking-wider hover:bg-white hover:text-zinc-950 transition-all duration-300"
                >
                  <Github size={16} />
                  View Repository
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 min-h-11 px-5 py-2.5 rounded-xl border border-moonstone-border bg-transparent text-moonstone font-bold text-xs uppercase tracking-wider hover:bg-white hover:text-zinc-950 transition-all duration-300"
                >
                  <ExternalLink size={16} />
                  Live Application
                </a>
              )}
            </div>
          </div>
        </motion.div>

        {project.caseStudy && (
          <>
            {/* 2. HOW IT WORKS (WORKFLOWS) */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={revealVariants}
              className="border-t border-white/5 pt-12 space-y-12 text-center"
            >
              {/* Heading */}
              <div className="flex flex-col items-center">
                <span className="text-[10px] tracking-widest text-moonstone uppercase font-mono mb-2">[ SECTION 01 ]</span>
                <h3 className="text-3xl font-extrabold text-white tracking-tight uppercase font-poppins relative">
                  How It Works
                </h3>
                <div className="h-1.5 w-16 bg-orange-500 rounded-full mt-3" />
                <p className="text-[#8aacbe] text-sm sm:text-base max-w-2xl mt-6 italic font-medium leading-relaxed">
                  "{getWorkflowTagline(project.name)}"
                </p>
              </div>

              {/* Loop over workflows */}
              <div className="space-y-16">
                {project.caseStudy.workflows.map((flow, flowIdx) => (
                  <div key={flowIdx} className="space-y-8 text-left">
                    <h4 className="text-base font-bold text-moonstone tracking-widest uppercase border-l-2 border-moonstone pl-3">
                      {flow.title}
                    </h4>

                    {/* Step progress strip */}
                    <div className="relative">
                      {/* Connecting Line (Desktop Only) */}
                      <div className="absolute top-6 left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-moonstone via-indigo-500 to-white/10 hidden md:block z-0" />

                      {/* Steps Grid */}
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
                        {flow.steps.map((step, idx) => {
                          const details = getStepDetails(step);
                          return (
                            <div key={idx} className="flex flex-col items-center md:items-start text-center md:text-left space-y-4 group">
                              
                              {/* Circle Bubble Badge */}
                              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-moonstone to-indigo-600 border-4 border-[#04080f] flex items-center justify-center text-white font-bold text-lg shadow-lg relative group-hover:scale-110 transition-transform duration-300 mx-auto md:mx-0">
                                {idx + 1}
                              </div>

                              {/* Step Text details */}
                              <div className="space-y-2">
                                <h5 className="text-sm sm:text-base font-bold text-white tracking-wide font-poppins">
                                  {details.title}
                                </h5>
                                <p className="text-xs sm:text-sm text-[#8aacbe] leading-relaxed max-w-[240px] mx-auto md:mx-0">
                                  {details.desc}
                                </p>
                              </div>

                            </div>
                          );
                        })}
                      </div>

                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* 3. APP FEATURES */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={revealVariants}
              className="border-t border-white/5 pt-12 space-y-12 text-center"
            >
              {/* Heading */}
              <div className="flex flex-col items-center">
                <span className="text-[10px] tracking-widest text-moonstone uppercase font-mono mb-2">[ SECTION 02 ]</span>
                <h3 className="text-3xl font-extrabold text-white tracking-tight uppercase font-poppins relative">
                  App Features
                </h3>
                <div className="h-1.5 w-16 bg-orange-500 rounded-full mt-3" />
                <p className="text-[#8aacbe] text-sm sm:text-base max-w-2xl mt-6 italic font-medium leading-relaxed">
                  "{getFeatureTagline(project.name)}"
                </p>
              </div>

              {/* 4-Column Grid of Beautiful Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {project.caseStudy.features.map((feat, i) => (
                  <div 
                    key={i} 
                    className="glass-card p-6 rounded-3xl border border-white/5 bg-zinc-900/30 backdrop-blur-3xl shadow-xl flex flex-col items-center text-center space-y-4 hover:border-moonstone/20 hover:-translate-y-1 transition-all duration-300"
                  >
                    {/* Icon Container */}
                    <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shadow-inner">
                      {getFeatureIcon(feat.title)}
                    </div>

                    {/* Content */}
                    <div className="space-y-2">
                      <h4 className="text-base font-bold text-white font-poppins">{feat.title}</h4>
                      <p className="text-xs sm:text-sm text-[#8aacbe] leading-relaxed line-clamp-4">{feat.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* 4. TECHNOLOGIES USED */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={revealVariants}
              className="border-t border-white/5 pt-12 space-y-12 text-center"
            >
              {/* Heading */}
              <div className="flex flex-col items-center">
                <span className="text-[10px] tracking-widest text-moonstone uppercase font-mono mb-2">[ SECTION 03 ]</span>
                <h3 className="text-3xl font-extrabold text-white tracking-tight uppercase font-poppins relative">
                  Technologies We Use
                </h3>
                <div className="h-1.5 w-16 bg-orange-500 rounded-full mt-3" />
                <p className="text-[#8aacbe] text-sm sm:text-base max-w-2xl mt-6 italic font-medium leading-relaxed">
                  "{getTechTagline(project.name)}"
                </p>
              </div>

              {/* Technologies Row Grid */}
              <div className="flex flex-wrap justify-center gap-6">
                {project.stack.map((tech) => (
                  <div 
                    key={tech}
                    className="w-32 h-32 rounded-3xl bg-zinc-900/30 border border-white/5 flex flex-col items-center justify-center p-4 gap-3 hover:border-moonstone/20 hover:bg-zinc-900/50 hover:-translate-y-1 transition-all duration-300 shadow-xl"
                  >
                    {/* SVG Tech Logo */}
                    <div className="flex items-center justify-center">
                      {getTechLogoSvg(tech)}
                    </div>
                    {/* Tech Name */}
                    <span className="text-[10px] font-bold text-white tracking-widest uppercase font-poppins text-center truncate w-full">
                      {tech}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* 5. APP SCREENS (3D SLIDER) */}
            {screens.length > 0 && (
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                variants={revealVariants}
                className="border-t border-white/5 pt-12 space-y-6"
              >
                <div className="flex items-center gap-2">
                  <span className="text-[10px] tracking-widest text-moonstone uppercase font-mono">[ SECTION 04 ]</span>
                  <h3 className="text-lg font-bold text-white uppercase tracking-wider">App Screens</h3>
                </div>
                <div className="relative w-full flex items-center justify-center py-6 sm:py-10 overflow-hidden">
                  <div className="flex items-center gap-4 sm:gap-8 max-w-full z-10">
                    
                    {/* Left Button */}
                    <button
                      onClick={() => setActiveScreenIndex((prev) => (prev > 0 ? prev - 1 : screens.length - 1))}
                      className="p-3 rounded-full border border-white/10 bg-white/5 hover:bg-white/15 text-white transition-all duration-300 cursor-pointer flex-shrink-0"
                      aria-label="Previous Screen"
                    >
                      <ChevronLeft size={18} />
                    </button>
 
                    {/* Phone Container with 3D perspective */}
                    <div className="flex flex-col items-center w-full overflow-visible">
                      <div 
                        className="relative flex items-center justify-center w-full max-w-[280px] h-[520px] sm:max-w-4xl sm:h-[580px] overflow-visible"
                        style={{ perspective: "1200px", transformStyle: "preserve-3d" }}
                      >
                        
                        {/* Left Phone Preview Frame (Faded & Curved Inward) */}
                        <div 
                          className="absolute hidden sm:flex items-center justify-center w-[180px] h-[330px] md:w-[200px] md:h-[370px] cursor-pointer"
                          style={{
                            transform: "translateX(-175px) translateZ(-100px) rotateY(35deg)",
                            opacity: 0.35,
                            filter: "blur(0.5px)",
                            transition: "all 0.7s cubic-bezier(0.16, 1, 0.3, 1)",
                            transformStyle: "preserve-3d",
                            zIndex: 5,
                          }}
                          onClick={() => setActiveScreenIndex((prev) => (prev > 0 ? prev - 1 : screens.length - 1))}
                        >
                          <div className="relative w-full h-full rounded-[30px] border-[4px] border-zinc-800 bg-black p-1.5 shadow-2xl flex flex-col">
                            {/* Dynamic Island */}
                            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-2.5 bg-zinc-900 rounded-full z-30" />
                            
                            {/* Screen Container */}
                            <div className="relative flex-1 rounded-[22px] overflow-hidden bg-[#0c1221] border border-white/5 select-none">
                              {screens[(activeScreenIndex - 1 + screens.length) % screens.length].image ? (
                                <img 
                                  src={screens[(activeScreenIndex - 1 + screens.length) % screens.length].image} 
                                  alt="prev" 
                                  className="absolute inset-0 w-full h-full object-cover"
                                />
                              ) : (
                                <div className="flex flex-col justify-between h-full p-4 text-left">
                                  <span className="text-[6px] font-mono text-white/35">[ Screen 0{((activeScreenIndex - 1 + screens.length) % screens.length) + 1} ]</span>
                                  <div className="text-[9px] font-bold text-white/60 truncate">{screens[(activeScreenIndex - 1 + screens.length) % screens.length].name}</div>
                                  <div className="text-[7px] text-white/40 line-clamp-3">{screens[(activeScreenIndex - 1 + screens.length) % screens.length].details}</div>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>

                        {/* Center Phone Frame */}
                        <div 
                          className="relative z-10 w-[280px] h-[520px] sm:w-[320px] sm:h-[580px] rounded-[40px] border-[6px] border-zinc-800 bg-black p-3.5 shadow-2xl transition-all duration-500 flex flex-col hover:border-moonstone/50"
                          style={{
                            transform: "translateX(0) translateZ(0) rotateY(0deg)",
                            transition: "all 0.7s cubic-bezier(0.16, 1, 0.3, 1)",
                            transformStyle: "preserve-3d",
                            zIndex: 10,
                          }}
                        >
                          {/* Dynamic Island */}
                          <div className="absolute top-5 left-1/2 -translate-x-1/2 w-28 h-5 bg-zinc-900 rounded-full flex items-center justify-center z-30">
                            <div className="w-2.5 h-2.5 rounded-full bg-slate-950 ml-auto mr-4" />
                          </div>

                          {/* Screen Mockup */}
                          <div className="relative flex-1 rounded-[28px] overflow-hidden bg-[#0c1221] border border-white/5 flex flex-col justify-between pt-12 select-none">
                            {screens[activeScreenIndex].image ? (
                              <>
                                <img 
                                  src={screens[activeScreenIndex].image} 
                                  alt={screens[activeScreenIndex].name} 
                                  className="absolute inset-0 w-full h-full object-cover z-0"
                                />
                                {/* Subtle bottom gradient overlay for phone depth */}
                                <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-zinc-950/80 to-transparent z-10" />
                              </>
                            ) : (
                              <>
                                <div className="absolute -top-24 -left-24 w-48 h-48 rounded-full bg-moonstone/10 blur-3xl pointer-events-none" />
                                
                                <div className="flex justify-between items-start p-6">
                                  <span className="text-[10px] font-mono text-moonstone font-semibold tracking-wider">
                                    [ SCREEN 0{activeScreenIndex + 1} ]
                                  </span>
                                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                </div>

                                <div className="my-auto text-left space-y-3 p-6">
                                  <h4 className="text-lg sm:text-xl font-bold text-white leading-snug font-poppins">
                                    {screens[activeScreenIndex].name}
                                  </h4>
                                  <div className="h-[2px] w-8 bg-moonstone" />
                                  <p className="text-xs sm:text-sm text-[#8aacbe] leading-relaxed">
                                    {screens[activeScreenIndex].details}
                                  </p>
                                </div>

                                <div className="border-t border-white/10 pt-3 flex items-center justify-between p-6">
                                  <span className="text-[8px] font-mono text-white/30 uppercase">
                                    {project.name}
                                  </span>
                                  <span className="text-[9px] text-moonstone font-bold tracking-wider">
                                    Active Preview
                                  </span>
                                </div>
                              </>
                            )}
                          </div>
                        </div>

                        {/* Right Phone Preview Frame (Faded & Curved Inward) */}
                        <div 
                          className="absolute hidden sm:flex items-center justify-center w-[180px] h-[330px] md:w-[200px] md:h-[370px] cursor-pointer"
                          style={{
                            transform: "translateX(175px) translateZ(-100px) rotateY(-35deg)",
                            opacity: 0.35,
                            filter: "blur(0.5px)",
                            transition: "all 0.7s cubic-bezier(0.16, 1, 0.3, 1)",
                            transformStyle: "preserve-3d",
                            zIndex: 5,
                          }}
                          onClick={() => setActiveScreenIndex((prev) => (prev + 1) % screens.length)}
                        >
                          <div className="relative w-full h-full rounded-[30px] border-[4px] border-zinc-800 bg-black p-1.5 shadow-2xl flex flex-col">
                            {/* Dynamic Island */}
                            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-2.5 bg-zinc-900 rounded-full z-30" />
                            
                            {/* Screen Container */}
                            <div className="relative flex-1 rounded-[22px] overflow-hidden bg-[#0c1221] border border-white/5 select-none">
                              {screens[(activeScreenIndex + 1) % screens.length].image ? (
                                <img 
                                  src={screens[(activeScreenIndex + 1) % screens.length].image} 
                                  alt="next" 
                                  className="absolute inset-0 w-full h-full object-cover"
                                />
                              ) : (
                                <div className="flex flex-col justify-between h-full p-4 text-left">
                                  <span className="text-[6px] font-mono text-white/35">[ Screen 0{((activeScreenIndex + 1) % screens.length) + 1} ]</span>
                                  <div className="text-[9px] font-bold text-white/60 truncate">{screens[(activeScreenIndex + 1) % screens.length].name}</div>
                                  <div className="text-[7px] text-white/40 line-clamp-3">{screens[(activeScreenIndex + 1) % screens.length].details}</div>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Active Screen Details Caption */}
                      <div className="mt-8 text-center max-w-md mx-auto space-y-2 relative z-10 px-4">
                        <h4 className="text-lg sm:text-xl font-bold text-white font-poppins">
                          {screens[activeScreenIndex].name}
                        </h4>
                        <p className="text-xs sm:text-sm text-[#8aacbe] leading-relaxed">
                          {screens[activeScreenIndex].details}
                        </p>
                      </div>
                    </div>

                    {/* Right Button */}
                    <button
                      onClick={() => setActiveScreenIndex((prev) => (prev + 1) % screens.length)}
                      className="p-3 rounded-full border border-white/10 bg-white/5 hover:bg-white/15 text-white transition-all duration-300 cursor-pointer flex-shrink-0"
                      aria-label="Next Screen"
                    >
                      <ChevronRight size={18} />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* 6. FINAL (SYSTEM ARCHITECTURE) */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={revealVariants}
              className="border-t border-white/5 pt-12 space-y-6"
            >
              <div className="flex items-center gap-2">
                <span className="text-[10px] tracking-widest text-moonstone uppercase font-mono">[ SECTION 05 ]</span>
                <h3 className="text-lg font-bold text-white uppercase tracking-wider">System Architecture</h3>
              </div>
              <div className="glass-card p-6 rounded-2xl border border-white/5 text-left">
                <p className="text-sm text-white/80 leading-relaxed font-mono">
                  {project.caseStudy.architecture}
                </p>
              </div>
            </motion.div>
          </>
        )}

        {/* Back to Home close button at bottom */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center border-t border-white/10 pt-10 pb-16"
        >
          <button
            onClick={onClose}
            className="inline-flex items-center justify-center min-h-11 px-8 py-3 rounded-full border border-white/10 text-white hover:bg-white hover:text-black transition-all duration-300 cursor-pointer text-xs uppercase font-bold tracking-wider"
          >
            Back to Projects
          </button>
        </motion.div>

      </div>
    </div>
  );
};

export default CaseStudyPage;
