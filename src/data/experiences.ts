export interface Experience {
  id: string;
  company: string;
  title: string;
  dates: string;
  whatIDid: string;
  howIDidIt: string[];
  whatIUsed: string[];
  reflection: string;
}

export const experiences: Experience[] = [
  {
    id: '24labs',
    company: '24Labs',
    title: 'Product Engineer',
    dates: 'Jan 2023 - Present',
    whatIDid: 'Building consumer mobile apps and internal analytics tools as a full-stack developer. Creating end-to-end solutions and driving product impact through fast-paced development, deployment, and iteration cycles.',
    howIDidIt: [
      'Developed and shipped mobile features using React Native and TypeScript',
      'Built internal analytics dashboards with real-time data visualization',
      'Implemented CI/CD pipelines to streamline deployment processes',
      'Collaborated with product and design teams to iterate on user experience'
    ],
    whatIUsed: [
      'React Native, TypeScript, Next.js',
      'Python, FastAPI, PostgreSQL',
      'AWS (Lambda, S3, CloudWatch)',
      'Docker, GitHub Actions'
    ],
    reflection: 'This role has taught me the importance of moving fast and iterating based on real user feedback. Building end-to-end solutions has made me a more versatile engineer.'
  },
  {
    id: '9m',
    company: '9m Holdings',
    title: 'Software Engineer',
    dates: 'Jun 2022 - Dec 2022',
    whatIDid: 'Developed and maintained web applications with a focus on performance optimization and user experience. Collaborated with cross-functional teams to deliver high-quality software solutions.',
    howIDidIt: [
      'Optimized frontend performance reducing load times by 40%',
      'Implemented responsive designs across multiple device breakpoints',
      'Refactored legacy codebase to modern React patterns',
      'Conducted code reviews and mentored junior developers'
    ],
    whatIUsed: [
      'React, Redux, JavaScript',
      'Node.js, Express',
      'MongoDB, Redis',
      'Webpack, Babel'
    ],
    reflection: 'Working at a fast-paced startup taught me how to prioritize effectively and deliver features that matter most to users.'
  },
  {
    id: 'avp',
    company: 'AVP Technology',
    title: 'Frontend Developer',
    dates: 'Jan 2021 - May 2022',
    whatIDid: 'Specialized in building responsive and accessible user interfaces. Implemented modern frontend architectures and improved development workflows for the team.',
    howIDidIt: [
      'Built reusable component library with Storybook documentation',
      'Implemented accessibility features following WCAG 2.1 guidelines',
      'Set up automated testing with Jest and React Testing Library',
      'Improved developer experience with TypeScript migration'
    ],
    whatIUsed: [
      'React, TypeScript, Styled Components',
      'Jest, React Testing Library',
      'Storybook, Figma',
      'Git, Jira'
    ],
    reflection: 'This experience solidified my passion for creating beautiful, accessible user interfaces and the importance of developer tooling.'
  }
];

