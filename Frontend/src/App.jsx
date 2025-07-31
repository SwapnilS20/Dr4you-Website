import { useEffect, useState } from "react";
import { Outlet, ScrollRestoration, useLocation } from "react-router-dom";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

import "./index.css";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import { useDispatch } from "react-redux";
import {
  setHeroSection,
  setWelcomeBanner,
  setPlatformWork,
  setTestimonialComponentInfo,
  setAboutData,
  setTeamData,
  setServicesComponentInfo,
} from "./App/features/homeSlice.js";

import {
  setOurStory,
  setPromiseSection,
  setWhyChooseUs,
  setDoctorComponentInfo,
  setFaqComponentInfo,
  setRequestAppointmentForm,
  setHealthcarePathway,
} from "./App/features/repeatableSlice";

import { setDoctorPageInfo, setDoctors } from "./App/features/doctorsSlice.js";
import { setFaqs } from "./App/features/faqSlice.js";

import {
  setCategoryPageInfo,
  setCategory,
} from "./App/features/categorySlice.js";

import { setTestimonials } from "./App/features/testimonialSlice.js";

import { setHeader, setFooter } from "./App/features/headerFooterSlics";

import { setBlogPageInfo, setBlogs } from "./App/features/blogSlice.js";
import { setContactPageInfo, setData } from "./App/features/contactSlice.js";
import useFetch from "./Hooks/useFetch.js";

