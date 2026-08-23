import { EducationItem, SkillItem, ProjectItem } from '../types';

export const PERSONAL_INFO = {
  name: 'Etisha Hazra',
  title: 'BCA Student & Aspiring Web Developer',
  tagline: 'A BCA Student | Learning Technology | Building My Future',
  currentStatus: '2nd Year Bachelor of Computer Applications (BCA)',
  university: 'Swami Vivekananda University',
  school: "Rajkumari Memorial Girls' High School",
  hsPassingYear: '2025',
  location: 'West Bengal, India',
  email: 'etisha.hazra@example.com', // Placeholder for professional communication
  linkedin: 'https://linkedin.com/in/etishahazra',
  github: 'https://github.com/etishahazra',
  bio: `I am Etisha Hazra, a second-year Bachelor of Computer Applications (BCA) student at Swami Vivekananda University. I completed my Higher Secondary Examination in 2025 from Rajkumari Memorial Girls' High School. I am passionate about learning technology, programming, web development, and improving my technical skills. As a student, I am continuously exploring new technologies and working towards building a successful career in the IT field.`,
  shortBio: `Second-year BCA student at Swami Vivekananda University passionate about programming, responsive web development, and computing fundamentals.`,
  interests: ['Frontend Web Development', 'C Programming & Logic', 'Clean UI/UX Design', 'Database Systems', 'Algorithms & Problem Solving'],
  stats: [
    { label: 'Current Education', value: 'BCA 2nd Year', sub: 'Swami Vivekananda University' },
    { label: 'HS Examination', value: 'Completed 2025', sub: "Rajkumari Memorial Girls' HS" },
    { label: 'Core Skills', value: '6+ Tech Skills', sub: 'C, HTML, CSS, JS & Tools' },
    { label: 'Learning Projects', value: '4+ Projects', sub: 'Web, Apps & Tools' },
  ]
};

export const EDUCATION_LIST: EducationItem[] = [
  {
    id: 'bca',
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'Swami Vivekananda University',
    duration: '2025 - Present (Currently in 2nd Year)',
    status: 'In Progress (2nd Year)',
    badge: 'Undergraduate Degree',
    iconType: 'university',
    description: 'Pursuing a comprehensive curriculum in Computer Applications covering core programming, software fundamentals, database systems, and modern web technologies.',
    highlights: [
      'Core Programming in C and Problem Solving techniques',
      'Web Technologies: HTML5, CSS3, and JavaScript fundamentals',
      'Database Management Systems (DBMS) & Data Structures basics',
      'Computer Architecture, Operating Systems & Digital Electronics'
    ]
  },
  {
    id: 'higher-secondary',
    degree: 'Higher Secondary Education (10+2)',
    institution: "Rajkumari Memorial Girls' High School",
    duration: 'Graduated in 2025',
    status: 'Completed (2025)',
    badge: 'Higher Secondary Schooling',
    iconType: 'school',
    description: 'Successfully completed Higher Secondary Examination with strong academic foundation in analytical thinking, sciences, and mathematics.',
    highlights: [
      'Completed Higher Secondary Examination in the year 2025',
      'Active participation in science seminars and school computing events',
      'Developed keen interest in computer science and programming',
      'Built strong analytical, communicative, and teamwork abilities'
    ]
  }
];

