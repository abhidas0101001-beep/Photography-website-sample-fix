import React from "react";
import Top_Hero from "./Component/Hero/Sections/Top_Hero";
import Footer from "./Component/3-Footer/Footer";
import SmoothScroll from "./Component/SmoothScroll";
import ContentFlow from "./Component/2.0 - Contents/ContentFlow";

const App = () => {
  return (
    <div>
      {/* <SmoothScroll /> */}
      <Top_Hero />
      <ContentFlow />
      <Footer />
    </div>
  );
};

export default App;
