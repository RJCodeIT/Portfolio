import HeroContainer from "@/containers/HeroContainer";
import AboutContainer from "@/containers/AboutContainer";
import ProjectsContainer from "@/containers/ProjectsContainer";
import ServicesContainer from "@/containers/ServicesContainer";
import TestimonialsContainer from "@/containers/TestimonialsContainer";
import HowWeWorkContainer from "@/containers/HowWeWorkContainer";
import ContactContainer from "@/containers/ContactContainer";
import FAQContainer from "@/containers/FAQContainer";

export default function Home() {
  return (
    <div>
      <HeroContainer />
      <AboutContainer />
      <ProjectsContainer />
      <ServicesContainer />
      <TestimonialsContainer />
      <HowWeWorkContainer /> 
      <ContactContainer />
      <FAQContainer />
    </div>
  );
}
