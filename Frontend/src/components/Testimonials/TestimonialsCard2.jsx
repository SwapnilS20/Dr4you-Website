import { RiStarFill, RiPlayCircleFill } from "react-icons/ri";
import { LuCirclePlay } from "react-icons/lu";
import img from "../../assets/Images/commentImg4.jpg";

const TestimonialCard2 = () => {
  return (
    <div className="relative max-w-[450px] mx-auto my-10"> {/* Make each card relative */}
      {/* Avatar Image Container */}
      <div className="absolute -top-11 left-4 w-[100px] h-[100px] rounded-full bg-gray-100 p-2  z-10">
        <div className="w-full h-full rounded-full overflow-hidden bg-white p-1 shadow-xl ">
          <img
            src={img}
            alt="User Avatar"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
      </div>



      <div className=" absolute -top-11 p-2 left-28 flex justify-start items-center gap-2 bg-white rounded-3xl w-[335px] shadow-sm ">
          {Array.from({ length: 5 }).map((_, index) => (
            <RiStarFill key={index} className="text-yellow-400 text-md" />
        ))}
        <span className="text-gray-400 text-sm "> ( 4.7)</span>
        </div>

        <div className=" flex justify-center -bottom-3 -right-4 items-center w-[50px] h-[50px] absolute rounded-full bg-Primary-Blue-950 z-10">
            <span className=" text-white "><LuCirclePlay className=" text-4xl" /></span>
        </div>

      {/* Card */}
      <div className="flex top-0 flex-col gap-2 border bg-white rounded-xl shadow-lg pt-[24px] px-6 pb-6">


        {/* Content */}
        <h2 className="text-center font-bold">Tejas Babar</h2>
        <p className="text-justify mt-2 text-sm text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ipsum possimus fuga. Ab delectus, in
          consectetur ex quam laudantium nam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat illum
          perferendis incidunt optio provident cumque, dicta officia quo dolore enim!
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard2;
