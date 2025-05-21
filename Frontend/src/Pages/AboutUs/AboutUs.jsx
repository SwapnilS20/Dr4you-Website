import React from "react";
import Header from "../../components/Header/Header";
import img from "../../assets/Images/aboutusimg.png";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";
import Promise from "../../components/Our Promise/Promise";

const AboutUs = () => {
  const aboutData = {
    mission:
      '<p>At Drs-4You, patients come first. We are committed to providing compassionate and accessible online medical consultation services that support each individual’s journey toward better health. Our approach goes beyond basic diagnosis — we focus on patient education, clarity in communication, and personalized follow-up care. By connecting patients with trusted specialists and offering a seamless digital experience, we ensure that every interaction promotes transparency, confidence, and overall well-being. Thoughtful design, expert guidance, and secure systems allow us to deliver care that is not only convenient but deeply human-centered.</p><p><br></p><p><span style="color: rgb(7, 55, 99); font-size: 24px;">More than anything, we love empowering healthier lives through clarity, care, and connection.</span></p><p><span style="color: rgb(7, 55, 99); font-size: 24px;"><br></span></p><p><span style="color: rgb(0, 0, 0); font-size: 18px;">We stay at the forefront of medical innovation to ensure our patients receive the highest standard of care. We continuously integrate the latest tools and technologies to provide precise diagnoses, seamless consultations, and personalized treatment insights. Our platform is built to support a digital-first approach—streamlining medical follow-ups, enabling data-driven decisions, and ensuring every consultation is guided by accuracy and empathy. Whether it’s through secure digital records, advanced imaging support, or specialist access, we are committed to delivering care that is not only effective but also reassuring and patient-focused.</span></p>',
    vision:
      '<p><span style="font-size: 18px;">At Drs-4You, we aim to redefine healthcare by making expert medical guidance accessible, inclusive, and sustainable for everyone. Our vision is to build a future where technology and compassion work hand-in-hand to deliver seamless, patient-focused care—anytime, anywhere.<br>We are committed to creating a trusted platform where individuals can connect with top specialists, receive clear and personalized consultations, and feel empowered to make informed health decisions. By prioritizing convenience, empathy, and transparency, we ensure that every patient feels heard, respected, and supported throughout their healthcare journey.<br>With a focus on continuous innovation and eco-conscious practices, Drs-4You is shaping the future of digital healthcare—making it smarter, greener, and truly centered around people.</span></p>',
  };
  return (
    <>
      <section className="bg-custom-gradient ">
        <Header />
        <div className="max-w-7xl mx-auto px-6 font-general-sans space-y-16">
          {/* Heading */}
          <h1 className="text-5xl md:text-6xl text-center font-semibold text-gradient-btn">
            About Us
          </h1>

          {/* Mission and Image */}
          <div className="flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-16">
            {/* Text Content */}
            <div className="w-full  lg:w-2/3 space-y-4 md:px-8">
              <h2 className="text-3xl md:text-4xl font-semibold text-Primary-Blue-950">
                Our Mission
              </h2>
              <div
                className="text-lg text-gray-800 leading-relaxed text-justify"
                dangerouslySetInnerHTML={{
                  __html:
                    aboutData?.mission ||
                    "<p>Our mission content is loading...</p>",
                }}
              />
            </div>

            {/* Image */}
            <div className="w-full md:w-2/4 lg:w-2/4 xl:w-1/3">
              <img
                src={img}
                alt="About us illustration"
                className="w-full h-full object-cover rounded-2xl shadow-md"
              />
            </div>
          </div>
        </div>
      </section>
      <WhyChooseUs />
      <Promise />

      <div className=" flex justify-center items-center font-general-sans mt-28">
        <div className=" max-w-7xl flex flex-col-reverse lg:flex-row gap-12 bg-Primary-Blue-50 p-6 rounded-xl">
          <div
            className="text-lg text-gray-800 leading-relaxed text-justify bg-white p-4 rounded-xl"
            dangerouslySetInnerHTML={{
              __html:
                aboutData?.vision || "<p>Our mission content is loading...</p>",
            }}
          />
          <div className=" lg:w-3/4 ">
            <h2 className=" text-6xl font-semibold text-Primary-Blue-900 lg:text-center ">Our Vision</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
