import React from 'react';
import { SkillsSection } from '../sections/Skills';
import Presentation from '../sections/Presentation';
import PortfolioGrid from '../sections/Projects';
import { DATA2 } from '../entities/lib/projects';
import HeroSlider from '../components/HeroSlider';
import ProcessSlider from "../components/ProcessSlider";

const HomePage: React.FC = () => {
  return (
    <main className="min-h-screen bg-gray-50 w-full overflow-x-hidden">
      
      <div className="w-full">
        <section id="hero" className="w-full">
          <HeroSlider />
        </section>

        <section id="about" className="scroll-mt-24 md:scroll-mt-28 w-full">
          <Presentation />
        </section>

        <section id="skills" className="w-full">
          <ProcessSlider />
        </section>

        <section id="projects" className="scroll-mt-24 md:scroll-mt-28 w-full">
          <PortfolioGrid items={DATA2} />
        </section>
      </div>
    </main>
  );
};

export default HomePage;