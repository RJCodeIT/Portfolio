export interface TechItem {
  key: string;
  icon: string;
  className: string;
}

export const technologies: TechItem[] = [
  { 
    key: 'react',
    icon: '/react.svg',
    className: 'text-[#61DAFB]'
  },
  { 
    key: 'reactNative',
    icon: '/react-native.svg',
    className: 'text-white'
  },
  { 
    key: 'nextjs',
    icon: '/nextjs.svg',
    className: 'text-black'
  },
  { 
    key: 'javascript',
    icon: '/javascript.svg',
    className: 'text-[#F7DF1E]'
  },
  { 
    key: 'typescript',
    icon: '/typescript.svg',
    className: 'text-[#3178C6]'
  },
  { 
    key: 'nodejs',
    icon: '/nodejs.svg',
    className: 'text-[#339933]'
  },
  { 
    key: 'express',
    icon: '/express.svg',
    className: 'text-white'
  },
  { 
    key: 'mongodb',
    icon: '/mongodb.svg',
    className: 'text-[#47A248]'
  },
  { 
    key: 'mssql',
    icon: '/microsoftSqlServer.svg',
    className: 'text-[#CC2927]'
  }
];