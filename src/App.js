import Logo from "./assets/logo.png";
import { PageIndicator } from "./components";
import { useState } from "react";
import { UserInfo, Workspace, Usage, Congrats } from "./pages";

function App() {
  const [currentPage, setCurrentPage] = useState(0);

  const pages = [
    <UserInfo setCurrentPage={setCurrentPage} />,
    <Workspace setCurrentPage={setCurrentPage} />,
    <Usage setCurrentPage={setCurrentPage} />,
    <Congrats setCurrentPage={setCurrentPage} />,
  ];

  return (
    <div className="container mx-auto w-1/2 flex flex-col items-center">
      <div className="flex items-center mt-16">
        <div>
          <img src={Logo} alt="logo" />
        </div>
        <h1 className="text-heading font-bold">Eden</h1>
      </div>
      <PageIndicator
        currentPage={currentPage}
        pages={pages.length}
        otherClasses=""
      />
      {pages[currentPage]}
    </div>
  );
}

export default App;
