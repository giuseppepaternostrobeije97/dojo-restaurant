// -- REACT
import { FC } from "react";
// -- COMPONENTS
import { Hero } from "../ui/components/Hero";
// -- SECTIONS
import { AboutSection } from "../ui/section/aboutSection";
import { ChefSection } from "../ui/section/chefSection";

const About: FC = () => {
  return <div>
    <Hero title="About Us" />
    <AboutSection/>
    <ChefSection/>
  </div>;
};

export default About;
