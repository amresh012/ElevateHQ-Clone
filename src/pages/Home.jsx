/* eslint-disable react/no-unknown-property */
import Button from "../components/Button";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { FaArrowRight, FaTelegramPlane } from "react-icons/fa";
import img1 from '../assets/Group 3.png'
import img2 from '../assets/Group 4.png'
import { partner } from "../constants";
import Features from "../components/Features";
import DataVisual from "../components/DataVisual";
const Home = () => {
  let w = window.innerWidth
  return (
    <>
      <Header
        classname="text-white font-bold p-4"
        text="How much commissions to pay your partners? Learn the math and logic behind it. Read here"
        icon={<FaArrowRight />}
      />
      <Navbar />
      <div className="hero flex items-start justify-center w-full lg:px-44 h-screen bg-gradient-to-tl to-white via-purple-400/20 from-white ">
        <img src={img1} alt="" className=" w-20 mt-20 hidden lg:block" />
        <div className=" flex flex-col items-center justify-center  lg:w-fit w-full mt-12">
          <h1 className="flex flex-col items-center justify-center w-fit leading-tight">
            <span className="font-medium  text-center text-[2rem] lg:text-[4rem] text-transparent bg-clip-text bg-gradient-to-l to-blue-500 via-purple-500 via-fuchsia-500 from-yellow-400 ">
              Sales Commission
            </span>
            <span className="flex flex-col leading-tight text-center text-[2rem] lg:text-[4rem] font-bold capitalize ">
              Software for
              <span className="lg:text-[4rem] text-[2rem] font-bold">
                modern sales teams
              </span>
            </span>
          </h1>
          <p className=" px-4 lg:px-12 text-gray-500 text-center lg:text-xl">
            {" "}
            Your commissions not running the way you want on spreadsheets?
            Switch to our flexible sales compensation software.
          </p>
          <div className="button mt-12 flex flex-col lg:flex-row  items-center justify-around  gap-4 lg:gap-12">
            <div className="bg-slate-900 hover:bg-slate-800 px-6 py-4 flex items-center justify-center">
              <Button
                title="Schedule demo"
                classname="text-white flex items-center gap-2 text-xl"
                icon={<FaTelegramPlane />}
              />
            </div>
            <button className="flex items-center gap-2 bg-[rgb(34,29,33)] px-4 py-3 text-white">
              <span className="text-3xl">🥇</span>
              <div className="flex flex-col items-start justify-start">
                <p className="text-[9px] font-semibold">PRODUCT HUNT</p>
                <p>#1 Product Of the Day</p>
              </div>
            </button>
          </div>
          <div className=" flex items-center justify-center relative">
            <img
              src="https://www.elevate.so/assets/images/hero-banner2.webp"
              alt=""
              className="lg:block hidden"
            />
            {w >= 900 && (
              <div className="absolute bottom-[-4rem] left-[-5rem] h-64 w-64 rounded-full -z-10 animate-bounce duration-500 delay-500 bg-gradient-to-l to-blue-400 via-purple-400 from-yellow-200"></div>
            )}
          </div>
        </div>
        <img src={img2} alt="" className=" w-20 mt-[12rem] hidden lg:block" />
      </div>
      {/*  */}
      <div className="awardimg flex items-center justify-center lg:mt-[30rem]">
        {w >= 900 ? (
          <img
            src="https://res.cloudinary.com/dtnd45bo1/image/upload/v1714456151/Group_8101_scqbkr_1_yyddh1.webp"
            alt="award-imge"
            className="px-44"
          />
        ) : (
          <img
            src="https://res.cloudinary.com/dtnd45bo1/image/upload/v1694753848/Frame_7_u5ajmt.png"
            alt="mobile-award-imge"
          />
        )}
      </div>
      <div className="flex items-center flex-col  gap-12 mt-[15rem]">
        <h1 className="lg:text-[3rem] font-semibold">
          Most loved sales compensation software
        </h1>
        <div className="flex w-[80vw] gap-12">
          {partner.map((url) => (
            <div direction="right" key={url.id}>
              <img
                src={url.url}
                alt=""
                className="h-20 grayscale hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      </div>
      <Features />
      <DataVisual/>
    </>
  );
};

export default Home;
