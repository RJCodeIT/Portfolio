export interface TechItem {
  name: string;
  icon: string;
  className: string;
  description: string;
}

export const technologies: TechItem[] = [
  { 
    name: 'React', 
    icon: '/react.svg',
    className: 'text-[#61DAFB]',
    description: 'A library for building user interfaces'
  },
  { 
    name: 'Next.js', 
    icon: '/nextjs.svg',
    className: 'text-black',
    description: 'The React Framework for Production'
  },
  { 
    name: 'JavaScript', 
    icon: '/javascript.svg',
    className: 'text-[#F7DF1E]',
    description: 'The language of the web'
  },
  { 
    name: 'TypeScript', 
    icon: '/typescript.svg',
    className: 'text-[#3178C6]',
    description: 'Typed JavaScript at Any Scale'
  },
  { 
    name: 'Node.js', 
    icon: '/nodejs.svg',
    className: 'text-[#339933]',
    description: 'JavaScript runtime built on Chrome\'s V8 engine'
  },
  { 
    name: 'Express', 
    icon: '/express.svg',
    className: 'text-black',
    description: 'Fast, unopinionated web framework for Node.js'
  },
  { 
    name: 'MongoDB', 
    icon: '/mongodb.svg',
    className: 'text-[#47A248]',
    description: 'The most popular NoSQL database'
  },
  { 
    name: 'MS SQL Server', 
    icon: '/microsoftSqlServer.svg',
    className: 'text-[#CC2927]',
    description: 'Enterprise-grade relational database management system'
  }
];