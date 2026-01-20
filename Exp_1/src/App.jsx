import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  const [page, setPage] = useState("home");

  const renderPage = () => {
    if (page === "home") return <Home />;
    if (page === "about") return <About />;
    if (page === "contact") return <Contact />;
  };

  return (
    <>
      <Navbar currentPage={page} setPage={setPage} />
      <div style={{ padding: "30px" }}>
        {renderPage()}
      </div>
    </>
  );
}

export default App;
