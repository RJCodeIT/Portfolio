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
    link: "http://57.128.159.250/sneakerFinder/",
  },
  {
    id: 2,
    key: "myParish",
    img: "/metalMaster.svg",
    iconLists: ["/nextjs.svg", "/typescript.svg", "/tailwind.svg", "/vercel.svg", "/microsoftSqlServer.svg"], 
    link: "http://57.128.159.250/metalMaster/",
  },
  {
    id: 3,
    key: "pawnshop",
    img: "/pawnshop.svg",
    iconLists: ["/react.svg", "/tailwind.svg", "/typescript.svg", "/vite.svg", "/microsoftSqlServer.svg"],
    link: "http://57.128.159.250/pawnshop/",
  },
  {
    id: 4,
    key: "alpacarnia",
    img: "/alpacarnia.svg",
    iconLists: ["/react.svg", "/tailwind.svg", "/typescript.svg", "/vite.svg", "/mongodb.svg"],
    link: "http://57.128.159.250/alpacarnia/",
  },
];
