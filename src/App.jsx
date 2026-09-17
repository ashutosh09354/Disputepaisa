import { useState } from "react";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import ProblemExplorer from "./components/sections/ProblemExplorer";
import Process from "./components/sections/Process";
import Services from "./components/sections/Services";
import DetailedProcess from "./components/sections/DetailedProcess";
import QueryForm from "./components/sections/QueryForm";
import Tracker from "./components/sections/Tracker";
import WhyUs from "./components/sections/WhyUs";
import SocialProof from "./components/sections/SocialProof";
import FinalCTA from "./components/sections/FinalCTA";

export default function App() {
  const [selectedIssue, setSelectedIssue] = useState("");

  const chooseIssue = (issue) => {
    setSelectedIssue(issue);
    document.getElementById("query")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-white font-sans text-brand-900">
      <Navbar />
      <main className="w-full">
        <Hero />
        <ProblemExplorer onIssue={chooseIssue} />
        <Process />
        <Services />
        <DetailedProcess />
        <QueryForm selectedIssue={selectedIssue} />
        <Tracker />
        <WhyUs />
        <SocialProof />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
