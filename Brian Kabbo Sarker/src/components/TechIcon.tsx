import React from 'react';

interface TechIconProps {
  name: string;
  className?: string;
}

export const TechIcon: React.FC<TechIconProps> = ({ name, className = "w-10 h-10" }) => {
  const normalizedName = name.toLowerCase().trim();

  switch (normalizedName) {
    case 'react.js':
    case 'react':
      return (
        <svg viewBox="-11.5 -10.23174 23 20.46348" className={`${className} stroke-[#61DAFB] fill-none`} strokeWidth="1">
          <ellipse rx="11" ry="4.2" />
          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
          <circle r="2" fill="#61DAFB" />
        </svg>
      );
    case 'next.js':
    case 'nextjs':
      return (
        <svg viewBox="0 0 128 128" className={`${className} fill-white`}>
          <circle cx="64" cy="64" r="62" fill="black" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />
          <path d="M89.7 93.6L48 40.5V93.6H40V34.4H48L89.7 87.5V34.4H97.7V93.6H89.7Z" fill="white" />
        </svg>
      );
    case 'javascript':
    case 'js':
      return (
        <svg viewBox="0 0 480 480" className={`${className} fill-[#F7DF1E]`}>
          <path d="M0 0h480v480H0z" />
          <path d="M292.85 368.58c1.61 8 4.8 15.62 9.61 22.82 4.8 7.21 11.21 12.82 19.21 16.82s17.62 6 28.82 6c16.02 0 28.83-4 38.43-12 9.61-8 14.41-20.02 14.41-36.03 0-12-3.2-21.62-9.61-28.82-6.4-7.21-16.01-13.61-28.82-19.21-12.81-5.6-26.42-10.81-40.83-15.62-14.41-4.8-28.02-11.21-40.83-19.21-12.81-8-23.22-18.42-31.22-31.22-8-12.81-12.01-29.62-12.01-50.44 0-20.81 4.8-38.43 14.41-52.84 9.61-14.41 23.22-25.22 40.83-32.42 17.61-7.21 38.43-10.81 62.45-10.81 22.42 0 42.43 3.2 60.04 9.61 17.61 6.4 31.62 16.01 42.03 28.82 10.41 12.81 16.41 28.82 18.01 48.04l-72.05 14.41c-1.6-9.61-5.61-17.61-12.01-24.02-6.4-6.4-15.21-9.61-26.42-9.61-12.81 0-22.42 2.8-28.82 8.41-6.4 5.6-9.61 13.61-9.61 24.02 0 8 2.4 14.41 7.21 19.21 4.8 4.8 11.21 9.21 19.21 13.21 8 4 17.61 8 28.82 12 11.21 4 22.82 8.41 34.83 13.21 12 4.8 22.82 10.81 32.42 18.01 9.61 7.21 17.21 16.41 22.82 27.62 5.6 11.21 8.4 24.82 8.4 40.83 0 22.42-5.2 41.63-15.61 57.64-10.41 16.01-25.22 28.02-44.43 36.03-19.21 8-42.43 12.01-69.65 12.01-32.02 0-58.44-5.6-79.26-16.81-20.81-11.21-36.03-27.22-45.63-48.04l67.24-40.83zM108.74 380.59c4.8 8 11.21 14.41 19.21 19.21 8 4.8 17.61 7.21 28.82 7.21 12.81 0 22.82-3.6 30.02-10.81 7.21-7.21 10.81-17.21 10.81-30.02v-246.6h75.66v249c0 30.42-9.21 54.04-27.62 70.85-18.41 16.81-44.03 25.22-76.86 25.22-26.42 0-48.83-6-67.25-18.01-18.41-12-30.82-29.22-37.22-51.64l68.85-40.83c3.6 8 8 14.41 13.6 19.21z" fill="#323330" />
        </svg>
      );
    case 'typescript':
    case 'ts':
      return (
        <svg viewBox="0 0 128 128" className={`${className}`}>
          <rect width="128" height="128" fill="#3178c6" rx="8" />
          <path d="M41 40h46v10H64v60H52V50H41V40zm57.2 46.4c0 9.8-6.6 15.6-16.2 15.6-4.5 0-8.6-1-12.2-2.9l3.5-8.5c2.8 1.4 5.6 2.1 8.7 2.1 4.2 0 6.2-2 6.2-5.4s-1.8-4.8-5.9-6.3l-5.6-2.1c-6.8-2.5-9.8-6.9-9.8-12.7 0-9 6.2-14.7 15-14.7 4 0 7.8.9 10.9 2.5l-3.3 8.3c-2.4-1.1-4.9-1.7-7.6-1.7-3.6 0-5 1.7-5 4s1.7 4.1 5 5.3l5.6 2.1c7.2 2.7 10.7 7.1 10.7 13.5z" fill="white" />
        </svg>
      );
    case 'flutter':
      return (
        <svg viewBox="0 0 24 24" className={`${className} fill-[#02569B]`}>
          <path d="M14.314 0L2.3 12l3.6 3.6 12.015-12.015h-3.601zM20.315 6L8.3 18l3.6 3.6 12.015-12.015h-3.6zM8.3 18l-3.6-3.6L2.3 16.8 5.9 20.4H9.5L8.3 18z" />
        </svg>
      );
    case 'tailwind css':
    case 'tailwind':
      return (
        <svg viewBox="0 0 24 24" className={`${className} fill-[#06B6D4]`}>
          <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" />
        </svg>
      );
    case 'html5':
    case 'html':
    case 'html5 / css3': // Handled as html5
      return (
        <svg viewBox="0 0 24 24" className={`${className} fill-[#E34F26]`}>
          <path d="M1.5 0h21l-1.9 21.2L12 24l-8.6-2.8L1.5 0zm16.5 6.3H6l.3 3.1h10.9l-.3 3.3-4.9 1.6-4.9-1.6-.3-3.1H3.7l.5 6.2 7.8 2.6 7.8-2.6.9-9.5z" />
        </svg>
      );
    case 'css3':
    case 'css':
      return (
        <svg viewBox="0 0 24 24" className={`${className} fill-[#1572B6]`}>
          <path d="M1.5 0h21l-1.9 21.2L12 24l-8.6-2.8L1.5 0zm15.6 6.3H6.9l.3 3.1h9.1l-.3 3.3-4 1.3-4-1.3-.2-2.3H4.7l.4 5.3 6.9 2.3 6.9-2.3.7-8.1.1-1.3z" />
        </svg>
      );
    case 'node.js':
    case 'nodejs':
    case 'node':
      return (
        <svg viewBox="0 0 24 24" className={`${className} fill-[#339933]`}>
          <path d="M12 2L2 7.7v11.5L12 22l10-5.7V7.7L12 2zm-1 16.7l-6-3.4v-6.9l6 3.4v6.9zm1-8.1l-6-3.4 6-3.4 6 3.4-6 3.4zm7 4.7l-6 3.4v-6.9l6-3.4v6.9z" />
        </svg>
      );
    case 'express.js':
    case 'expressjs':
    case 'express':
      return (
        <svg viewBox="0 0 24 24" className={`${className} fill-white`}>
          <rect width="24" height="24" rx="4" fill="#000000" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
          <text x="12" y="15.5" fill="white" fontSize="10" fontWeight="bold" fontFamily="monospace" textAnchor="middle">EX</text>
        </svg>
      );
    case 'rest api':
    case 'rest api development':
    case 'api':
      return (
        <svg viewBox="0 0 24 24" className={`${className} fill-none stroke-[#FF6C37]`} strokeWidth="2">
          <rect x="2" y="3" width="20" height="5" rx="1" />
          <rect x="2" y="16" width="20" height="5" rx="1" />
          <path d="M6 8v8M18 8v8M12 8v8" />
        </svg>
      );
    case 'mongodb':
    case 'mongo':
      return (
        <svg viewBox="0 0 24 24" className={`${className} fill-[#47A248]`}>
          <path d="M12 0c-.3 0-.6.1-.9.3C9.3 2 4.7 6.5 4.7 11.8c0 4.1 2.3 7.8 5.7 9.5l.6.3v2c0 .2.2.4.4.4.2 0 .4-.2.4-.4v-2c3.4-1.7 5.7-5.4 5.7-9.5 0-5.3-4.6-9.8-6.4-11.5-.3-.2-.6-.3-.9-.3zm0 2.2c1.4 1.3 4.8 5.1 4.8 9.6 0 3.3-1.8 6.4-4.8 7.9V2.2z" />
        </svg>
      );
    case 'postgresql':
    case 'postgres':
      return (
        <svg viewBox="0 0 24 24" className={`${className} fill-none stroke-[#336791]`} strokeWidth="1.5">
          <path d="M12 2C9 2 6.5 4 6 7c-.5 3-3 4-4 5 .5.5 1 .5 1.5.5C4 12.5 5 11 6 10c.5 2.5 2 4.5 4 5 .5 1 1 2.5 1 3.5v3.5h3v-2.5c1-1.5 1.5-3 1.5-4.5.5.5 1.5 1 2.5.5s1.5-2 1-3.5c1.5-1.5 2.5-3.5 2.5-6s-2.5-4.5-5.5-4.5z" />
        </svg>
      );
    case 'mysql':
      return (
        <svg viewBox="0 0 24 24" className={`${className} fill-none stroke-[#00758F]`} strokeWidth="2">
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
          <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
        </svg>
      );
    case 'firebase':
      return (
        <svg viewBox="0 0 24 24" className={`${className} fill-[#FFCA28]`}>
          <path d="M3.9 18.2L11 3.1c.2-.5.9-.5 1.1 0l2 4.2L3.9 18.2zM20.1 18.2L13 3.1c-.2-.5-.9-.5-1.1 0L10.3 6.4l9.8 11.8zM4.7 19.3l7.3-8.8 3.3 6.9-10.6 1.9z" />
        </svg>
      );
    case 'aws deployment':
    case 'aws':
      return (
        <svg viewBox="0 0 24 24" className={`${className} fill-[#FF9900]`}>
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.8 14.2c-1.3 0-2.4-1.1-2.4-2.4s1.1-2.4 2.4-2.4 2.4 1.1 2.4 2.4-1.1 2.4-2.4 2.4zm5.6 0c-1.3 0-2.4-1.1-2.4-2.4s1.1-2.4 2.4-2.4 2.4 1.1 2.4 2.4-1.1 2.4-2.4 2.4z"/>
        </svg>
      );
    case 'docker':
      return (
        <svg viewBox="0 0 24 24" className={`${className} fill-[#2496ED]`}>
          <path d="M13.98 8H10.5V5.5h3.48V8zm-4.48 0H6.02V5.5H9.5V8zm-4.48 0H1.52V5.5H5.02V8zm12.96 0h-3.48V5.5h3.48V8zm2.5 1.5H1.5v3h18.96v-3zM21.5 14H1.5c0 3.31 2.69 6 6 6h11c1.66 0 3-1.34 3-3v-3z" />
        </svg>
      );
    case 'kubernetes':
      return (
        <svg viewBox="0 0 24 24" className={`${className} fill-[#326CE5]`}>
          <path d="M12.07 0L1.75 3.75l1.62 14.28 10.32 5.97 10.32-5.97 1.62-14.28L12.07 0zm0 3.23l7.98 2.9v10.23l-7.98 4.62-7.98-4.62V6.13l7.98-2.9z" />
        </svg>
      );
    case 'jenkins':
      return (
        <svg viewBox="0 0 24 24" className={`${className} fill-none stroke-[#D24939]`} strokeWidth="2">
          <circle cx="12" cy="7" r="4" />
          <path d="M5.5 21a8.5 8.5 0 0113 0" />
          <path d="M12 11v7M10 14h4" />
        </svg>
      );
    case 'ci/cd':
      return (
        <svg viewBox="0 0 24 24" className={`${className} fill-none stroke-[#00A86B]`} strokeWidth="2">
          <path d="M12 12c-2-3-4.5-5-7.5-5s-3 3.5 0 5 7.5 5 7.5 5 4.5 5 7.5 5 3-3.5 0-5-7.5-5-7.5-5z" />
        </svg>
      );
    case 'git / github':
    case 'git':
    case 'github':
      return (
        <svg viewBox="0 0 24 24" className={`${className} fill-none stroke-[#F05032]`} strokeWidth="2">
          <circle cx="18" cy="18" r="3" />
          <circle cx="6" cy="6" r="3" />
          <circle cx="6" cy="18" r="3" />
          <path d="M6 9v6M9 9a9 9 0 009 9" />
        </svg>
      );
    case 'vercel / netlify':
    case 'vercel':
    case 'netlify':
      return (
        <svg viewBox="0 0 24 24" className={`${className} fill-white`}>
          <path d="M12 2L2 22h20L12 2z" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" className={`${className} fill-none stroke-white`} strokeWidth="2">
          <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
        </svg>
      );
  }
};
