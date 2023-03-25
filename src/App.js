import React from "react";
import PortfolioContainer from "./components/PortfolioContainer";
import Header from "./components/Header";
import Footer from "./components/Footer";

// const App = () => <PortfolioContainer />;

function App() {
  return (
    <div>
      <Header />
      
      <PortfolioContainer />
      <Footer />
    </div>
  );
}

export default App;