export const SKILLS_LIST: SkillItem[] = [
  {
    name: 'C Programming',
    category: 'programming',
    level: 80,
    levelLabel: 'Intermediate Learner',
    iconName: 'Code2',
    description: 'Strong foundation in structured programming, logic building, memory concepts, and algorithmic solutions.',
    topics: ['Data Types & Operators', 'Control Flow & Loops', 'Functions & Recursion', 'Arrays & Strings', 'Pointers & Memory', 'Structures & File I/O'],
    sampleCode: {
      language: 'c',
      code: `#include <stdio.h>

int main() {
    printf("Hello from Etisha's C Program!\\n");
    int year = 2;
    char major[] = "BCA";
    printf("Enrolled in %s Year %d at SVU.\\n", major, year);
    return 0;
}`,
      explanation: 'Demonstrates basic I/O, variables, arrays, and structured syntax in C.'
    }
  },
  {
    name: 'HTML5',
    category: 'web',
    level: 90,
    levelLabel: 'Proficient',
    iconName: 'FileCode2',
    description: 'Building clean, semantic, and accessible markup structures for web documents and applications.',
    topics: ['Semantic Tags (<header>, <nav>, <main>)', 'Forms & Inputs Validation', 'Tables & Lists', 'Audio & Video Embedding', 'SEO & Accessibility Basics'],
    sampleCode: {
      language: 'html',
      code: `<!DOCTYPE html>
<html lang="en">
<head>
  <title>Etisha Hazra - Portfolio</title>
</head>
<body>
  <header>
    <h1>Welcome to My BCA Journey</h1>
    <p>Exploring Web Technologies</p>
  </header>
</body>
</html>`,
      explanation: 'Clean semantic structure establishing headers, hierarchy, and readable documents.'
    }
  },
  {
    name: 'CSS3',
    category: 'web',
    level: 85,
    levelLabel: 'Proficient',
    iconName: 'Palette',
    description: 'Creating visually stunning, responsive, and mobile-friendly user interfaces with modern styling.',
    topics: ['Flexbox & CSS Grid Layouts', 'Responsive Media Queries', 'CSS Custom Properties (Variables)', 'Transitions & Animations', 'Modern Box Model & Typography'],
    sampleCode: {
      language: 'css',
      code: `.hero-card {
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  background: linear-gradient(135deg, #4f46e5, #7c3aed);
  border-radius: 12px;
  color: #ffffff;
  transition: transform 0.3s ease;
}

.hero-card:hover {
  transform: translateY(-4px);
}`,
      explanation: 'Modern CSS flex layout with gradient accents and smooth hover transitions.'
    }
  },
  {
    name: 'JavaScript',
    category: 'programming',
    level: 75,
    levelLabel: 'Intermediate Learner',
    iconName: 'Zap',
    description: 'Adding interactivity, DOM manipulation, event handling, and logic to web applications.',
    topics: ['Variables (let, const)', 'DOM Selection & Manipulation', 'Event Listeners & Forms', 'Arrays & Object Methods', 'Functions & Arrow Syntax', 'Basic Async/Fetch'],
    sampleCode: {
      language: 'javascript',
      code: `// Interactive Welcome function
function greetStudent(name, university) {
  const message = \`Welcome \${name}, 2nd year student at \${university}!\`;
  console.log(message);
  return message;
}

greetStudent("Etisha Hazra", "Swami Vivekananda University");`,
      explanation: 'ES6 template literals, functions, and standard console output.'
    }
  },
  {
    name: 'Web Development',
    category: 'web',
    level: 82,
    levelLabel: 'Active Builder',
    iconName: 'Globe',
    description: 'Integrating frontend technologies to build cohesive, user-friendly, responsive websites.',
    topics: ['Responsive Web Design (Mobile-First)', 'UI/UX Principles', 'Cross-browser Compatibility', 'Component Structure', 'Web Page Performance'],
    sampleCode: {
      language: 'javascript',
      code: `// Responsive navigation toggle handler
const navToggle = document.querySelector('#menu-btn');
const mobileMenu = document.querySelector('#mobile-menu');

navToggle.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});`,
      explanation: 'Standard interactive responsive hamburger navigation handler.'
    }
  },
  {
    name: 'Basic Computer Skills & Tools',
    category: 'fundamentals',
    level: 88,
    levelLabel: 'Proficient',
    iconName: 'Terminal',
    description: 'Command of essential computing tools, text editors, OS basics, and academic software.',
    topics: ['VS Code & Code Editors', 'Git & GitHub Basics', 'Operating Systems (Windows & Linux)', 'MS Office / Google Docs Suite', 'Database & SQL Fundamentals'],
    sampleCode: {
      language: 'bash',
      code: `# Basic Git Workflow for Projects
git init
git add .
git commit -m "Initial commit for BCA portfolio project"
git branch -M main
git push -u origin main`,
      explanation: 'Standard version control commands for saving and tracking code.'
    }
  }
];

