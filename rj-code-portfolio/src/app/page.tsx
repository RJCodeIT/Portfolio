import HeroContainer from "@/containers/HeroContainer";
import AboutContainer from "@/containers/AboutContainer";
import ProjectsContainer from "@/containers/ProjectsContainer";
import ServicesContainer from "@/containers/ServicesContainer";
import ReviewsContainer from "@/containers/ReviewsContainer";
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
      <ReviewsContainer />
      <HowWeWorkContainer /> 
      <ContactContainer />
      <FAQContainer />
    </div>
  );
}
