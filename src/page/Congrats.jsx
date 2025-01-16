import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaLocationDot } from "react-icons/fa6";
import { FiCalendar } from "react-icons/fi";
import { MdOutlineTopic } from "react-icons/md";
import { PiSealCheckFill } from "react-icons/pi";
import { useLocation, useNavigate } from "react-router-dom";

function App() {
  const location = useLocation();
  const state = location.state;
  const navigate = useNavigate();

  useEffect(() => {
    if (!state?.workshop_id) {
      navigate("/", { replace: true, state: null });
    }
  }, [state, navigate]);

  const handleClick = () => {
    navigate("/", { replace: true, state: null });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center h-screen p-4">
      {(
        <div className="max-w-lg w-full bg-white backdrop-blur-sm rounded-2xl shadow-2xl p-8 text-center relative overflow-hidden">
          <div className="mb-6">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <PiSealCheckFill className="w-16 h-16 text-green-600" />
            </div>
          </div>

          <h1 className="text-3xl font-bold text-indigo-600 bg-clip-text mb-4">
            Thank You!
          </h1>

          <p className="text-lg text-gray-600 mb-4">
            You've successfully registered for the workshop
          </p>

          <div className="flex flex-col items-start justify-between rounded-lg bg-white gap-y-3 mb-4">
            <div className="flex items-center space-x-3">
              <div className="text-green-600 flex text-2xl w-7">
                <FiCalendar className="w-6 h-6" />
              </div>
              <div>
                <p className="text-red-600 font-semibold">30th Jan, 10:30 AM</p>
              </div>
            </div>
            <div className="flex item-center space-x-3">
              <div className="text-blue-600 text-2xl w-7">
                <FaLocationDot className="w-5 h-5" />
              </div>
              <div>
                <p className="md:text-base text-gray-800 font-semibold">
                B Hub, Burjuman, Dubai
                </p>
              </div>
            </div>
            <div className="flex item-center space-x-3">
              <div className="text-blue-600 text-2xl w-7">
                <MdOutlineTopic className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-left md:text-base text-gray-800 font-semibold">
                  How to lose weight without going to the gym?
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <button
              className="bg-[#3FBEC9] text-white px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity"
              onClick={handleClick}
            >
              Alright!
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
