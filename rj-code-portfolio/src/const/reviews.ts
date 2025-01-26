export interface Review {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
}

export const reviews: Review[] = [
  {
    id: 1,
    name: "John Doe",
    role: "Software Engineer",
    content: "Exceptional work! The attention to detail and technical expertise demonstrated in this portfolio is outstanding.",
    rating: 5
  },
  {
    id: 2,
    name: "Sarah Smith",
    role: "UX Designer",
    content: "The UI/UX design is both beautiful and functional. Really impressed with the smooth animations and responsiveness.",
    rating: 5
  },
  {
    id: 3,
    name: "Mike Johnson",
    role: "Project Manager",
    content: "Great project organization and clean code structure. Shows strong understanding of modern development practices.",
    rating: 5
  },
  {
    id: 4,
    name: "Emily Brown",
    role: "Frontend Developer",
    content: "The animations and interactive elements are incredibly well-implemented. Very polished work!",
    rating: 5
  }
];
