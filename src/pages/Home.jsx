import { useState } from "react";
import Hero from "../components/sections/Hero";
import ProblemExplorer from "../components/sections/ProblemExplorer";
import Services from "../components/sections/Services";
import QueryForm from "../components/sections/QueryForm";
import Tracker from "../components/sections/Tracker";
import WhyUs from "../components/sections/WhyUs";
import SocialProof from "../components/sections/SocialProof";
import FinalCTA from "../components/sections/FinalCTA";

export default function Home() {
  const [selectedIssue, setSelectedIssue] = useState("");

  const chooseIssue = (issue) => {
    setSelectedIssue(issue);
    document.getElementById("query")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Hero />
      <ProblemExplorer onIssue={chooseIssue} />
      <Services />
      <QueryForm selectedIssue={selectedIssue} />
      <Tracker />
      <WhyUs />
      <SocialProof />
      <FinalCTA />
    </>
  );
}
