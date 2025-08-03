import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Calculator, Brain } from "lucide-react";
import heroImage from "@/assets/hero-math-ai.jpg";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Mathematical formulas and AI visualization" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-accent/80" />
      </div>

      {/* Floating mathematical symbols */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 text-6xl text-primary-foreground/20 font-bold animate-pulse">∑</div>
        <div className="absolute top-1/3 right-1/4 text-4xl text-primary-foreground/20 font-bold animate-bounce delay-300">∫</div>
        <div className="absolute bottom-1/3 left-1/3 text-5xl text-primary-foreground/20 font-bold animate-pulse delay-700">π</div>
        <div className="absolute bottom-1/4 right-1/3 text-3xl text-primary-foreground/20 font-bold animate-bounce delay-1000">√</div>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="mb-6 inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full px-4 py-2 border border-primary-foreground/20">
          <Sparkles className="w-4 h-4 text-primary-foreground" />
          <span className="text-sm font-medium text-primary-foreground">AI-Powered Mathematical Intelligence</span>
        </div>

        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-primary-foreground mb-6 leading-tight">
          Math<span className="bg-gradient-to-r from-formula to-accent bg-clip-text text-transparent">Mind</span>
          <br />
          <span className="text-5xl md:text-6xl lg:text-7xl">Solver</span>
        </h1>

        <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto leading-relaxed">
          Transform your mathematical journey with AI-powered formula discovery, 
          step-by-step solutions, and personalized learning experiences.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button variant="hero" size="lg" className="text-lg px-8 py-4">
            Start Solving Now
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 py-4 bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20">
            Explore Features
          </Button>
        </div>

        {/* Feature highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 border border-primary-foreground/20">
            <Calculator className="w-8 h-8 text-formula mb-3 mx-auto" />
            <h3 className="text-lg font-semibold text-primary-foreground mb-2">Smart Calculator</h3>
            <p className="text-primary-foreground/80 text-sm">Advanced calculations with intelligent formula suggestions</p>
          </div>
          <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 border border-primary-foreground/20">
            <Brain className="w-8 h-8 text-accent mb-3 mx-auto" />
            <h3 className="text-lg font-semibold text-primary-foreground mb-2">AI Solutions</h3>
            <p className="text-primary-foreground/80 text-sm">Step-by-step problem solving with AI guidance</p>
          </div>
          <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 border border-primary-foreground/20">
            <Sparkles className="w-8 h-8 text-success mb-3 mx-auto" />
            <h3 className="text-lg font-semibold text-primary-foreground mb-2">Learn & Grow</h3>
            <p className="text-primary-foreground/80 text-sm">Personalized learning paths for every skill level</p>
          </div>
        </div>
      </div>
    </section>
  );
}