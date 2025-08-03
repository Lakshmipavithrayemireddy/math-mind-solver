import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, BookOpen, Zap, Copy, Heart } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const formulas = [
  {
    id: 1,
    name: "Quadratic Formula",
    formula: "x = (-b ± √(b² - 4ac)) / 2a",
    category: "Algebra",
    description: "Solves quadratic equations of the form ax² + bx + c = 0",
    difficulty: "Intermediate",
    uses: 1247
  },
  {
    id: 2,
    name: "Pythagorean Theorem",
    formula: "a² + b² = c²",
    category: "Geometry",
    description: "Relates the sides of a right triangle",
    difficulty: "Basic",
    uses: 2156
  },
  {
    id: 3,
    name: "Area of Circle",
    formula: "A = πr²",
    category: "Geometry",
    description: "Calculates the area of a circle given its radius",
    difficulty: "Basic",
    uses: 1893
  },
  {
    id: 4,
    name: "Derivative Power Rule",
    formula: "d/dx(xⁿ) = nxⁿ⁻¹",
    category: "Calculus",
    description: "Fundamental rule for differentiating polynomial functions",
    difficulty: "Advanced",
    uses: 987
  },
  {
    id: 5,
    name: "Binomial Theorem",
    formula: "(a + b)ⁿ = Σ(nCk)(aⁿ⁻ᵏ)(bᵏ)",
    category: "Algebra",
    description: "Expands binomial expressions raised to any power",
    difficulty: "Advanced",
    uses: 654
  },
  {
    id: 6,
    name: "Standard Deviation",
    formula: "σ = √(Σ(xi - μ)² / N)",
    category: "Statistics",
    description: "Measures the spread of data points from the mean",
    difficulty: "Intermediate",
    uses: 1342
  }
];

const categories = ["All", "Algebra", "Geometry", "Calculus", "Statistics"];
const difficulties = ["All", "Basic", "Intermediate", "Advanced"];

export function FormulaLibrary() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedDifficulty, setSelectedDifficulty] = useState("All");
  const { toast } = useToast();

  const filteredFormulas = formulas.filter(formula => {
    const matchesSearch = formula.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         formula.formula.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || formula.category === selectedCategory;
    const matchesDifficulty = selectedDifficulty === "All" || formula.difficulty === selectedDifficulty;
    return matchesSearch && matchesCategory && matchesDifficulty;
  });

  const copyFormula = (formula: string, name: string) => {
    navigator.clipboard.writeText(formula);
    toast({
      title: "Formula copied!",
      description: `${name} has been copied to your clipboard.`,
      duration: 2000,
    });
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Basic": return "bg-success/10 text-success border-success/20";
      case "Intermediate": return "bg-formula/10 text-formula-foreground border-formula/20";
      case "Advanced": return "bg-accent/10 text-accent-foreground border-accent/20";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
            <BookOpen className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Formula Library</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Discover Mathematical <span className="text-primary">Formulas</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our comprehensive collection of mathematical formulas with AI-powered explanations and examples.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Search formulas..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 h-12 text-base"
            />
          </div>
          
          <div className="flex flex-wrap justify-center gap-2">
            <div className="flex gap-1">
              {categories.map(category => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="text-xs"
                >
                  {category}
                </Button>
              ))}
            </div>
            <div className="flex gap-1">
              {difficulties.map(difficulty => (
                <Button
                  key={difficulty}
                  variant={selectedDifficulty === difficulty ? "math" : "outline"}
                  size="sm"
                  onClick={() => setSelectedDifficulty(difficulty)}
                  className="text-xs"
                >
                  {difficulty}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Formula Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFormulas.map(formula => (
            <Card key={formula.id} className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20">
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start">
                  <Badge variant="outline" className="mb-2">{formula.category}</Badge>
                  <Badge className={getDifficultyColor(formula.difficulty)}>
                    {formula.difficulty}
                  </Badge>
                </div>
                <CardTitle className="text-lg group-hover:text-primary transition-colors">
                  {formula.name}
                </CardTitle>
                <CardDescription>{formula.description}</CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="bg-muted/50 rounded-lg p-4 border">
                  <div className="font-mono text-lg text-center break-all">
                    {formula.formula}
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Heart className="w-4 h-4" />
                    <span>{formula.uses.toLocaleString()} uses</span>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => copyFormula(formula.formula, formula.name)}
                      className="gap-1"
                    >
                      <Copy className="w-3 h-3" />
                      Copy
                    </Button>
                    <Button variant="ai" size="sm" className="gap-1">
                      <Zap className="w-3 h-3" />
                      Solve
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredFormulas.length === 0 && (
          <div className="text-center py-12">
            <BookOpen className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">No formulas found</h3>
            <p className="text-muted-foreground">Try adjusting your search or filters</p>
          </div>
        )}
      </div>
    </section>
  );
}