// home/page.js

// Import necessary dependencies if needed
import React from "react";

// Define your page component
const Home = ({ children }) => {
  return (
    <div className="bg-black">
      <div>{children}</div>
    </div>
  );
};

// Export the Home component as the default export
export default Home;
