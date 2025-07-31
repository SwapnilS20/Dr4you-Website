import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import RichTextRenderer from "../../components/RichTextRenderer";


const PolicyPage = () => {
  const policyContent = useSelector((state) => state.home.policy); // Array
  const { type } = useParams(); // URL param (e.g. "cookie", "terms and condition")

  const lowerCaseType = type?.toLowerCase();

  // Find the matching document by comparing type
  const data = policyContent.find(
    (doc) => doc.type.toLowerCase() === lowerCaseType
  );
  console.log(type);
  
  console.log(policyContent);
  
  console.log(data);
  
  if (!data) {
    return (
      <div className="p-8 text-center">
        <h1 className="text-2xl font-bold text-red-600">
          404 - Policy Not Found
        </h1>
        <p className="mt-2 text-gray-600">
          The policy page you're looking for does not exist.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold text-blue-900 mb-6 capitalize">
        {data.type}
      </h1>
      <div className="prose prose-lg text-gray-800">
        <RichTextRenderer content={data.content} />
      </div>
    </div>
  );
};

export default PolicyPage;
