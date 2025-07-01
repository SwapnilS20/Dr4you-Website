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
  setPlatformWork,
} from "./App/features/homeSlice.js";

import {
  setDoctorComponentInfo,
  setDoctorPageInfo,
  setDoctors,
} from "./App/features/doctorsSlice.js";

import { setHeader, setFooter } from "./App/features/headerFooterSlics";
import useFetch from "./Hooks/useFetch.js";

function App() {
  const [path, setPath] = useState("");
  const location = useLocation();
  const dispatch = useDispatch();
  const headerFooterData = useFetch(
    "http://localhost:1337/api/header-and-footer?populate[Header][populate]=*&populate[Footer][populate][logo]=true&populate[Footer][populate][policy_links]=true&populate[Footer][populate][services_links]=true&populate[Footer][populate][support]=true&populate[Footer][populate][social_icons][populate]=link"
  );

  const homePageData = useFetch(
    "http://localhost:1337/api/pages?populate[0]=dynamic_zone&populate[dynamic_zone][on][dynamic-zone.hero-section][populate][doctor_image]=true&populate[dynamic_zone][on][dynamic-zone.hero-section][populate][CTAs]=true&populate[dynamic_zone][on][dynamic-zone.hero-section][populate][our_stats]=true&populate[dynamic_zone][on][dynamic-zone.welcome-banner][populate][patient_image]=true&populate[dynamic_zone][on][dynamic-zone.drs4you-story][populate][story_image]=true&populate[dynamic_zone][on][dynamic-zone.promise-section][populate][promise_items][populate]=icon&populate[dynamic_zone][on][dynamic-zone.why-choose-us][populate][Why_Choose_Items][populate]=true&populate[dynamic_zone][on][dynamic-zone.why-choose-us][populate][doctor_image][populate]=true&populate[dynamic_zone][on][dynamic-zone.platform-working][populate][platform_steps][populate]=true&populate[dynamic_zone][on][dynamic-zone.platform-working][populate][working_image][populate]=true&populate[dynamic_zone][on][dynamic-zone.doctors-card-section][populate]=*"
  );

  console.log(homePageData?.data?.data);

  useEffect(() => {
    const segments = location.pathname.split("/").filter(Boolean);
    const lastSegment = segments[segments.length - 1]?.toLowerCase() || "";
    setPath(lastSegment);
  }, [location]);

  useEffect(() => {
    if (headerFooterData.loading === false) {
      dispatch(setHeader(headerFooterData?.data?.data?.Header));
      dispatch(setFooter(headerFooterData?.data?.data?.Footer));
    }

    if (homePageData.loading === false) {
      const homePage = homePageData?.data?.data?.[0];
      const homePageRepeatedSection = homePageData?.data?.data?.[1];

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
      const platformWork = homePage?.dynamic_zone.find(
        (item) => item.__component === "dynamic-zone.platform-working"
      );
      const doctorHomeSection = homePageRepeatedSection?.dynamic_zone.find(
        (item) => item.__component === "dynamic-zone.doctors-card-section"
      );
      const requestAppointment = homePageRepeatedSection?.dynamic_zone.find(
        (item) => item.__component === "dynamic-zone.request-appointment"
      );
      const faqHomeSection = homePageRepeatedSection?.dynamic_zone.find(
        (item) => item.__component === "dynamic-zone.faq-section"
      );

      if (heroSection) dispatch(setHeroSection(heroSection));
      if (welcomeBanner) dispatch(setWelcomeBanner(welcomeBanner));
      if (ourStory) dispatch(setOurStory(ourStory));
      if (promiseSection) dispatch(setPromiseSection(promiseSection));
      if (whyChooseUs) dispatch(setWhyChooseUs(whyChooseUs));
      if (platformWork) dispatch(setPlatformWork(platformWork));
      // if (doctorHomeSection) dispatch( setComponentInfo(doctorHomeSection));
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
