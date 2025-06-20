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
      description: `<p><span style="color: rgb(28, 69, 135); font-size: 32px;"><strong>Cardiology    at Drs-4you A Procedure For Treating Blocked Arterie</strong><strong style="color: rgb(7, 55, 99);">s</strong></span></p><p><span style="color: rgb(28, 69, 135); font-size: 32px;"><span style="color: rgb(0, 0, 0); font-size: 18px;">What is Angioplasty? Angioplasty is a minimally invasive procedure used to open blocked or narrowed arteries, often performed to treat coronary artery disease (CAD). The procedure involves inflating a small balloon inside the artery to restore blood flow.</span></span></p><p><span style="color: rgb(28, 69, 135); font-size: 32px;"><span style="color: rgb(7, 55, 99); font-size: 18px;"><br></span></span></p><p><span style="color: rgb(28, 69, 135); font-size: 32px;"><span style="color: rgb(7, 55, 99); font-size: 32px;"><strong>Why is it Done?</strong></span></span></p><ul style="list-style-type: circle;"><li><span style="color: rgb(0, 0, 0); font-size: 32px;"><span style="font-size: 18px;">Coronary Artery Disease (CAD)</span></span><span style="font-size: 18px;"><br></span><span style="color: rgb(0, 0, 0); font-size: 32px;"><span style="font-size: 18px;">Heart Attack</span></span><span style="color: rgb(28, 69, 135); font-size: 32px;"><span style="font-size: 18px;"><br>A</span></span><span style="color: rgb(0, 0, 0); font-size: 32px;"><span style="font-size: 18px;">ngina (Chest Pain)</span></span> <br> <span style="color: rgb(28, 69, 135); font-size: 32px;"><span style="color: rgb(7, 55, 99); font-size: 18px;"><br></span></span><span style="color: rgb(28, 69, 135); font-size: 32px;"><span style="color: rgb(7, 55, 99); font-size: 32px;"><strong>How is it Done?</strong></span></span></li><li><span style="color: rgb(28, 69, 135); font-size: 32px;"><span style="color: rgb(0, 0, 0); font-size: 32px;"><span style="font-size: 18px;">A catheter with a balloon is inserted through a small incision in the groin or wrist.</span></span><span style="font-size: 18px;"><br></span><span style="color: rgb(0, 0, 0); font-size: 32px;"><span style="font-size: 18px;">The balloon is inflated at the blockage site to widen the artery.</span></span><span style="font-size: 18px;"><br></span><span style="color: rgb(0, 0, 0); font-size: 32px;"><span style="font-size: 18px;">A stent (a small mesh tube) may be placed to keep the&nbsp;artery&nbsp;open.</span></span></span></li></ul><p><span style="color: rgb(28, 69, 135); font-size: 32px;"><span style="color: rgb(7, 55, 99); font-size: 18px;"><br></span></span></p><p><span style="color: rgb(28, 69, 135); font-size: 32px;"><strong><br></strong></span></p>`,
    },
    {
      id: 2,
      category: "Neurology",
      description: `<p><span style="color: rgb(28, 69, 135); font-size: 32px;"><strong>Neurology at Drs-4you: Understanding Brain and Nervous System Disorders</strong></span></p>
  <p><span style="color: rgb(0, 0, 0); font-size: 18px;">What is an EEG? An Electroencephalogram (EEG) is a diagnostic test that measures electrical activity in the brain. It is often used to diagnose epilepsy, sleep disorders, and other neurological conditions.</span></p>
  <br><p><span style="color: rgb(7, 55, 99); font-size: 32px;"><strong>Why is it Done?</strong></span></p>
  <ul style="list-style-type: circle;">
    <li><span style="font-size: 18px;">Seizure Disorders</span></li>
    <li><span style="font-size: 18px;">Unexplained Episodes of Unconsciousness</span></li>
    <li><span style="font-size: 18px;">Monitoring Brain Activity During Surgery</span></li>
  </ul>
  <br><p><span style="color: rgb(7, 55, 99); font-size: 32px;"><strong>How is it Done?</strong></span></p>
  <ul style="list-style-type: circle;">
    <li><span style="font-size: 18px;">Electrodes are placed on the scalp.</span></li>
    <li><span style="font-size: 18px;">Electrical activity is recorded over a period of time.</span></li>
    <li><span style="font-size: 18px;">Results help neurologists analyze brain function.</span></li>
  </ul>`,
    },
    {
      id: 3,
      category: "Orthopedics",
      description: `<p><span style="color: rgb(28, 69, 135); font-size: 32px;"><strong>Orthopedics at Drs-4you: A Procedure for Treating Joint Pain and Injuries</strong></span></p>
<p><span style="color: rgb(28, 69, 135); font-size: 32px;"><span style="color: rgb(0, 0, 0); font-size: 18px;">What is Joint Replacement Surgery? Joint replacement is a surgical procedure in which a damaged joint is replaced with a prosthesis. It is commonly performed on hips and knees to relieve pain and restore mobility in patients with severe arthritis or injury.</span></span></p>
<p><span style="color: rgb(28, 69, 135); font-size: 32px;"><span style="color: rgb(7, 55, 99); font-size: 18px;"><br></span></span></p>
<br><p><span style="color: rgb(28, 69, 135); font-size: 32px;"><span style="color: rgb(7, 55, 99); font-size: 32px;"><strong>Why is it Done?</strong></span></span></p>
<ul style="list-style-type: circle;">
  <li><span style="color: rgb(0, 0, 0); font-size: 32px;"><span style="font-size: 18px;">Osteoarthritis</span></span></li>
  <li><span style="color: rgb(0, 0, 0); font-size: 32px;"><span style="font-size: 18px;">Rheumatoid Arthritis</span></span></li>
  <li><span style="color: rgb(0, 0, 0); font-size: 32px;"><span style="font-size: 18px;">Severe Joint Injury or Trauma</span></span></li>
</ul>
<br><p><span style="color: rgb(28, 69, 135); font-size: 32px;"><span style="color: rgb(7, 55, 99); font-size: 32px;"><strong>How is it Done?</strong></span></span></p>
<ul style="list-style-type: circle;">
  <li><span style="color: rgb(0, 0, 0); font-size: 32px;"><span style="font-size: 18px;">An incision is made to access the joint.</span></span></li>
  <li><span style="color: rgb(0, 0, 0); font-size: 32px;"><span style="font-size: 18px;">The damaged bone and cartilage are removed.</span></span></li>
  <li><span style="color: rgb(0, 0, 0); font-size: 32px;"><span style="font-size: 18px;">A prosthetic joint is implanted to restore function and movement.</span></span></li>
</ul>
<p><span style="color: rgb(28, 69, 135); font-size: 32px;"><br></span></p>`,
    },

    {
      id: 4,
      category: "Dermatology",
      description: `<p><span style="color: rgb(28, 69, 135); font-size: 32px;"><strong>Dermatology at Drs-4you: Solutions for Skin, Hair, and Nail Conditions</strong></span></p>
  <p><span style="font-size: 18px;">What is Skin Biopsy? A skin biopsy is a procedure in which a small sample of skin is removed and examined to diagnose skin conditions, including infections, rashes, and cancers.</span></p>
  <br>
  <p><span style="color: rgb(7, 55, 99); font-size: 32px;"><strong>Why is it Done?</strong></span></p>
  <ul style="list-style-type: circle;">
    <li><span style="font-size: 18px;">Suspicious Moles or Lesions</span></li>
    <li><span style="font-size: 18px;">Chronic Skin Conditions</span></li>
    <li><span style="font-size: 18px;">Unexplained Rashes or Infections</span></li>
  </ul>
  <br>
  <p><span style="color: rgb(7, 55, 99); font-size: 32px;"><strong>How is it Done?</strong></span></p>
  <ul style="list-style-type: circle;">
    <li><span style="font-size: 18px;">Area is cleaned and numbed.</span></li>
    <li><span style="font-size: 18px;">Sample is removed using a blade or punch tool.</span></li>
    <li><span style="font-size: 18px;">Sample is analyzed in a lab for diagnosis.</span></li>
  </ul>`,
    },
    {
      id: 5,
      category: "Pediatrics",
      description: `<p><span style="color: rgb(28, 69, 135); font-size: 32px;"><strong>Pediatrics at Drs-4you: Specialized Care for Infants and Children</strong></span></p>
  <p><span style="font-size: 18px;">What is a Pediatric Wellness Exam? It is a routine check-up that monitors a child’s growth, development, and overall health. It includes physical exams, vaccinations, and screening for developmental milestones.</span></p>
  <br><p><span style="color: rgb(7, 55, 99); font-size: 32px;"><strong>Why is it Done?</strong></span></p>
  <ul style="list-style-type: circle;">
    <li><span style="font-size: 18px;">Monitor Physical and Cognitive Development</span></li>
    <li><span style="font-size: 18px;">Preventive Vaccinations</span></li>
    <li><span style="font-size: 18px;">Early Detection of Health Issues</span></li>
  </ul><br>
  <p><span style="color: rgb(7, 55, 99); font-size: 32px;"><strong>How is it Done?</strong></span></p>
  <ul style="list-style-type: circle;">
    <li><span style="font-size: 18px;">Child's height, weight, and vitals are measured.</span></li>
    <li><span style="font-size: 18px;">Vaccinations are administered as per age.</span></li>
    <li><span style="font-size: 18px;">Doctor checks milestones and provides health advice.</span></li>
  </ul>`,
    },
    {
      id: 6,
      category: "Gastroenterology",
      description: `<p><span style="color: rgb(28, 69, 135); font-size: 32px;"><strong>Gastroenterology at Drs-4you: Diagnosis and Treatment of Digestive Disorders</strong></span></p>
  <p><span style="font-size: 18px;">What is Endoscopy? An endoscopy is a non-surgical procedure that uses a flexible tube with a camera to view the digestive tract, helping in diagnosis of ulcers, reflux, or GI cancers.</span></p>
  <br><p><span style="color: rgb(7, 55, 99); font-size: 32px;"><strong>Why is it Done?</strong></span></p>
  <ul style="list-style-type: circle;">
    <li><span style="font-size: 18px;">Chronic Heartburn or GERD</span></li>
    <li><span style="font-size: 18px;">Stomach Pain or Ulcers</span></li>
    <li><span style="font-size: 18px;">Detection of Polyps or Tumors</span></li>
  </ul>
  <br><p><span style="color: rgb(7, 55, 99); font-size: 32px;"><strong>How is it Done?</strong></span></p>
  <ul style="list-style-type: circle;">
    <li><span style="font-size: 18px;">Patient is sedated for comfort.</span></li>
    <li><span style="font-size: 18px;">Scope is inserted through the mouth to examine esophagus, stomach, and duodenum.</span></li>
    <li><span style="font-size: 18px;">Biopsy may be taken if needed.</span></li>
  </ul>`,
    },
    {
      id: 7,
      category: "Pulmonology",
      description: `<p><span style="color: rgb(28, 69, 135); font-size: 32px;"><strong>Pulmonology at Drs-4you: Breathing Easy with Lung and Respiratory Care</strong></span></p>
  <p><span style="font-size: 18px;">What is a Pulmonary Function Test (PFT)? PFTs are non-invasive tests that measure how well your lungs are working. They help diagnose conditions like asthma, COPD, and other breathing disorders.</span></p>
  <br><p><span style="color: rgb(7, 55, 99); font-size: 32px;"><strong>Why is it Done?</strong></span></p>
  <ul style="list-style-type: circle;">
    <li><span style="font-size: 18px;">Shortness of Breath</span></li>
    <li><span style="font-size: 18px;">Chronic Cough or Wheezing</span></li>
    <li><span style="font-size: 18px;">Monitoring Lung Diseases</span></li>
  </ul>
  <br><p><span style="color: rgb(7, 55, 99); font-size: 32px;"><strong>How is it Done?</strong></span></p>
  <ul style="list-style-type: circle;">
    <li><span style="font-size: 18px;">Patient breathes into a mouthpiece connected to a machine.</span></li>
    <li><span style="font-size: 18px;">Test records airflow, lung volume, and capacity.</span></li>
    <li><span style="font-size: 18px;">Results help in diagnosis and treatment planning.</span></li>
  </ul>`,
    },
    {
      id: 8,
      category: "Psychiatry",
      description: `<p><span style="color: rgb(28, 69, 135); font-size: 32px;"><strong>Psychiatry at Drs-4you: Compassionate Mental Health Support</strong></span></p>
  <p><span style="font-size: 18px;">Our mental health professionals offer therapy and treatment for conditions like anxiety, depression, and other psychiatric disorders through secure online consultations.</span></p>
  <br><br><p><span style="color: rgb(7, 55, 99); font-size: 32px;"><strong>Why Choose Psychiatry Services?</strong></span></p>
  <br><ul style="list-style-type: circle;">
    <li><span style="font-size: 18px;">Access to licensed therapists and psychiatrists</span></li>
    <li><span style="font-size: 18px;">Confidential, virtual sessions</span></li>
    <li><span style="font-size: 18px;">Support for a range of mental health conditions</span></li>
  </ul>`,
    },
    {
      id: 9,
      category: "Endocrinology",
      description: `<p><span style="color: rgb(28, 69, 135); font-size: 32px;"><strong>Endocrinology at Drs-4you: Expert Hormonal Health Care</strong></span></p>
  <p><span style="font-size: 18px;">Endocrinologists specialize in treating hormonal imbalances including diabetes, thyroid issues, and metabolic disorders through virtual consultations.</span></p>
  <p><span style="color: rgb(7, 55, 99); font-size: 32px;"><strong>Why Choose Endocrinology Services?</strong></span></p>
  <ul style="list-style-type: circle;">
    <li><span style="font-size: 18px;">Personalized treatment plans for hormonal disorders</span></li>
    <li><span style="font-size: 18px;">Management of chronic conditions like diabetes</span></li>
    <li><span style="font-size: 18px;">Guidance on thyroid and adrenal health</span></li>
  </ul>`,
    },
    {
      id: 9,
      category: "Endocrinology",
      description: `<p><span style="color: rgb(28, 69, 135); font-size: 32px;"><strong>Endocrinology at Drs-4you: Expert Hormonal Health Care</strong></span></p>
  <p><span style="font-size: 18px;">Endocrinologists specialize in treating hormonal imbalances including diabetes, thyroid issues, and metabolic disorders through virtual consultations.</span></p>
  <p><span style="color: rgb(7, 55, 99); font-size: 32px;"><strong>Why Choose Endocrinology Services?</strong></span></p>
  <ul style="list-style-type: circle;">
    <li><span style="font-size: 18px;">Personalized treatment plans for hormonal disorders</span></li>
    <li><span style="font-size: 18px;">Management of chronic conditions like diabetes</span></li>
    <li><span style="font-size: 18px;">Guidance on thyroid and adrenal health</span></li>
  </ul>`,
    },
    {
      id: 10,
      category: "Oncology",
      description: `<p><span style="color: rgb(28, 69, 135); font-size: 32px;"><strong>Oncology at Drs-4you: Remote Cancer Care and Consultations</strong></span></p>
  <p><span style="font-size: 18px;">Cancer specialists provide virtual consultations to review symptoms, diagnostic tests, and treatment options with compassion and care.</span></p>
  <p><span style="color: rgb(7, 55, 99); font-size: 32px;"><strong>Why Choose Oncology Services?</strong></span></p>
  <ul style="list-style-type: circle;">
    <li><span style="font-size: 18px;">Second opinions from oncology experts</span></li>
    <li><span style="font-size: 18px;">Support during treatment and recovery</span></li>
    <li><span style="font-size: 18px;">Remote monitoring and guidance</span></li>
  </ul>`,
    },
    {
      id: 11,
      category: "Ophthalmology",
      description: `<p><span style="color: rgb(28, 69, 135); font-size: 32px;"><strong>Ophthalmology at Drs-4you: Eye Health from Anywhere</strong></span></p>
  <p><span style="font-size: 18px;">Our eye specialists help diagnose and manage vision problems including infections, refractive errors, and chronic eye diseases.</span></p>
  <p><span style="color: rgb(7, 55, 99); font-size: 32px;"><strong>Why Choose Ophthalmology Services?</strong></span></p>
  <ul style="list-style-type: circle;">
    <li><span style="font-size: 18px;">Consultation for blurry vision, eye pain, or dryness</span></li>
    <li><span style="font-size: 18px;">Routine vision screenings and eye exams</span></li>
    <li><span style="font-size: 18px;">Recommendations for corrective lenses or treatment</span></li>
  </ul>`,
    },
    {
      id: 12,
      category: "Urology",
      description: `<p><span style="color: rgb(28, 69, 135); font-size: 32px;"><strong>Urology at Drs-4you: Urinary and Reproductive Health Consultations</strong></span></p>
  <p><span style="font-size: 18px;">Urologists are available to address issues like urinary tract infections, kidney problems, and male reproductive health through online sessions.</span></p>
  <p><span style="color: rgb(7, 55, 99); font-size: 32px;"><strong>Why Choose Urology Services?</strong></span></p>
  <ul style="list-style-type: circle;">
    <li><span style="font-size: 18px;">Consult on urinary symptoms and conditions</span></li>
    <li><span style="font-size: 18px;">Treatment for prostate or kidney issues</span></li>
    <li><span style="font-size: 18px;">Discreet, expert-led virtual appointments</span></li>
  </ul>`,
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
      
    </>
  );
};

export default SpecialtiesInnerPage;
