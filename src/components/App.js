import React from "react";
import SideMenu from "./SideMenu";
import MainContent from "./MainContent";

function App() {
  return (
    <div className="app-container">
      <MainContent />
      <SideMenu />
    </div>
  );
}

export default App;