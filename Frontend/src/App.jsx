import { useEffect, useState } from "react";
import { Outlet, ScrollRestoration, useLocation } from "react-router-dom";
import "./index.css";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  const [path, setPath] = useState("");
  const location = useLocation();

  useEffect(() => {
    const segments = location.pathname.split("/").filter(Boolean);
    const lastSegment = segments[segments.length - 1]?.toLowerCase() || "";
    setPath(lastSegment);
  }, [location]);

  return (
    <>
      <div
        className={`${
          path === "specialist" ? "bg-Primary-Blue-50" : "bg-custom-gradient"
        } h-[500px]`}
      >
        <Header />
        <Outlet />
        <Footer />
      </div>
      <ScrollRestoration />
    </>
  );
}

export default App;
