import { useEffect, useState } from "react";
import { Outlet, ScrollRestoration, useLocation } from "react-router-dom";
import "./index.css";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import { useDispatch } from "react-redux";
import { setHeroSection , setWelcomeBanner , setOurStory} from "./App/features/homeSlice.js";
import useFetch from "./Hooks/useFetch.js";

function App() {
  const [path, setPath] = useState("");
  const location = useLocation();
  const dispatch = useDispatch();

  const homePageData = useFetch(
    'http://localhost:1337/api/pages?populate[dynamic_zone][populate]=*'
  );
  
  
  useEffect(() => {
    const segments = location.pathname.split("/").filter(Boolean);
    const lastSegment = segments[segments.length - 1]?.toLowerCase() || "";
    setPath(lastSegment);

  }, [location]);

  useEffect(() => {
  if (homePageData.loading === false ) {
    const homePage = homePageData?.data?.data[0];

    const heroSection = homePage?.dynamic_zone.find(
      (item) => item.__component === "dynamic-zone.hero-section"
    );
    const welcomeBanner = homePage?.dynamic_zone.find(
      (item) => item.__component === "dynamic-zone.welcome-banner"
    );

    const ourStory = homePage?.dynamic_zone.find(
      (item) => item.__component === "dynamic-zone.drs4you-story"
    );
    

    if (heroSection) dispatch(setHeroSection(heroSection));
    if (welcomeBanner) dispatch(setWelcomeBanner(welcomeBanner));
    if (ourStory) dispatch(setOurStory(ourStory));
  }
}, [homePageData.loading, homePageData?.data]);



  return (
    <>
      <div
        className={`${
          path === "specialists" ? "bg-Primary-Blue-50" : "bg-custom-gradient"
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
