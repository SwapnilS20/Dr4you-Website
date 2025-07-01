import { useEffect, useState } from "react";
import { Outlet, ScrollRestoration, useLocation } from "react-router-dom";
import "./index.css";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import { useDispatch } from "react-redux";
import {
  setHeroSection,
  setWelcomeBanner,
  setPlatformWork,
  setTestimonialComponentInfo,
} from "./App/features/homeSlice.js";

import {
  setOurStory,
  setPromiseSection,
  setWhyChooseUs,
  setDoctorComponentInfo,
  setFaqComponentInfo,
  setRequestAppointmentForm,
} from "./App/features/repeatableSlice";

import { setCategoryPageInfo, setCategory } from './App/features/categorySlice.js'

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
    "http://localhost:1337/api/pages?populate[0]=dynamic_zone&populate[dynamic_zone][on][dynamic-zone.hero-section][populate][doctor_image]=true&populate[dynamic_zone][on][dynamic-zone.hero-section][populate][CTAs]=true&populate[dynamic_zone][on][dynamic-zone.hero-section][populate][our_stats]=true&populate[dynamic_zone][on][dynamic-zone.welcome-banner][populate][patient_image]=true&populate[dynamic_zone][on][dynamic-zone.platform-working][populate][platform_steps][populate]=true&populate[dynamic_zone][on][dynamic-zone.platform-working][populate][working_image][populate]=true&populate[dynamic_zone][on][dynamic-zone.testimonial-section-head][populate]=*&populate[pagehead]=true"
  );

  const repeatedComponents = useFetch(
    "http://localhost:1337/api/repeated-component?populate[Drs4you_Story][populate]=story_image&populate[Why_Choose_Us][populate]=doctor_image&populate[Why_Choose_Us][populate]=Why_Choose_Items&populate[Promise_Section][populate]=true&populate[Promise_Section][populate]=promise_items.icon&populate[Doctor_Section_Head][populate]=sectionhead&populate[FAQ_Section_Head][populate]=sectionhead&populate[Request_Appointment_Form][populate]=CTA"
  );

  const categories = useFetch(
    "http://localhost:1337/api/services?populate=icon"
  )

  useEffect(() => {
    const segments = location.pathname.split("/").filter(Boolean);
    const lastSegment = segments[segments.length - 1]?.toLowerCase() || "";
    setPath(lastSegment);
  }, [location]);

  useEffect(() => {
    // HEADER AND FOOTER REDUX HANDLING
    if (headerFooterData.loading === false) {
      dispatch(setHeader(headerFooterData?.data?.data?.Header));
      dispatch(setFooter(headerFooterData?.data?.data?.Footer));
    }

    // REPEATED COMPONENTS REDUX HANDLING
    if (repeatedComponents.loading === false) {
      const repeatedData = repeatedComponents?.data?.data;


      if (repeatedData) dispatch(setOurStory(repeatedData.Drs4you_Story));
      if (repeatedData) dispatch(setPromiseSection(repeatedData.Promise_Section));
      if (repeatedData) dispatch(setWhyChooseUs(repeatedData.Why_Choose_Us));
      if (repeatedData) dispatch(setRequestAppointmentForm(repeatedData.Request_Appointment_Form));
      if (repeatedData) dispatch(setFaqComponentInfo(repeatedData.FAQ_Section_Head));
      if (repeatedData) dispatch(setDoctorComponentInfo(repeatedData.Doctor_Section_Head));
    }


    // HOMEPAGE DATA REDUX HANDLING
    if (homePageData.loading === false) {
      const homePage = homePageData?.data?.data?.filter(
        (item) => item.name === "Home"
      )[0];

      const heroSection = homePage?.dynamic_zone.find(
        (item) => item.__component === "dynamic-zone.hero-section"
      );
      const welcomeBanner = homePage?.dynamic_zone.find(
        (item) => item.__component === "dynamic-zone.welcome-banner"
      );
      const platformWork = homePage?.dynamic_zone.find(
        (item) => item.__component === "dynamic-zone.platform-working"
      );
      const testimonialComponentInfo = homePage?.dynamic_zone.find(
        (item) => item.__component === "dynamic-zone.testimonial-section-head"
      );

      if (heroSection) dispatch(setHeroSection(heroSection));
      if (welcomeBanner) dispatch(setWelcomeBanner(welcomeBanner));
      if (platformWork) dispatch(setPlatformWork(platformWork));
      if (testimonialComponentInfo)
        dispatch(setTestimonialComponentInfo(testimonialComponentInfo));
    }

    // SERVICE PAGE REDUX DATA HANDLING
    if (homePageData.loading === false) {
      const servicesPage = homePageData?.data?.data?.filter(
        (item) => item.name === "Services"
      )[0];
      
      if(servicesPage) dispatch(setCategoryPageInfo(servicesPage.pagehead));

    }

    // ALL CATEGORIES REDUX DATA HANDLING
    if(categories.loading === false){

      if(categories) dispatch(setCategory(categories?.data?.data))
      
    }

    
  }, [homePageData.loading, homePageData?.data , repeatedComponents?.loading, repeatedComponents?.data ]);

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
