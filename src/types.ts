export interface NavItem {
  name: string;
  href: string;
  id: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  duration: string;
  status: string;
  description: string;
  highlights: string[];
  iconType: 'university' | 'school';
  badge: string;
}

export interface SkillItem {
  name: string;
  category: 'programming' | 'web' | 'fundamentals';
  level: number; // 1-100
  levelLabel: string;
  iconName: string;
  description: string;
  topics: string[];
  sampleCode?: {
    language: string;
    code: string;
    explanation: string;
  };
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  longDescription: string;
  tags: string[];
  isLearningProject: boolean;
  features: string[];
  demoType: 'calculator' | 'student-portal' | 'portfolio' | 'html-showcase';
  githubLink?: string;
  demoLink?: string;
  previewColor: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
