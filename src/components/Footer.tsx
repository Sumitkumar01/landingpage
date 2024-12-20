import SectionWithContainer from "./SectionWithContainer";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoLinkedin } from "react-icons/io5";
import Link from "next/link";
import { IoIosCall } from "react-icons/io";
import { SiMinutemailer } from "react-icons/si";
import { FaLocationArrow } from "react-icons/fa";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  const socialMedia = [
    {
      id: 1,
      icon: <FaFacebookF />,
      link: "#",
    },
    {
      id: 2,
      icon: <FaTwitter />,
      link: "#",
    },
    {
      id: 3,
      icon: <AiFillInstagram />,
      link: "#",
    },
    {
      id: 4,
      icon: <IoLogoLinkedin />,
      link: "#",
    },
  ];

  const getInTouch = [
    {
      id: 1,
      icon: <FaLocationArrow />,
      text: "address",
    },
    {
      id: 2,
      icon: <SiMinutemailer />,
      text: "WmF8B@example.com",
    },
    {
      id: 3,
      icon: <IoIosCall />,
      text: "+234 123 456 7890",
    },
  ];

  const learnMore = [
    {
      id: 1,
      text: "About Us",
      link: "#",
    },
    {
      id: 2,
      text: "Our Story",
      link: "#",
    },
    {
      id: 3,
      text: "Testimonials",
      link: "#",
    },
  ];
  const policy = [
    {
      id: 1,
      text: "Terms of Use",
      link: "#",
    },
    {
      id: 2,
      text: "Privacy Policy",
      link: "#",
    },
  ];
  return (
    <footer className="bg-clr1 pb-10">
      <SectionWithContainer sectionClassName="bg-clr1 text-white">
        <div className=" flex items-center lg:justify-between justify-center gap-5">
          <h2 className="heading3 tracking-wide lg:w-[60%] ">
            Join our community by using our services and grow your business.
          </h2>
          <button className="bg-clr2 w-max text-white px-4 py-2 rounded-full">
            Get Started
          </button>
        </div>
        <div className="my-6 mx-1 w-full bg-white h-[1px]" />
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-16">
          <div className="flex flex-col gap-4">
            <div>logo</div>
            <p className="text-md text-gray-300">
              &copy; {currentYear} Freelancer All rights reserved.
            </p>
            <ul className="flex gap-4 items-center">
              {socialMedia.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.link}
                    className="text-lg w-[35px] text-gray-300 hover:text-white aspect-square flex justify-center items-center  border rounded-lg hover:bg-clr2 duration-300"
                  >
                    {item.icon}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* get in touch */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-bold">Get in touch</h3>
            <ul className="flex flex-col gap-4">
              {getInTouch.map((item) => (
                <li
                  key={item.id}
                  className="flex items-center gap-2 text-base text-gray-300"
                >
                  <span>{item.icon}</span>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
          {/* learn more */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-bold">Learn More</h3>
            <ul className="flex flex-col gap-4">
              {learnMore.map((item) => (
                <li key={item.id}>
                  <Link href={item.link} className="text-base text-gray-300">
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* policy */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-bold">Policy</h3>
            <ul className="flex flex-col gap-4">
              {policy.map((item) => (
                <li key={item.id}>
                  <Link href={item.link} className="text-base text-gray-300">
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </SectionWithContainer>
    </footer>
  );
};

export default Footer;
