import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import { useParams } from "react-router-dom";
import Specialist from "../../components/Specialist/Specialist";
import HealthCarePath from "../../components/HealthCarePath/HealthCarePath";
import AppointmentForm from "../../components/AppointmentForm/AppointmentForm.jsx";
import FrequentlyAskedQuestion from "../../components/FAQ/FrequentlyAskedQuestion";
import Footer from "../../components/Footer/Footer";


const SpecialtiesInnerPage = () => {
  const { category } = useParams();
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categoryData = [
    {
      id: 1,
      category: "Cardiology",
      description: `<p><span style="color: rgb(28, 69, 135); font-size: 32px;"><strong>Cardiology    at Drs-4you A Procedure For Treating Blocked Arterie</strong><strong style="color: rgb(7, 55, 99);">s</strong></span></p><p><span style="color: rgb(28, 69, 135); font-size: 32px;"><span style="color: rgb(0, 0, 0); font-size: 18px;">What is Angioplasty? Angioplasty is a minimally invasive procedure used to open blocked or narrowed arteries, often performed to treat coronary artery disease (CAD). The procedure involves inflating a small balloon inside the artery to restore blood flow.</span></span></p><p><span style="color: rgb(28, 69, 135); font-size: 32px;"><span style="color: rgb(7, 55, 99); font-size: 18px;"><br></span></span></p><p><span style="color: rgb(28, 69, 135); font-size: 32px;"><span style="color: rgb(7, 55, 99); font-size: 32px;"><strong>Why is it Done?</strong></span></span></p><ul style="list-style-type: circle;"><li><span style="color: rgb(0, 0, 0); font-size: 32px;"><span style="font-size: 18px;">Coronary Artery Disease (CAD)</span></span><span style="font-size: 18px;"><br></span><span style="color: rgb(0, 0, 0); font-size: 32px;"><span style="font-size: 18px;">Heart Attack</span></span><span style="color: rgb(28, 69, 135); font-size: 32px;"><span style="font-size: 18px;"><br>A</span></span><span style="color: rgb(0, 0, 0); font-size: 32px;"><span style="font-size: 18px;">ngina (Chest Pain)</span></span></li><li><span style="color: rgb(28, 69, 135); font-size: 32px;"><span style="color: rgb(7, 55, 99); font-size: 18px;"><br></span></span></li><li><span style="color: rgb(28, 69, 135); font-size: 32px;"><span style="color: rgb(7, 55, 99); font-size: 32px;"><strong>How is it Done?</strong></span></span></li><li><span style="color: rgb(28, 69, 135); font-size: 32px;"><span style="color: rgb(0, 0, 0); font-size: 32px;"><span style="font-size: 18px;">A catheter with a balloon is inserted through a small incision in the groin or wrist.</span></span><span style="font-size: 18px;"><br></span><span style="color: rgb(0, 0, 0); font-size: 32px;"><span style="font-size: 18px;">The balloon is inflated at the blockage site to widen the artery.</span></span><span style="font-size: 18px;"><br></span><span style="color: rgb(0, 0, 0); font-size: 32px;"><span style="font-size: 18px;">A stent (a small mesh tube) may be placed to keep the&nbsp;artery&nbsp;open.</span></span></span></li></ul><p><span style="color: rgb(28, 69, 135); font-size: 32px;"><span style="color: rgb(7, 55, 99); font-size: 18px;"><br></span></span></p><p><span style="color: rgb(28, 69, 135); font-size: 32px;"><strong><br></strong></span></p>`,
    },
  ];

  useEffect(() => {
    const foundCategory = categoryData.find(
      (item) => item.category.toLowerCase() === category.toLowerCase()
    );
    setSelectedCategory(foundCategory);
  }, [category]);

  return (
    <>
      <section>
        <div className="bg-custom-gradient ">
          <Header />
          <div className="max-w-5xl mx-auto py-12 px-6 ">
            {selectedCategory ? (
              <>
                <h1 className=" text-3xl md:text-6xl text-center font-bold text-gradient-btn p-4 ">
                  {selectedCategory.category}
                </h1>
                <div
                  className="prose max-w-none xs:text-base sm:text-base text-justify mt-8"
                  dangerouslySetInnerHTML={{
                    __html: selectedCategory.description,
                  }}
                />
              </>
            ) : (
              <p className="text-xl text-gray-600">Category is Not Added Yet</p>
            )}
          </div>
        </div>
      </section>
      <Specialist category={category} show={false} />
      <HealthCarePath />
      <AppointmentForm />
      <FrequentlyAskedQuestion />
      <Footer />
    </>
  );
};

export default SpecialtiesInnerPage;
