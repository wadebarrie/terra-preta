import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { ThemeProvider } from "./contexts/ThemeContext";
import { StructuredData, organizationSchema, localBusinessSchema } from "./components/StructuredData";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import TerraRevive from "./pages/product/TerraRevive";
import ReclamationSites from "./pages/solutions/ReclamationSites";
import HydroseedingPartners from "./pages/solutions/HydroseedingPartners";
import MiningIndustrial from "./pages/solutions/MiningIndustrial";
import PelletSelector from "./pages/calculator/PelletSelector";
import CostPayback from "./pages/calculator/CostPayback";
import EvidenceLibrary from "./pages/evidence/EvidenceLibrary";
import CaseStudies from "./pages/evidence/CaseStudies";
import MethodStatements from "./pages/evidence/MethodStatements";
import SdsTds from "./pages/evidence/SdsTds";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      
      {/* Solutions */}
      <Route path="/solutions/reclamation" component={ReclamationSites} />
      <Route path="/solutions/hydroseeding" component={HydroseedingPartners} />
      <Route path="/solutions/mining" component={MiningIndustrial} />
      
      {/* Product */}
      <Route path="/product/terra-revive" component={TerraRevive} />
      
      {/* Calculator Hub */}
      <Route path="/calculator/pellet-selector" component={PelletSelector} />
      <Route path="/calculator/cost-payback" component={CostPayback} />
      
      {/* Evidence Library */}
      <Route path="/evidence" component={EvidenceLibrary} />
      <Route path="/evidence/case-studies" component={CaseStudies} />
      <Route path="/evidence/method-statements" component={MethodStatements} />
      <Route path="/evidence/sds-tds" component={SdsTds} />
      
      {/* About & Contact */}
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          {/* Global Structured Data */}
          <StructuredData data={organizationSchema} />
          <StructuredData data={localBusinessSchema} />
          
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
              <Router />
            </main>
            <Footer />
          </div>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
