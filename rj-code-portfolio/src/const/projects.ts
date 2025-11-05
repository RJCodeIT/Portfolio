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
    img: "/workido.png",
    iconLists: ["/react.svg", "/tailwind.svg", "/typescript.svg", "/vite.svg", "/mongodb.svg"],
    link: "https://workido.pl/",
  },
  {
    id: 2,
    key: "myParish",
    img: "/my-parish.png",
    iconLists: ["/nextjs.svg", "/typescript.svg", "/tailwind.svg", "/vercel.svg", "/microsoftSqlServer.svg"], 
    link: "https://rjcode-portfolio.pl/mojaParafia",
  },
  {
    id: 3,
    key: "pawnshop",
    img: "/pawnshop.svg",
    iconLists: ["/react.svg", "/tailwind.svg", "/typescript.svg", "/vite.svg", "/microsoftSqlServer.svg"],
    link: "https://rjcode-portfolio.pl/pawnshop",
  },
  {
    id: 4,
    key: "alpacarnia",
    img: "/alpacarnia.svg",
    iconLists: ["/react.svg", "/tailwind.svg", "/typescript.svg", "/vite.svg", "/mongodb.svg"],
    link: "https://rjcode-portfolio.pl/alpacarnia",
  },
];
