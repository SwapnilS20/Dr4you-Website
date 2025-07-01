import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import { useParams } from "react-router-dom";
import Specialist from "../../components/Specialist/Specialist";
import HealthCarePath from "../../components/HealthCarePath/HealthCarePath";
import AppointmentForm from "../../components/AppointmentForm/AppointmentForm.jsx";
import FrequentlyAskedQuestion from "../../components/FAQ/FrequentlyAskedQuestion";
import Footer from "../../components/Footer/Footer";
import { useSelector } from "react-redux";
import RichTextRenderer from "../../components/RichTextRenderer.jsx";

const SpecialtiesInnerPage = () => {
  const { category } = useParams();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const specialtiesData = useSelector((state) => state.category.category);

  useEffect(() => {
    const foundCategory = specialtiesData?.find(
      (item) => item.id === Number(category)
    );
    setSelectedCategory(foundCategory);
  }, [category, specialtiesData]);

  // ✅ Safely building a simple example html string
  const htmlString =
    selectedCategory &&
    selectedCategory.detailed_information?.[0]?.children?.[0]?.text
      ? `<h2>${selectedCategory.detailed_information[0].children[0].text}</h2>`
      : "";

  return (
    <>
      <section>
        <div className="bg-custom-gradient ">
          <div className="max-w-5xl mx-auto py-12 px-6 ">
            {selectedCategory ? (
              <>
                <h1 className="text-3xl md:text-6xl text-center font-bold text-gradient-btn p-4">
                  {selectedCategory.name}
                </h1>
                <RichTextRenderer
                  content={selectedCategory.detailed_information}
                />
              </>
            ) : (
              <p className="text-xl text-gray-600">Category is Not Added Yet</p>
            )}
          </div>
        </div>
      </section>
      <Specialist category={selectedCategory?.name} show={false} />
      <HealthCarePath />
      <AppointmentForm />
      <FrequentlyAskedQuestion />
    </>
  );
};

export default SpecialtiesInnerPage;
