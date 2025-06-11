import React, { useEffect, useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { LuUserSearch } from "react-icons/lu";
import { IoIosArrowDown } from "react-icons/io";
import ReactPaginate from "react-paginate";
import { motion, AnimatePresence } from "framer-motion";
import Header from "../../components/Header/Header.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import FrequentlyAskedQuestion from "../../components/FAQ/FrequentlyAskedQuestion.jsx";
import blog1 from "../../assets/Images/dentalClinic.jpg";
import blog2 from "../../assets/Images/image3.jpg";
import blog3 from "../../assets/Images/image4.jpg";

import BlogsCard from "../../components/Blogs/BlogsCard";
import AppointmentFORM from "../../components/AppointmentForm/AppointmentForm.jsx";

import { useParams } from "react-router-dom";

const BlogInnerPage = () => {
  const [FilteredData, setFilteredData] = useState();
  const pageId = useParams().id;

  const BlogData = [
    {
      id: 1,
      img: blog1,
      category: "self care",
      title: "Belly Fat: Types, Risks, and Natural Ways to Lose It",
      date: "23/05/2025",
      by: "Dr. Prashant Rajput",
      content:
        '<p><span style="font-size: 48px;">The Hidden Danger of Belly Fat: What You Need to Know</span></p><p><span style="font-size: 18px;">Belly fat isn’t just a cosmetic issue—it poses serious health risks. Visceral fat, the type that wraps around internal organs, can lead to life-threatening conditions like heart disease, diabetes, hormonal imbalances, and even cancer.</span></p><p><span style="font-size: 32px;">Types of Belly Fat</span><span style="font-size: 18px;"><br>There are two primary types of belly fat. Subcutaneous fat lies just beneath the skin. While it may affect how we look, it is relatively less harmful. In contrast, visceral fat is stored deeper within the abdominal cavity, surrounding key organs. This type of fat is significantly more dangerous because it can disrupt hormone function, trigger inflammation, and contribute to various chronic illnesses.<br></span><span style="font-size: 32px;">Health Risks of Belly Fat</span><span style="font-size: 18px;"><br>Belly fat, especially visceral fat, can contribute to several serious health issues. It raises levels of bad cholesterol (LDL) and lowers good cholesterol (HDL), increasing the risk of heart disease. It interferes with insulin sensitivity, leading to type 2 diabetes. The inflammatory substances released by visceral fat contribute to chronic inflammation, which has been linked to diseases like arthritis and Alzheimer’s. Furthermore, this type of fat disrupts hormonal balance, particularly cortisol and insulin, which can worsen metabolic problems. Finally, studies have shown that excess belly fat increases the likelihood of developing cancers such as breast, colon, and pancreatic cancer.<br></span><span style="font-size: 32px;">What Causes Belly Fat?</span><span style="font-size: 18px;"><br>Several lifestyle and genetic factors contribute to belly fat accumulation. A poor diet that includes high amounts of sugar, refined carbohydrates, and processed foods leads to increased fat storage around the abdomen. A lack of physical activity prevents calorie burning and slows metabolism. High stress levels and inadequate sleep increase the body’s production of cortisol, a hormone that promotes belly fat storage. Hormonal changes due to ageing and menopause also shift fat distribution toward the belly area. Additionally, genetics can predispose individuals to store fat in this region more easily than others.<br></span><span style="font-size: 32px;">How to Lose Belly Fat Naturally</span><span style="font-size: 18px;"><br>To reduce belly fat, making long-term lifestyle changes is essential. Start by adopting a clean and balanced diet that includes lean proteins, fiber-rich foods, and complex carbohydrates, while reducing intake of sugary and processed items. Regular physical activity is crucial—engage in cardio exercises such as walking, cycling, or jogging, and combine them with strength training and core-focused workouts to build muscle and burn fat. Managing stress through relaxation techniques like yoga, meditation, and engaging hobbies can significantly lower cortisol levels and support fat loss. Aim for 7 to 9 hours of quality sleep each night, and minimize screen time before bed to improve sleep quality. Staying hydrated is also important—drink plenty of water daily and opt for healthier alternatives to sugary drinks, such as herbal teas or fruit-infused water.<br></span><span style="font-size: 32px;">Women and Belly Fat</span><span style="font-size: 18px;"><br>Women, particularly after menopause, are more likely to accumulate belly fat due to hormonal shifts. This change increases the risk of heart disease, metabolic disorders, and even bone-related issues like osteoporosis. However, by maintaining a healthy diet, exercising regularly, managing stress effectively, and getting enough rest, women can control and reduce belly fat even during and after hormonal transitions.</span><br></p>',
    },
    {
      id: 2,
      img: blog3,
      category: "wellness",
      title: "The Power of Mindful Eating: Transform Your Health",
      date: "12/06/2025",
      by: "Dr. Anjali Mehra",
      content:
        '<p><span style="font-size: 48px;">Mindful Eating: A Simple Path to Better Health</span></p><p><span style="font-size: 18px;">Mindful eating is about paying full attention to the experience of eating and drinking, both inside and outside the body. It helps you recognize true hunger and fullness cues, leading to healthier choices and improved digestion.</span></p><p><span style="font-size: 32px;">Benefits of Mindful Eating</span><span style="font-size: 18px;"><br>Practicing mindful eating can reduce overeating, support weight management, and lower stress levels. It encourages a positive relationship with food and helps prevent emotional eating.</span><span style="font-size: 32px;">How to Practice Mindful Eating</span><span style="font-size: 18px;"><br>Start by eating slowly and without distractions. Focus on the flavors, textures, and aromas of your food. Listen to your body’s hunger and fullness signals, and try to eat only when you’re truly hungry.</span></p>',
    },
    {
      id: 3,
      img: blog2,
      category: "nutrition",
      title: "Nutrition Myths Debunked: What You Really Need to Know",
      date: "05/07/2025",
      by: "Dr. Rahul Singh",
      content:
        '<p><span style="font-size: 48px;">Nutrition Myths Debunked</span></p><p><span style="font-size: 18px;">There are many misconceptions about nutrition that can lead to unhealthy choices. This article aims to clarify common myths and provide evidence-based information.</span></p><p><span style="font-size: 32px;">Common Nutrition Myths</span><span style="font-size: 18px;"><br>Some people believe that all fats are bad, but healthy fats are essential for brain health. Another myth is that carbohydrates should be avoided entirely, but complex carbs are crucial for energy.</span><span style="font-size: 32px;">The Truth About Diets</span><span style="font-size: 18px;"><br>Many fad diets promise quick results but often lead to yo-yo dieting. A balanced diet with a variety of foods is the best approach for long-term health.</span></p>',
    },
    {
      id: 4,
      img: blog1,
      category: "fitness",
      title: "How Regular Exercise Boosts Your Immune System",
      date: "18/08/2025",
      by: "Dr. Kavita Sharma",
      content:
        '<p><span style="font-size: 48px;">Exercise and Immunity: The Vital Connection</span></p><p><span style="font-size: 18px;">Regular physical activity strengthens your immune system, making you less susceptible to infections. Exercise improves circulation, reduces inflammation, and supports the healthy turnover of immune cells.</span></p><p><span style="font-size: 32px;">Best Exercises for Immunity</span><span style="font-size: 18px;"><br>Moderate-intensity activities like brisk walking, cycling, and swimming are ideal. Consistency is key—aim for at least 150 minutes per week.</span></p>',
    },
    {
      id: 5,
      img: blog2,
      category: "mental health",
      title: "Managing Stress: Simple Techniques for a Calmer Mind",
      date: "29/09/2025",
      by: "Dr. Sameer Verma",
      content:
        '<p><span style="font-size: 48px;">Stress Management for Everyday Life</span></p><p><span style="font-size: 18px;">Chronic stress can harm your physical and mental health. Learning to manage stress is essential for overall well-being.</span></p><p><span style="font-size: 32px;">Effective Stress-Relief Techniques</span><span style="font-size: 18px;"><br>Practice deep breathing, mindfulness meditation, and regular exercise. Taking breaks and connecting with loved ones also help reduce stress levels.</span></p>',
    },
    {
      id: 6,
      img: blog3,
      category: "lifestyle",
      title: "Healthy Sleep Habits: Why Sleep Matters More Than You Think",
      date: "10/10/2025",
      by: "Dr. Priya Nair",
      content:
        '<p><span style="font-size: 48px;">The Power of Good Sleep</span></p><p><span style="font-size: 18px;">Quality sleep is crucial for memory, mood, and immune function. Poor sleep increases the risk of chronic diseases and impairs daily performance.</span></p><p><span style="font-size: 32px;">Tips for Better Sleep</span><span style="font-size: 18px;"><br>Maintain a consistent sleep schedule, create a relaxing bedtime routine, and avoid screens before bed. Ensure your sleep environment is cool, dark, and quiet.</span></p>',
    },
  ];

  useEffect(() => {
    const data = BlogData.find((item) => item.id === parseInt(pageId));
    setFilteredData(data);
  }, [pageId]);

  const [itemsPerPage, setItemsPerPage] = useState(4);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      switch (true) {
        case width >= 1440: // large screens
          setItemsPerPage(3);
          break;
        case width >= 1024: // large screens
          setItemsPerPage(2);
          break;
        case width >= 768: // medium screens
          setItemsPerPage(2);
          break;
        default: // small screens
          setItemsPerPage(1);
          break;
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const offset = currentPage * itemsPerPage;
  const currentItems = BlogData.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(BlogData.length / itemsPerPage);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const card = {
    hidden: {
      opacity: 0,
      y: 50,
      rotateX: -10,
      scale: 0.95,
    },
    show: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <>
      {FilteredData ? (
        <>
          <section className="bg-custom-gradient pb-16">
            <Header />
            <div className="flex flex-col items-center mt-12 md:px-8 px-4 ">
              {/* Image */}
              <div className="w-full max-w-7xl h-auto">
                <img
                  src={FilteredData.img}
                  alt="Blog visual"
                  className="w-full max-h-[700px] object-cover rounded-2xl shadow-md"
                />
              </div>

              {/* Title & Category */}
              <div className="w-full max-w-7xl mt-8 flex flex-col lg:flex-row lg:justify-between items-start lg:items-center gap-4">
                <div className="flex flex-col gap-1 font-general-sans">
                  <h2 className="text-3xl md:text-4xl font-medium text-Primary-Blue-950 leading-snug text-justify">
                    {FilteredData.title}
                  </h2>
                  <p className="text-justify">{FilteredData.by}</p>
                  <span className="text-Primary-Blue-500">
                    {FilteredData.date}
                  </span>
                </div>

                <div className="flex items-center gap-2 px-3 py-1 bg-Primary-Blue-200 rounded-lg shadow-sm">
                  <div className="w-3 h-3 rounded-full bg-Primary-Blue-950" />
                  <p className="text-sm text-Primary-Blue-950 font-semibold">
                    {FilteredData.category}
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="max-w-7xl w-full mt-10 text-lg text-gray-800 leading-7 font-general-sans">
                <div
                  className="prose prose-blue max-w-full"
                  dangerouslySetInnerHTML={{ __html: FilteredData.content }}
                ></div>
              </div>
            </div>
          </section>
          {/* More suggestion Blogs  */}
          <div className="max-w-7xl mx-auto md:px-8 px-4 text-start mt-10">
            <h2 className="text-2xl md:text-4xl text-Primary-Blue-900 font-semibold mb-6">
              Explore More ....
            </h2>

            <div className=" flex flex-col justify-center items-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentPage}
                  className="grid max-w-[1300px] gap-8 xs:px-4 mt-4 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1"
                  variants={container}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                > 
                  {currentItems.map((data) => (
                    <motion.div key={data.id} variants={card}>
                      <BlogsCard data={data} />
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
              {/* Pagination Buttons for mobile */}
              <div className="flex justify-center mt-4 ">
                <ReactPaginate
                  previousLabel={
                    <div className="w-16 h-8  border bg-Primary-Blue-950 flex items-center justify-center">
                      <BsArrowLeft className="text-white text-2xl" />
                    </div>
                  }
                  nextLabel={
                    <div className="w-16 h-8  border bg-Primary-Blue-950 flex items-center justify-center">
                      <BsArrowLeft className="rotate-180 text-white text-2xl" />
                    </div>
                  }
                  pageCount={pageCount}
                  onPageChange={handlePageClick}
                  containerClassName="flex gap-2 items-center mt-6"
                  pageClassName="show show text-sm" // Hide default number buttons
                  breakClassName="hidden"
                  activeClassName=" w-5 h-5 flex justify-center items-center text-sm rounded-full bg-Primary-Blue-400 text-white"
                  disabledClassName="opacity-50 pointer-events-none"
                  marginPagesDisplayed={2}
                  pageRangeDisplayed={1}
                />
              </div>
            </div>
          </div>

          <AppointmentFORM />
          <FrequentlyAskedQuestion />
          <Footer />
        </>
      ) : (
        <div className="text-center mt-20 text-gray-600 text-lg">
          Loading...
        </div>
      )}
    </>
  );
};

export default BlogInnerPage;