function App() {
  const [path, setPath] = useState("");
  const dispatch = useDispatch();
  const baseUrl = import.meta.env.VITE_STRAPI_URL;
  const headerFooterData = useFetch(
    `${baseUrl}/api/header-and-footer?populate[Header][populate]=*&populate[Footer][populate][logo]=true&populate[Footer][populate][policy_links]=true&populate[Footer][populate][services_links]=true&populate[Footer][populate][support]=true&populate[Footer][populate][social_icons][populate]=link`
  );

  const homePageData = useFetch(
    `${baseUrl}/api/pages?populate[0]=dynamic_zone&populate[dynamic_zone][on][dynamic-zone.hero-section][populate][doctor_image]=true&populate[dynamic_zone][on][dynamic-zone.hero-section][populate][CTAs]=true&populate[dynamic_zone][on][dynamic-zone.hero-section][populate][our_stats]=true&populate[dynamic_zone][on][dynamic-zone.welcome-banner][populate][patient_image]=true&populate[dynamic_zone][on][dynamic-zone.platform-working][populate][platform_steps][populate]=true&populate[dynamic_zone][on][dynamic-zone.platform-working][populate][working_image][populate]=true&populate[dynamic_zone][on][dynamic-zone.testimonial-section-head][populate]=*&populate[pagehead]=true&populate[dynamic_zone][on][dynamic-zone.contact-info][populate]=*&populate[dynamic_zone][on][dynamic-zone.services-card-section][populate]=*`
  );

  const repeatedComponents = useFetch(
    `${baseUrl}/api/repeated-component?populate[Drs4you_Story][populate]=story_image&populate[Why_Choose_Us][populate]=doctor_image&populate[Why_Choose_Us][populate]=Why_Choose_Items&populate[Promise_Section][populate]=true&populate[Promise_Section][populate]=promise_items.icon&populate[Doctor_Section_Head][populate]=sectionhead&populate[FAQ_Section_Head][populate]=sectionhead&populate[Request_Appointment_Form][populate]=CTA&populate[Healthcare_Pathway][populate]=pathway_card.icon`
  );

  const categories = useFetch(
    `${baseUrl}/api/services?populate=icon`
  );

  const doctors = useFetch(
    `${baseUrl}/api/doctors?populate[doctor_information][populate]=doctor_qualification&populate[doctor_image][populate]=true&populate[service][fields][0]=name`
  );

  const testimonials = useFetch(
    `${baseUrl}/api/testimonials?populate=*`
  );

  const faqs = useFetch(`${baseUrl}/api/FAQs?populate=*`);

  const about = useFetch(
    `${baseUrl}/api/pages?populate[dynamic_zone][on][dynamic-zone.our-vision][populate]=true&populate[dynamic_zone][on][dynamic-zone.our-mission][populate]=image&populate[pagehead]=true`
  );

  const team = useFetch(`${baseUrl}/api/teams?populate=*`);

  const blog = useFetch(`${baseUrl}/api/blogs?populate=*`);

  const location = useLocation();

  useEffect(() => {
    const segments = location.pathname.split("/").filter(Boolean);
    const lastSegment = segments[segments.length - 1]?.toLowerCase() || "";
    setPath(lastSegment);
  }, [location.pathname]); // only depend on location.pathname

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
      if (repeatedData)
        dispatch(setPromiseSection(repeatedData.Promise_Section));
      if (repeatedData) dispatch(setWhyChooseUs(repeatedData.Why_Choose_Us));
      if (repeatedData)
        dispatch(
          setRequestAppointmentForm(repeatedData.Request_Appointment_Form)
        );
      if (repeatedData)
        dispatch(setFaqComponentInfo(repeatedData.FAQ_Section_Head));
      if (repeatedData)
        dispatch(setDoctorComponentInfo(repeatedData.Doctor_Section_Head));
      if (repeatedData)
        dispatch(setHealthcarePathway(repeatedData.Healthcare_Pathway));
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
      const servicesComponentInfo = homePage?.dynamic_zone.find(
        (item) => item.__component === "dynamic-zone.services-card-section"
      );     

      if (heroSection) dispatch(setHeroSection(heroSection));
      if (welcomeBanner) dispatch(setWelcomeBanner(welcomeBanner));
      if (platformWork) dispatch(setPlatformWork(platformWork));
      if (testimonialComponentInfo)
        dispatch(setTestimonialComponentInfo(testimonialComponentInfo));
      if (servicesComponentInfo)
        dispatch(setServicesComponentInfo(servicesComponentInfo.sectionhead));
    }

    // ALL PAGE Heading DATA REDUX DATA HANDLING
    if (homePageData.loading === false) {
      const servicesPage = homePageData?.data?.data?.filter(
        (item) => item.name === "Services"
      )[0];

      if (servicesPage) dispatch(setCategoryPageInfo(servicesPage?.pagehead));

      const doctorsPage = homePageData?.data?.data?.filter(
        (item) => item.name === "Find Doctors"
      )[0];

      if (servicesPage) dispatch(setDoctorPageInfo(doctorsPage?.pagehead));

      const blogpage = homePageData?.data?.data?.filter(
        (item) => item.name === "Blogs"
      )[0];

      if (blogpage) dispatch(setBlogPageInfo(blogpage?.pagehead));

      const contactPage = homePageData?.data?.data?.filter(
        (item) => item.name === "Contact us"
      )[0];
      if (contactPage) dispatch(setContactPageInfo(contactPage?.pagehead));
      if (contactPage) dispatch(setData(contactPage?.dynamic_zone));
      
    }

    // ALL CATEGORIES REDUX DATA HANDLING
    if (categories.loading === false) {
      if (categories) dispatch(setCategory(categories?.data?.data));
    }
    // ALL DOCTORS REDUX DATA HANDLING
    if (doctors.loading === false) {
      if (categories) dispatch(setDoctors(doctors?.data?.data));
    }

    // TESTIMONIALS DATA REDUX HANDLING

    if (testimonials.loading === false) {
      if (testimonials) dispatch(setTestimonials(testimonials?.data?.data));
    }

    // FAQS DATA REDUX HANDLING
    if (faqs.loading === false) {
      if (faqs) dispatch(setFaqs(faqs?.data?.data));
    }

    const aboutFiltered = about?.data?.data?.filter(
      (item) => item.name === "About us"
    )[0];

    // About DATA REDUX HANDLING
    if (about.loading === false) {
      if (aboutFiltered) dispatch(setAboutData(aboutFiltered));
    }
    // Team DATA REDUX HANDLING
    if (team.loading === false) {
      if (team) dispatch(setTeamData(team?.data?.data));
    }

    // Blog DATA REDUX HANDLING
    if (blog.loading === false) {
      if (blog) dispatch(setBlogs(blog?.data?.data));
      
    }

  }, [
    homePageData.loading,
    homePageData?.data,
    repeatedComponents?.loading,
    repeatedComponents?.data,
    about.loading,
    about?.data,
    blog?.loading,
    blog?.data,
  ]);

  const allLoading =
    headerFooterData.loading ||
    homePageData.loading ||
    repeatedComponents.loading ||
    categories.loading ||
    doctors.loading;

  return (
    <>
      {allLoading ? (
        <div className="flex items-center justify-center min-h-screen">
          <DotLottieReact
            src="https://lottie.host/0878716e-6441-4762-800f-d8b7fb80295c/LBpmbgEBmy.lottie"
            loop
            autoplay
            style={{ width: "500px" }}
          />
        </div>
      ) : (
        <>
          <div
            className={`${
              path === "specialists"
                ? "bg-Primary-Blue-50"
                : "bg-custom-gradient"
            }`}
          >
            <Header />
            <Outlet />
            <Footer />
          </div>
          <ScrollRestoration />
        </>
      )}
    </>
  );
}

export default App;
