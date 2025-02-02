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
    key: "sneakerFinder",
    img: "/sneakerfinder.svg",
    iconLists: ["/react.svg", "/tailwind.svg", "/typescript.svg", "/vite.svg", "/mongodb.svg"],
    link: "https://github.com/RJCodeIT/Sneaker_Finder",
  },
  {
    id: 2,
    key: "myParish",
    img: "/pawnshop.svg",
    iconLists: ["/nextjs.svg", "/typescript.svg", "/tailwind.svg", "/vercel.svg", "/microsoftSqlServer.svg"], 
    link: "https://github.com/RJCodeIT/My_Parish",
  },
  {
    id: 3,
    key: "pawnshop",
    img: "/pawnshop.svg",
    iconLists: ["/react.svg", "/tailwind.svg", "/typescript.svg", "/vite.svg", "/microsoftSqlServer.svg"],
    link: "https://github.com/RJCodeIT/Pawnshop",
  },
  {
    id: 4,
    key: "alpacarnia",
    img: "/alpacarnia.svg",
    iconLists: ["/react.svg", "/tailwind.svg", "/typescript.svg", "/vite.svg", "/mongodb.svg"],
    link: "https://github.com/RJCodeIT/Alpacarnia",
  },
];
