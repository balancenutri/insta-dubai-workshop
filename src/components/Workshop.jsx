import React from "react";
import BannerImage from "../assets/banner_image.png";
import BnLogo from "../assets/bn_logo.png";
import IWDubai from "../assets/iwdubai.png";
import Burjuman from "../assets/burjuman.png";
import { FiCalendar } from "react-icons/fi";
import { GiPositionMarker } from "react-icons/gi";
import { FaClipboardCheck, FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function WorkshopCard({ setModalControl }) {
  return (
    // <div className="flex flex-col items-center justify-center min-h-screen bg-zinc-50 p-4">
    <div className="w-full max-w-md bg-white p-4 shadow-xl rounded-xl mx-3 ">
      <h1 className="text-lg sm:text-xl  text-center bg-[#3FBEC9] -mx-4 -mt-6 py-4 font-bold text-white mb-4 rounded-t-xl shadow-lg">
        Nutrition Workshop hosted by IWD
      </h1>
      <div className="w-full relative h-48 bg-gray-300 flex items-center justify-center mb-4 md:mb-3 overflow-hidden rounded-lg">
        <img
          alt="Workshop Image"
          className="object-cover w-full h-full "
          height="400"
          loading="lazy"
          src={BannerImage}
          width="600"
        />
        <img
          alt="Workshop Image"
          className="absolute top-2 left-2 rounded-lg object-cover h-10 w-10 "
          height="40"
          loading="lazy"
          src={BnLogo}
          width="40"
        />
        <img
          alt="Workshop Image"
          loading="lazy"
          className="absolute top-2 right-2  rounded-lg object-cover h-10 w-10 "
          src={IWDubai}
        />
      </div>
      <div className="text-center">
        <div className="rounded-lg bg-yellow-50 py-4 border-2 shadow-lg">
          <p className="text-gray-800 font-inter text-[13px] font-medium px-4">
            <span className="text-gray-800 text-center font-inter text-[15px] font-bold ">
             Meet Khyati Rupani,
            </span>{" "}Ex-Chief Dietitian at Lilavati Hospital. She is an Award-Winning nutritionist who has lost 40kg herself.
          </p>
          <p className="text-gray-800 font-inter text-[13px] sm:text-[15px] font-bold underline decoration-solid underline-offset-auto decoration-from-font">
            Trusted by 5,000+ clients in the UAE since 2014
          </p>
        </div>
      </div>
      <div>
      <h2 className="text-center italic text-[17px] font-inter font-semibold mt-4 text-white bg-[#221800] py-1 -mx-4">
          FREE WORKSHOP<br />for Weight loss & Anti-Inflammatory Diets
        </h2>
        <div className="flex items-center justify-center py-1 mt-2 gap-1">
          <p className="text-[#00B6C1] font-medium font-inter">Dates: </p>
          <p className="text-[#303030] font-medium font-inter">
            30th January, 2025
          </p>
        </div>
        <div className="flex items-center justify-center py-1 gap-1">
          <p className="text-[#00B6C1] font-medium font-inter">Time: </p>
          <p className="text-[#303030] font-medium font-inter">
            10:30 a.m. to 12:30 p.m.
          </p>
        </div>
        <div className="border-[#0095A8] border-2 mx-4 py-1.5 rounded-lg my-2 shadow-lg">
          <div className="flex items-center justify-center gap-1">
            <p className="text-[#00B6C1] font-medium font-inter">
              Venue Partner:{" "}
            </p>
            <p className="text-[#303030] font-medium font-inter">
              'B Hub, BurJuman'
            </p>
          </div>

          <img
            alt="Workshop Image"
            loading="lazy"
            className="h-6 mx-auto rounded-lg object-cover"
            src={Burjuman}
          />
        </div>
      </div>
      <div className="flex justify-center m-3 mt-4">
        <button
          className="bg-[#E6A200] rounded-lg text-[#FFFFFF] font-inter text-xl px-4 pt-1 pb-2 font-semibold font-inter"
          onClick={() => setModalControl(true)}
        >
          Register Now
        </button>
      </div>


      <p className="text-gray-800 text-center font-inter text-[12px] font-medium italic">
        No charges for the event. Refreshments will be provided*
      </p>
    </div>
  );
}
