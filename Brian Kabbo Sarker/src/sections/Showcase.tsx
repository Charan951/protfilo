import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Github, ExternalLink } from 'lucide-react';

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
    screens: { name: string; details: string }[];
    architecture: string;
  };
}

const projects: Project[] = [
  {
    id: 1,
    name: "EYEGLAZE",
    description:
      "A complete eyewear e-commerce platform built with the MERN Stack. Features include product catalog, category management, secure authentication, shopping cart, wishlist, order management, payment integration, responsive UI, and an admin dashboard for managing products, customers, and orders.",
    stack: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "TypeScript",
      "Tailwind CSS",
      "JWT",
      "AWS",
      "Nginx",
      "Docker"
    ],
    image: "/images/eyeglaze.png",
    github: "https://github.com/Charan951",
    live: "https://web.eyeglaze.in",
    caseStudy: {
      workflows: [
        {
          title: "Customer Journey Flow",
          steps: [
            "Browse Eyewear Catalog & Frame Styles",
            "Filter by Frame Size, Color & Material",
            "Add Eyewear to Cart or Wishlist",
            "Complete Secure Checkout & Digital Payment"
          ]
        },
        {
          title: "Admin Management Flow",
          steps: [
            "Add or Update Eyewear Inventory",
            "Review Customer Transactions & Order Logs",
            "Manage Stock Quantities & Variations",
            "Monitor Real-time Sales Dashboards"
          ]
        }
      ],
      features: [
        { title: "Intuitive Product Filters", desc: "Allows users to quickly filter frames by style, shape, material, gender, and price range." },
        { title: "Shopping Cart & Wishlist", desc: "Enables seamless item saving and quick checkout operations with persistent local state." },
        { title: "Secure Checkout Pipeline", desc: "Integrates reliable payment gateways with end-to-end encryption for client transactions." },
        { title: "Advanced Admin Control Panel", desc: "Provides product management grids, order fulfillment dashboards, and sales charts." }
      ],
      screens: [
        { name: "Shop Catalog Gallery", details: "A grid-based glassmorphism catalog highlighting eyeglasses, sunglasses, and contact lenses." },
        { name: "Product Specification Details", details: "Detailed page showing frame dimensions, materials, pricing, and lens type options." },
        { name: "Cart Checkout Form", details: "A secure transaction form summarizing ordered items, shipping address, and payment options." },
        { name: "Admin Dashboard Overview", details: "A secure operations panel providing analytical charts, sales metrics, and inventory controls." }
      ],
      architecture: "Built using the MERN Stack (MongoDB, Express.js, React.js, Node.js) with TypeScript. The backend uses JWT authentication for secure RESTful APIs. Containerized via Docker, reverse proxied with Nginx, and deployed on AWS EC2 & S3 instances."
    }
  },
  {
    id: 2,
    name: "CARZZI",
    description:
      "A modern automobile marketplace and service platform developed using the MERN Stack. Includes vehicle listings, advanced search and filtering, dealer management, customer inquiries, secure authentication, admin dashboard, and scalable backend architecture with cloud deployment.",
    stack: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "TypeScript",
      "Tailwind CSS",
      "AWS",
      "Docker",
      "Nginx"
    ],
    image: "/images/carzzi.png",
    github: "https://github.com/Charan951",
    live: "https://carzzi.com",
    caseStudy: {
      workflows: [
        {
          title: "Buyer Marketplace Flow",
          steps: [
            "Search Cars by Brand, Model, or Budget",
            "Filter by Transmission, Fuel, and Mileage",
            "View Comprehensive Automobile Spec Sheet",
            "Submit Lead Inquiry directly to Dealer"
          ]
        },
        {
          title: "Dealer Operations Flow",
          steps: [
            "Create and Manage Dealer Profile",
            "Post New Vehicle Listing & Specifications",
            "Receive Real-time Customer Lead Notifications",
            "Respond to Buyer Inquiries via Portal"
          ]
        }
      ],
      features: [
        { title: "Granular Car Search", desc: "Finds vehicles matching precise constraints (brand, year, body type, fuel type)." },
        { title: "Dealer Lead Pipeline", desc: "Captures and routes buyer inquiries directly to dealers for immediate follow-up." },
        { title: "Automobile Spec Sheets", desc: "Comprehensive sheets showing technical metrics like engine layout, horsepower, and torque." },
        { title: "Inventory Management Panel", desc: "Allows dealers to easily list, update pricing, or mark vehicles as sold." }
      ],
      screens: [
        { name: "Marketplace Listing Feed", details: "A feed displaying available cars with clean filter tags, prices, and dealer details." },
        { name: "Vehicle Technical Specification Sheet", details: "Tabbed display showing mechanical specs, history, features, and dealer details." },
        { name: "Lead Submission Form", details: "A contact overlay allowing buyers to schedule test drives or request pricing quotes." },
        { name: "Dealer Dashboard Panel", details: "A secure administrative dashboard showing active vehicle posts, leads, and analytics." }
      ],
      architecture: "Developed with the MERN Stack and TypeScript. Implements clean code backend routing for fast lead collection. Containerized using Docker, reverse proxied with Nginx, and hosted on AWS cloud servers for performance and reliability."
    }
  },
  {
    id: 3,
    name: "SPESHWAY HRMS",
    description:
      "A complete Human Resource Management System (HRMS) built for organizations to manage employees, attendance, leave requests, payroll, announcements, departments, roles, and performance. Developed using the MERN Stack with secure authentication, role-based access control, and production deployment.",
    stack: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "TypeScript",
      "Tailwind CSS",
      "JWT",
      "AWS",
      "Docker",
      "Nginx"
    ],
    image: "/images/hrms.png",
    github: "https://github.com/Charan951",
    live: "https://speshwayhrms.com",
    caseStudy: {
      workflows: [
        {
          title: "Employee Self-Service Flow",
          steps: [
            "Clock-In/Out on Daily Attendance Panel",
            "Submit Paid Time Off (PTO) or Leave Request",
            "Access Monthly Pay Slips & Breakdown",
            "Read General Company Announcements"
          ]
        },
        {
          title: "HR Admin Operations Flow",
          steps: [
            "Manage Central Employee Directory",
            "Approve or Reject Pending Leave Requests",
            "Calculate and Disburse Monthly Payrolls",
            "Post Announcements to Company Feed"
          ]
        }
      ],
      features: [
        { title: "Role-Based Access Control", desc: "Displays distinct views, controls, and metrics depending on employee roles (Admin, HR, Manager, Staff)." },
        { title: "Attendance Tracking System", desc: "Records precise daily check-in and check-out logs to monitor work hours." },
        { title: "Leave Lifecycle Manager", desc: "A clean dashboard to submit leave requests and track leave balances dynamically." },
        { title: "Payroll Disbursal Engine", desc: "Generates official company payslips, calculating deductions and allowances automatically." }
      ],
      screens: [
        { name: "Employee Home Dashboard", details: "Displays clock-in shortcuts, general announcements, leave calendar, and team statistics." },
        { name: "HR Employee Directory Grid", details: "A secure database view listing all staff members, search filters, and profile details." },
        { name: "Attendance & Leave Request Logs", details: "Log pages allowing managers to view clock-in durations and approve/reject leave applications." },
        { name: "Payroll Operations Panel", details: "Financial portal where HR administrators can generate salary bills and payslips." }
      ],
      architecture: "Built using the MERN Stack (MongoDB, Express, React, Node) with JWT-based role authorization. Deployed in containerized Docker environments with Nginx reverse proxy on AWS Cloud servers for high reliability and secure data storage."
    }
  },
];

