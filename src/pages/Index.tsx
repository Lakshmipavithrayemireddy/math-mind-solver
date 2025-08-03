import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { FeatureShowcase } from "@/components/FeatureShowcase";
import { FormulaLibrary } from "@/components/FormulaLibrary";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <FeatureShowcase />
      <FormulaLibrary />
    </div>
  );
};

export default Index;
