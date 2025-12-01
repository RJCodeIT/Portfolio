export interface Project {
  id: number;
  key: string;
  img: string;
  iconLists: string[];
  link: string;
}

export const projects: Project[] = [
  {
    id: 1,
    key: "workido",
    img: "/workido.webp",
    iconLists: ["/react.svg", "/tailwind.svg", "/typescript.svg", "/vite.svg", "/mongodb.svg"],
    link: "https://workido.pl/",
  },
  {
    id: 2,
    key: "budgenix",
    img: "/budgenix.webp",
    iconLists: ["/nextjs.svg", "/typescript.svg", "/tailwind.svg", "/vercel.svg", "/microsoftSqlServer.svg"],
    link: "https://rjcode-portfolio.pl/budgenix",
  },
  {
    id: 3,
    key: "myParish",
    img: "/my-parish.webp",
    iconLists: ["/nextjs.svg", "/typescript.svg", "/tailwind.svg", "/vercel.svg", "/microsoftSqlServer.svg"], 
    link: "https://rjcode-portfolio.pl/mojaParafia",
  },
    {
    id: 4,
    key: "usedcars",
    img: "/used-cars.webp",
    iconLists: ["/react.svg", "/tailwind.svg", "/typescript.svg", "/vite.svg", "/mongodb.svg"],
    link: "https://rjcode-portfolio.pl/usedcars",
  },
  {
    id: 5,
    key: "pawnshop",
    img: "/pawnshop.webp",
    iconLists: ["/react.svg", "/tailwind.svg", "/typescript.svg", "/vite.svg", "/microsoftSqlServer.svg"],
    link: "https://rjcode-portfolio.pl/pawnshop",
  },
];