export const PROJECTS_LIST: ProjectItem[] = [
  {
    id: 'personal-portfolio',
    title: 'Personal Portfolio Website',
    subtitle: 'Modern Student Portfolio & Interactive Showcase',
    category: 'Web Development',
    isLearningProject: true,
    previewColor: 'from-blue-600 to-indigo-600',
    description: 'A modern, responsive personal portfolio showcasing academic milestones, technical skills, and beginner learning projects.',
    longDescription: 'Created as a central hub to present academic journey at Swami Vivekananda University and Rajkumari Memorial Girls High School. Features smooth scrolling, responsive layout, interactive project demos, skill snippet inspector, and a clean contact form.',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
    features: [
      'Single-page smooth scrolling navigation',
      'Dark and light mode support with aesthetic color palette',
      'Interactive skill explorer and project previews',
      'Fully responsive for smartphones, tablets, and desktops'
    ],
    demoType: 'portfolio',
    githubLink: 'https://github.com/etishahazra/personal-portfolio',
    demoLink: '#'
  },
  {
    id: 'student-portal',
    title: 'Student Information Website',
    subtitle: 'Academic Records & Subject Directory',
    category: 'Web Application',
    isLearningProject: true,
    previewColor: 'from-indigo-600 to-purple-600',
    description: 'A student information portal to view course details, semester subjects, attendance tracking, and academic schedules.',
    longDescription: 'A practical student utility website designed to display enrolled subjects, semester credits, professor office hours, and attendance calculators for BCA undergraduates.',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'DOM Manipulation'],
    features: [
      'Semester subject cards with credit values and syllabus highlights',
      'Interactive attendance percentage calculator',
      'Filterable course schedule by day and semester',
      'Student profile overview and academic status display'
    ],
    demoType: 'student-portal',
    githubLink: 'https://github.com/etishahazra/student-info-portal',
    demoLink: '#'
  },
  {
    id: 'simple-calculator',
    title: 'Simple Calculator',
    subtitle: 'Interactive Arithmetic Calculation Tool',
    category: 'JavaScript Project',
    isLearningProject: true,
    previewColor: 'from-violet-600 to-fuchsia-600',
    description: 'A clean and functional calculator capable of handling basic arithmetic operations with keyboard & touch support.',
    longDescription: 'Developed to master JavaScript functions, mathematical operator precedence, event listeners, and clean UI styling with CSS Grid.',
    tags: ['JavaScript', 'CSS Grid', 'Event Handling', 'Logic'],
    features: [
      'Basic arithmetic: Addition, Subtraction, Multiplication, Division',
      'Decimal point calculation and percentage operations',
      'Clear (C) and backspace delete (DEL) features',
      'Interactive live calculator demo right in the modal'
    ],
    demoType: 'calculator',
    githubLink: 'https://github.com/etishahazra/simple-calculator',
    demoLink: '#'
  },
  {
    id: 'html-css-showcase',
    title: 'Basic HTML & CSS Website',
    subtitle: 'Responsive Multi-Section Layout Showcase',
    category: 'Web Design',
    isLearningProject: true,
    previewColor: 'from-blue-600 to-cyan-600',
    description: 'A multi-component web layout demonstrating clean semantic markup, CSS Flexbox grids, and modern UI cards.',
    longDescription: 'Created as a fundamental project to practice semantic HTML5 structures, typography hierarchies, custom CSS variables, and fluid responsive containers.',
    tags: ['HTML5', 'CSS3', 'Flexbox', 'Web Layouts'],
    features: [
      'Pure CSS layout with responsive flexbox and grid',
      'Custom card UI with image banners and button states',
      'Mobile-first design principles with media query breakpoints',
      'Clean readable typography and high color contrast'
    ],
    demoType: 'html-showcase',
    githubLink: 'https://github.com/etishahazra/html-css-showcase',
    demoLink: '#'
  }
];

export const NAV_LINKS = [
  { name: 'Home', href: '#home', id: 'home' },
  { name: 'About', href: '#about', id: 'about' },
  { name: 'Education', href: '#education', id: 'education' },
  { name: 'Skills', href: '#skills', id: 'skills' },
  { name: 'Projects', href: '#projects', id: 'projects' },
  { name: 'Contact', href: '#contact', id: 'contact' },
];