const Showcase: React.FC = () => {
  const [activeProject, setActiveProject] = useState(0);
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<Project | null>(null);
  const project = projects[activeProject];

  useEffect(() => {
    if (selectedCaseStudy) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedCaseStudy]);

  return (
    <section
      id="works"
      aria-label="Charan Teja Website Development Projects Portfolio Screen"
      className="max-w-6xl mx-auto px-0 lg:px-6 py-12 sm:py-16 lg:py-0 min-w-0"
      style={{ overflow: 'clip' }}
    >
      {/*DESKTOP*/}
      <div className="hidden lg:flex" style={{ alignItems: 'flex-start' }}>

        {/* LEFT — Sticky Info Panel */}
        <div
          className="w-[45%] flex flex-col"
          style={{ position: 'sticky', top: 0, height: '100vh' }}
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15, margin: '-30px 0px' }}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
                },
              },
            }}
            className="flex-shrink-0 pt-16 pb-4 border-b border-white/10"
          >
            <div className="flex items-center justify-between pr-8">
              <h2 className="text-xl md:text-2xl font-bold tracking-[0.3em] text-[#aaa] uppercase font-poppins">
                PROJECTS
              </h2>
              <span className="text-xs text-white/30 tracking-widest uppercase font-mono">
                / PORTFOLIO
              </span>
            </div>
          </motion.div>

          <div className="flex-1 flex flex-col justify-start pt-16 pr-12">
            <div className="flex flex-col">

              {/* Ticker Counter */}
              <div className="flex items-center text-sm tracking-[0.3em] text-white/40 font-mono mb-3">
                <span>[</span>
                <div className="overflow-hidden flex items-center justify-center px-3" style={{ height: '1.4em' }}>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeProject}
                      initial={{ y: 24 }}
                      animate={{
                        y: 0,
                        transition: {
                          duration: 0.3,
                          ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
                        },
                      }}
                      exit={{ y: -24, transition: { duration: 0.15, ease: 'easeIn' } }}
                      className="whitespace-nowrap"
                    >
                      0{activeProject + 1}
                    </motion.div>
                  </AnimatePresence>
                </div>
                <span>/</span>
                <span className="px-3">03</span>
                <span>]</span>
              </div>

              {/* Title */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`title-${activeProject}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { duration: 0.4, ease: 'easeOut' } }}
                  exit={{ opacity: 0, transition: { duration: 0.2, ease: 'easeIn' } }}
                >
                  <h3 className="mb-4 text-2xl xl:text-3xl font-bold text-white tracking-tight uppercase leading-tight max-w-[90%] break-words">
                    {project.name}
                  </h3>
                </motion.div>
              </AnimatePresence>

              {/* Description */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`desc-${activeProject}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } }}
                  exit={{ opacity: 0, transition: { duration: 0.25, ease: 'easeIn' } }}
                >
                  <p className="mb-6 text-sm text-white/60 leading-relaxed max-w-[380px]">
                    {project.description}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Stack Tags */}
              <div className="pt-2">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`tags-${activeProject}`}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.4,
                        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
                      },
                    }}
                    exit={{ opacity: 0, y: -6, transition: { duration: 0.2 } }}
                    className="flex flex-wrap gap-2"
                  >
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] tracking-widest text-white/50 border border-white/20 px-3 py-1 uppercase rounded-full font-medium hover:-translate-y-0.5 hover:shadow-md hover:shadow-white/5 transition-all duration-300 cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Get More Button */}
              <div className="pt-6">
                <button
                  onClick={() => setSelectedCaseStudy(project)}
                  className="btn-shine inline-flex items-center justify-center min-h-11 px-6 py-2.5 rounded-full border border-moonstone-border text-moonstone font-bold text-xs uppercase bg-transparent hover:bg-white transition-all duration-300 cursor-pointer"
                >
                  Get More
                </button>
              </div>

            </div>
          </div>
        </div>

        {/* RIGHT — Image Column */}
        <div className="w-[55%]">
          {projects.slice(0, 3).map((item, index) => (
            <motion.div
              key={item.id}
              className="flex items-center justify-end px-8"
              style={{ minHeight: '100vh' }}
              onViewportEnter={() => setActiveProject(index)}
              viewport={{ amount: 0.5 }}
            >
              <div className="relative w-full max-w-[500px]">
                <div className="absolute -inset-3 border border-moonstone/20 rounded-2xl" />
                <div className="relative z-10 w-full rounded-xl overflow-hidden shadow-2xl bg-zinc-900/20 backdrop-blur-3xl border border-white/5 flex items-center justify-center">

                  {item.image ? (
                    <img src={item.image} alt={`${item.name} - Custom Website Development & Web Application Portfolio Project by Freelance Developer Charan Teja Hyderabad Telangana`} className="w-full h-auto block" />
                  ) : (
                    <div className="w-full h-64 bg-neutral-900/50 flex items-center justify-center">
                      <span className="text-white/5 text-[10px] tracking-widest uppercase">No Preview Available</span>
                    </div>
                  )}

                  {/* Desktop Hover Overlay */}
                  <div className="absolute inset-0 z-30 flex items-center justify-center gap-3 bg-black/40 opacity-0 hover:opacity-100 transition-opacity duration-300 backdrop-blur-[2px]">
                    {item.github !== null && (
                      <a
                        href={item.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md transform translate-y-2 hover:translate-y-0 transition-transform duration-300"
                      >
                        <Github size={18} className="text-white" />
                        <span className="text-[10px] font-bold text-white tracking-[0.2em] uppercase">GitHub</span>
                      </a>
                    )}
                    {item.live !== null && (
                      <a
                        href={item.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md transform translate-y-2 hover:translate-y-0 transition-transform duration-300"
                      >
                        <ExternalLink size={18} className="text-white" />
                        <span className="text-[10px] font-bold text-white tracking-[0.2em] uppercase">Live</span>
                      </a>
                    )}
                    <button
                      onClick={() => setSelectedCaseStudy(item)}
                      className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md transform translate-y-2 hover:translate-y-0 transition-transform duration-300 cursor-pointer"
                    >
                      <span className="text-[10px] font-bold text-white tracking-[0.2em] uppercase">Get More</span>
                    </button>
                  </div>

                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* MOBILE */}
      <div className="flex lg:hidden flex-col items-center w-full min-w-0 text-center">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15, margin: "-30px 0px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="w-full pb-4 border-b border-white/10"
        >
          <div className="flex items-center justify-between gap-3 min-w-0">
            <h2 className="text-lg sm:text-xl font-bold tracking-[0.2em] sm:tracking-[0.3em] text-[#aaa] uppercase font-poppins truncate">
              PROJECTS
            </h2>
            <span className="text-[10px] sm:text-xs text-white/30 tracking-widest uppercase font-mono flex-shrink-0">
              / PORTFOLIO
            </span>
          </div>
        </motion.div>

        {/* Cards */}
        <div className="flex flex-col gap-12 sm:gap-16 pt-10 sm:pt-12 w-full">
          {projects.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -45 : 45 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.12, margin: "-30px 0px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className={`flex flex-col gap-5 sm:gap-6 min-w-0 w-[92%] max-w-lg ${
                index % 2 === 0 ? 'self-start' : 'self-end'
              } items-start text-left`}
            >

              <div className="flex flex-col gap-3 sm:gap-4 items-start">
                <div className="text-xs tracking-[0.2em] sm:tracking-[0.3em] text-white/40 font-mono">
                  [ 0{index + 1} / {String(projects.length).padStart(2, '0')} ]
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight uppercase leading-snug break-words">
                  {item.name}
                </h3>
              </div>

              {item.image !== null && (
                <div className="relative w-full min-w-0 max-w-full">
                  <div className="absolute -inset-1.5 sm:-inset-2 border border-moonstone/10 rounded-xl pointer-events-none" />
                  <div className="relative z-10 w-full rounded-lg overflow-hidden shadow-xl bg-zinc-900/20 backdrop-blur-3xl border border-white/5">
                    <img
                      src={item.image}
                      alt={`${item.name} - Custom Website Development & Web Application Portfolio Project by Freelance Developer Charan Teja Hyderabad Telangana`}
                      className="w-full h-auto max-w-full block object-contain"
                    />
                  </div>
                </div>
              )}

              <p className="text-sm sm:text-base text-white/60 leading-relaxed break-words text-left">
                {item.description}
              </p>

              <div className="flex flex-wrap gap-2 justify-start">
                {item.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-[10px] tracking-widest text-white/50 border border-white/20 px-3 py-1.5 uppercase rounded-full font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 pt-1 justify-start">
                {item.github !== null && (
                  <a
                    href={item.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 min-h-[38px] px-3.5 rounded-full bg-white/10 border border-white/20 text-white/80 hover:text-white hover:bg-white/15 transition-colors duration-300"
                  >
                    <Github size={15} aria-hidden="true" />
                    <span className="text-[10px] font-bold tracking-[0.12em] uppercase">GitHub</span>
                  </a>
                )}
                {item.live !== null && (
                  <a
                    href={item.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 min-h-[38px] px-3.5 rounded-full bg-white/10 border border-white/20 text-white/80 hover:text-white hover:bg-white/15 transition-colors duration-300"
                  >
                    <ExternalLink size={15} aria-hidden="true" />
                    <span className="text-[10px] font-bold tracking-[0.12em] uppercase">Live</span>
                  </a>
                )}
                <button
                  onClick={() => setSelectedCaseStudy(item)}
                  className="inline-flex items-center justify-center gap-1.5 min-h-[38px] px-3.5 rounded-full bg-white/10 border border-white/20 text-white/80 hover:text-white hover:bg-white/15 transition-colors duration-300 cursor-pointer"
                >
                  <span className="text-[10px] font-bold tracking-[0.12em] uppercase">Get More</span>
                </button>
              </div>

            </motion.article>
          ))}
        </div>
      </div>

      {/* ─── CASE STUDY FULL SCREEN MODAL ─── */}
      <AnimatePresence>
        {selectedCaseStudy && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-zinc-950/98 backdrop-blur-xl overflow-y-auto px-6 py-12 lg:px-12 cursor-default select-text"
          >
            <div className="max-w-4xl mx-auto">
              
              {/* Header */}
              <div className="flex justify-between items-center border-b border-white/10 pb-6 mb-10">
                <div>
                  <span className="text-[10px] tracking-widest text-[#aaa] uppercase font-mono">
                    [ CASE STUDY ]
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight uppercase mt-1">
                    {selectedCaseStudy.name}
                  </h2>
                </div>
                <button
                  onClick={() => setSelectedCaseStudy(null)}
                  className="btn-shine flex items-center justify-center min-h-[44px] min-w-[44px] rounded-full border border-white/10 text-white hover:bg-white hover:text-black transition-all duration-300 cursor-pointer"
                  title="Close Case Study"
                >
                  ✕
                </button>
              </div>

              {/* Tagline & Actions */}
              <div className="mb-12">
                <p className="text-[#8aacbe] text-lg sm:text-xl leading-relaxed mb-6">
                  {selectedCaseStudy.description}
                </p>
                <div className="flex flex-wrap gap-4">
                  {selectedCaseStudy.github && (
                    <a
                      href={selectedCaseStudy.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-shine inline-flex items-center gap-2 min-h-11 px-6 py-2.5 rounded-xl border border-white/20 bg-white/5 text-white font-bold text-sm hover:bg-white hover:text-zinc-950 transition-all duration-300"
                    >
                      <Github size={18} />
                      View Repository
                    </a>
                  )}
                  {selectedCaseStudy.live && (
                    <a
                      href={selectedCaseStudy.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-shine inline-flex items-center gap-2 min-h-11 px-6 py-2.5 rounded-xl border border-moonstone-border bg-transparent text-moonstone font-bold text-sm hover:bg-white hover:text-zinc-950 transition-all duration-300"
                    >
                      <ExternalLink size={18} />
                      Live Application
                    </a>
                  )}
                </div>
              </div>

              {selectedCaseStudy.caseStudy && (
                <div className="space-y-12">
                  
                  {/* WORKFLOWS */}
                  <div className="border-t border-white/5 pt-10">
                    <h3 className="text-lg sm:text-xl font-bold tracking-[0.25em] text-[#aaa] uppercase mb-8">
                      App Workflows
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {selectedCaseStudy.caseStudy.workflows.map((flow, i) => (
                        <div key={i} className="glass-card p-6 rounded-2xl border border-white/5 space-y-4">
                          <h4 className="text-base font-bold text-moonstone tracking-wide">{flow.title}</h4>
                          <div className="relative pl-6 border-l border-white/10 space-y-4">
                            {flow.steps.map((step, idx) => (
                              <div key={idx} className="relative">
                                <span className="absolute -left-[30px] top-[4px] w-3 h-3 rounded-full bg-moonstone border-2 border-zinc-950" />
                                <p className="text-sm text-white/80 leading-relaxed font-medium">{step}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CORE FEATURES */}
                  <div className="border-t border-white/5 pt-10">
                    <h3 className="text-lg sm:text-xl font-bold tracking-[0.25em] text-[#aaa] uppercase mb-8">
                      Core Features
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {selectedCaseStudy.caseStudy.features.map((feat, i) => (
                        <div key={i} className="flex gap-4">
                          <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-moonstone-dim border border-moonstone-border/20 text-moonstone font-mono font-bold flex items-center justify-center text-sm">
                            0{i + 1}
                          </span>
                          <div>
                            <h4 className="text-base font-bold text-white mb-1">{feat.title}</h4>
                            <p className="text-sm text-[#8aacbe] leading-relaxed">{feat.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* SCREENS BREAKDOWN */}
                  <div className="border-t border-white/5 pt-10">
                    <h3 className="text-lg sm:text-xl font-bold tracking-[0.25em] text-[#aaa] uppercase mb-8">
                      Screens Breakdown
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {selectedCaseStudy.caseStudy.screens.map((scr, i) => (
                        <div key={i} className="glass-card p-5 rounded-xl border border-white/5">
                          <div className="text-[10px] tracking-widest text-[#aaa] font-mono mb-2 uppercase">[ Screen 0{i + 1} ]</div>
                          <h4 className="text-base font-bold text-white mb-2">{scr.name}</h4>
                          <p className="text-sm text-white/60 leading-relaxed">{scr.details}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* SYSTEM ARCHITECTURE */}
                  <div className="border-t border-white/5 pt-10">
                    <h3 className="text-lg sm:text-xl font-bold tracking-[0.25em] text-[#aaa] uppercase mb-6">
                      System Architecture
                    </h3>
                    <div className="glass-card p-6 rounded-2xl border border-white/5">
                      <p className="text-sm text-white/80 leading-relaxed font-mono">
                        {selectedCaseStudy.caseStudy.architecture}
                      </p>
                    </div>
                  </div>

                </div>
              )}

              {/* Close footer button */}
              <div className="flex justify-center border-t border-white/10 pt-10 mt-12">
                <button
                  onClick={() => setSelectedCaseStudy(null)}
                  className="btn-shine inline-flex items-center justify-center min-h-11 px-8 py-3 rounded-full border border-white/10 text-white hover:bg-white hover:text-black transition-all duration-300 cursor-pointer text-sm uppercase font-bold"
                >
                  Back to Portfolio
                </button>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default Showcase;