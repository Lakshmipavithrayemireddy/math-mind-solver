import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Camera, 
  MessageSquare, 
  TrendingUp, 
  Zap, 
  Brain, 
  Calculator,
  BookOpen,
  Users,
  Target
} from "lucide-react";

const features = [
  {
    icon: Camera,
    title: "Formula Recognition",
    description: "Scan handwritten or printed equations with your camera and get instant recognition and solutions.",
    benefits: ["99% accuracy", "Real-time processing", "Multiple formats"],
    color: "text-primary",
    bgColor: "bg-primary/10"
  },
  {
    icon: MessageSquare,
    title: "Natural Language Processing",
    description: "Convert word problems into mathematical expressions using advanced AI language understanding.",
    benefits: ["Plain English input", "Context awareness", "Multiple languages"],
    color: "text-accent",
    bgColor: "bg-accent/10"
  },
  {
    icon: Brain,
    title: "AI Step-by-Step Solutions",
    description: "Get detailed explanations for every step of the solution process with AI-powered guidance.",
    benefits: ["Clear explanations", "Visual aids", "Learning focused"],
    color: "text-formula",
    bgColor: "bg-formula/10"
  },
  {
    icon: TrendingUp,
    title: "Adaptive Learning",
    description: "Personalized difficulty progression that adapts to your learning pace and style.",
    benefits: ["Progress tracking", "Smart recommendations", "Skill assessment"],
    color: "text-success",
    bgColor: "bg-success/10"
  },
  {
    icon: Calculator,
    title: "Advanced Calculator",
    description: "Powerful calculator with integrated formula library and visualization capabilities.",
    benefits: ["Scientific functions", "Graph plotting", "Unit conversion"],
    color: "text-primary",
    bgColor: "bg-primary/10"
  },
  {
    icon: BookOpen,
    title: "Comprehensive Library",
    description: "Access thousands of formulas across mathematics, physics, chemistry, and engineering.",
    benefits: ["Organized by topic", "Search & filter", "Favorites system"],
    color: "text-accent",
    bgColor: "bg-accent/10"
  }
];

const stats = [
  { icon: Users, value: "50K+", label: "Active Students" },
  { icon: BookOpen, value: "10K+", label: "Formulas" },
  { icon: Target, value: "95%", label: "Accuracy Rate" },
  { icon: Zap, value: "2.5M+", label: "Problems Solved" }
];

export function FeatureShowcase() {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <stat.icon className="w-8 h-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Features Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-4 py-2 mb-4">
            <Zap className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">Powered by AI</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Revolutionary <span className="text-primary">Features</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the future of mathematical learning with our cutting-edge AI-powered tools and features.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20">
              <CardHeader className="pb-4">
                <div className={`w-12 h-12 rounded-lg ${feature.bgColor} flex items-center justify-center mb-4`}>
                  <feature.icon className={`w-6 h-6 ${feature.color}`} />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {feature.title}
                </CardTitle>
                <CardDescription className="text-base">
                  {feature.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-2 mb-4">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span className="text-sm text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
                <Button variant="outline" size="sm" className="w-full group-hover:border-primary/50">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-primary/5 via-accent/5 to-formula/5 rounded-2xl p-12 border border-primary/10">
          <h3 className="text-3xl font-bold text-foreground mb-4">
            Ready to Transform Your Math Learning?
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of students already using MathMind Solver to excel in mathematics.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="text-lg px-8 py-4">
              Start Free Trial
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4">
              Watch Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}