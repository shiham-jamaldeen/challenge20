import React, { useState } from "react";

import Footer from "./components/Footer.js";
import Navigation from "./components/Navigation.js";

import About from "./components/pages/About.js";
import Portfolio from "./components/pages/Portfolio.js";
import Resume from "./components/pages/Resume.js";
import Contact from "./components/pages/Contact.js";

import "./index.css";
import "./reset.css";

export default function App() {
  const [currentPage, setCurrentPage] = useState("About");

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
    if (currentPage === "Contact") {
      return <Contact />;
    }
    return <Resume />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      <Navigation
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
      <Footer />
    </div>
  );
}
