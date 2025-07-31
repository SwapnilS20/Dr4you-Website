
import SocialMediaIcons from "../SocialMediaIcons";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Footer = () => {

  const footerData = useSelector((state) => state.headerFooter.footer);

  const navigate = useNavigate();

  return (
    <footer className="  bg-Primary-Blue-50 w-full py-4 xl:px-32">
      <div className=" flex md:flex-row flex-col justify-between border-b-2 border-Primary-Blue-400 border-opacity-40 pb-10 p-4">
        {/* logo name and tagline */}
        <div className=" flex flex-col gap-8 border-b-2 border-Primary-Blue-400 border-opacity-40 pb-10 md:pb-0 md:border-b-0 md:w-[30%]">
          <div>
            <img src={`http://localhost:1337${footerData?.logo?.url}`} alt="" className=" w-[250px] " />
          </div>
          <p className=" font-manrope text-base max-w-[269px]">
            {footerData?.description}
          </p>
        </div>

        {/* quick Links  */}
        <div className=" grid grid-cols-2 md:grid-cols-3 lg:gap-16 gap-8  ">
          {/* support  */}
          <div>
            <span className=" text-Primary-Blue-400 text-base font-bold">
              {footerData?.links_title_1}
            </span>
            <div>
              <ul className=" flex flex-col gap-2 mt-4 text-base">
                {footerData?.support?.map((data, i) => (
                  <li
                    key={i}
                    className=" font-manrope text-base text-Neutral-900 hover:cursor-pointer"
                    onClick={() => navigate(`${data.url}`)}
                  >
                    {data.text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* Services  */}
          <div>
            <span className=" text-Primary-Blue-400 text-base font-bold">
              {footerData?.links_title_2}
            </span>
            <div>
              <ul className=" flex flex-col gap-2 mt-4 text-base">
                {footerData?.services_links?.map((data, i) => (
                  <li
                    key={i}
                    className=" font-manrope text-base text-Neutral-900 hover:cursor-pointer"
                    onClick={() => navigate(`category${data.url}`)}
                  >
                    {data.text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* Legal  */}
          <div>
            <span className=" text-Primary-Blue-400 text-base font-bold">
              {footerData?.links_title_3}
            </span>
            <div>
              <ul className=" flex flex-col gap-2 mt-4 text-base">
                {footerData?.policy_links?.map((data, i) => (
                  <li
                    key={i}
                    className=" font-manrope text-base text-Neutral-900 hover:cursor-pointer"
                    onClick={() => navigate(`policy${data.url}`)}
                  >
                    {data.text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Social Media Links and Copyright */}
      <div className=" flex flex-col md:flex-row gap-4  justify-between items-center py-4 px-4">
        <div className=" flex gap-6 text-4xl">
          <SocialMediaIcons data={footerData?.social_icons} />
        </div>
        <p className=" font-manrope text-base text-Neutral-900">
          {footerData?.copyright}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
