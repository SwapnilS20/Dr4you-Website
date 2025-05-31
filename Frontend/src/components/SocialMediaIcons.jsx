import React from 'react';
import 'remixicon/fonts/remixicon.css';

const iconColors = {
  facebook: 'bg-[#3b5999]',
  twitter: 'bg-[#55acee]',
  linkedin: 'bg-[#0077b5]',
  google: 'bg-[#dd4b39]',
  instagram: 'bg-[#E4405F]',
};

const icons = [
  { name: 'facebook', class: 'ri-facebook-fill' , link : 'https://www.facebook.com/share/1AgFEBjDf1/' },
  { name: 'twitter', class: 'ri-twitter-fill' ,link:'#'},
  { name: 'linkedin', class: 'ri-linkedin-fill' , link:'https://www.linkedin.com/company/ibhl/' },
  { name: 'google', class: 'ri-google-fill', link:'https://www.2ndro.com'},
  { name: 'instagram', class: 'ri-instagram-line' ,link:'https://www.instagram.com/2ndr.o?igsh=ZnR6b3o5eW1uOHFy'}, 
];

const SocialMediaIcons = ({setgap}) => {
  return (
    <div className="flex justify-center items-center">
      <ul className={`flex  ${setgap ? 'gap-2' :'gap-4'} `}>
        {icons.map((icon, idx) => (
          <li key={idx} className="list-none">
            <a
              href={icon.link}
              target='_blank'
              className={`
                group relative w-10 h-10 flex items-center justify-center 
                bg-white  ${setgap ? 'bg-amber-50' :''}  rounded-full overflow-hidden
              `}
            >
              {/* Gradient background on hover */}
              <span
                className={`
                  absolute inset-0 transition-all duration-500 top-full group-hover:top-0 z-0 
                  ${iconColors[icon.name]}
                `}
              ></span>

              {/* Icon */}
              <i
                className={`
                  ${icon.class} text-[25px] text-[#262626] 
                  z-10 transition-transform duration-500 group-hover:text-white 
                  group-hover:rotate-[360deg]
                `}
              ></i>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialMediaIcons;
