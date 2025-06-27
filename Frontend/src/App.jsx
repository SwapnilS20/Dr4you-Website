import { useEffect, useState } from "react";
import { Outlet, ScrollRestoration, useLocation } from "react-router-dom";
import "./index.css";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import { useDispatch } from "react-redux";
import {
  setHeroSection,
  setWelcomeBanner,
  setOurStory,
  setPromiseSection,
  setWhyChooseUs,
} from "./App/features/homeSlice.js";
import useFetch from "./Hooks/useFetch.js";

function App() {
  const [path, setPath] = useState("");
  const location = useLocation();
  const dispatch = useDispatch();

  const homePageData = useFetch(
    "http://localhost:1337/api/pages?populate[0]=dynamic_zone&populate[dynamic_zone][on][dynamic-zone.hero-section][populate][doctor_image]=true&populate[dynamic_zone][on][dynamic-zone.hero-section][populate][CTAs]=true&populate[dynamic_zone][on][dynamic-zone.hero-section][populate][our_stats]=true&populate[dynamic_zone][on][dynamic-zone.welcome-banner][populate][patient_image]=true&populate[dynamic_zone][on][dynamic-zone.drs4you-story][populate][story_image]=true&populate[dynamic_zone][on][dynamic-zone.promise-section][populate][promise_items][populate]=icon&populate[dynamic_zone][on][dynamic-zone.why-choose-us][populate][Why_Choose_Items][populate]=true&populate[dynamic_zone][on][dynamic-zone.why-choose-us][populate][doctor_image][populate]=true"
  );
  console.log("Home Page Data:", homePageData);

  useEffect(() => {
    const segments = location.pathname.split("/").filter(Boolean);
    const lastSegment = segments[segments.length - 1]?.toLowerCase() || "";
    setPath(lastSegment);
  }, [location]);

  useEffect(() => {
    if (homePageData.loading === false) {
      const homePage = homePageData?.data?.data?.[0];

      const heroSection = homePage?.dynamic_zone.find(
        (item) => item.__component === "dynamic-zone.hero-section"
      );
      const welcomeBanner = homePage?.dynamic_zone.find(
        (item) => item.__component === "dynamic-zone.welcome-banner"
      );

      const ourStory = homePage?.dynamic_zone.find(
        (item) => item.__component === "dynamic-zone.drs4you-story"
      );
      const promiseSection = homePage?.dynamic_zone.find(
        (item) => item.__component === "dynamic-zone.promise-section"
      );
      const whyChooseUs = homePage?.dynamic_zone.find(
        (item) => item.__component === "dynamic-zone.why-choose-us"
      );

      if (heroSection) dispatch(setHeroSection(heroSection));
      if (welcomeBanner) dispatch(setWelcomeBanner(welcomeBanner));
      if (ourStory) dispatch(setOurStory(ourStory));
      if (promiseSection) dispatch(setPromiseSection(promiseSection));
      if (whyChooseUs) dispatch(setWhyChooseUs(whyChooseUs));
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
