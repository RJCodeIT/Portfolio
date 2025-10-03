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
    link: "https://rjcode-portfolio.pl/sneakerFinder",
  },
  {
    id: 2,
    key: "myParish",
    img: "/metalMaster.svg",
    iconLists: ["/nextjs.svg", "/typescript.svg", "/tailwind.svg", "/vercel.svg", "/microsoftSqlServer.svg"], 
    link: "https://rjcode-portfolio.pl/metalMaster",
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
