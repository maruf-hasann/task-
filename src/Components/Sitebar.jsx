import React from 'react';
import Speed from '../assets/icon/speed.png'
import { IoIosArrowBack } from "react-icons/io";
import { HiOutlineClock, HiOutlineDocumentReport } from "react-icons/hi";
import { BsActivity, BsPeople } from "react-icons/bs";
import { CiLocationArrow1 } from "react-icons/ci";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { AiOutlineSchedule } from "react-icons/ai";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { LuSettings2 } from "react-icons/lu";
const Sitebar = () => {
    return (
      <div className="w-[350px] ps-8 pe-4 bg-[#f2f5f8] h-screen">
        <h3 className='font-extrabold text-2xl my-4'>LOGO</h3>
        <div className="space-y-6">
          <div>
            <div className="flex items-center justify-between ">
              <div className="flex gap-2">
                <img src={Speed} width="25px" />
                <h2 className="font-semibold text-[18px]">Dashboard</h2>
              </div>
            </div>
          </div>{" "}
          <div>
            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                <HiOutlineClock size={25} />
                <h2 className="font-semibold text-[18px]">Timesheets</h2>
              </div>
              <IoIosArrowBack />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                <BsActivity size={25} />
                <h2 className="font-semibold text-[18px]">Activity</h2>
              </div>
              <IoIosArrowBack />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                <CiLocationArrow1 size={25} />
                <h2 className="font-semibold text-[18px]">Location</h2>
              </div>
              <IoIosArrowBack />
            </div>
          </div>{" "}
          <div>
            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                <AiOutlineFundProjectionScreen size={25} />
                <h2 className="font-semibold text-[18px]">
                  Project management
                </h2>
              </div>
              <IoIosArrowBack />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                <AiOutlineSchedule size={25} />
                <h2 className="font-semibold text-[18px]">Schedules</h2>
              </div>
              <IoIosArrowBack />
            </div>
          </div>{" "}
          <div>
            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                <HiOutlineDocumentReport size={25} />
                <h2 className="font-semibold text-[18px]">Reports</h2>
              </div>
              <IoIosArrowBack />
            </div>
          </div>{" "}
          <div>
            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                <BsPeople size={25} />
                <h2 className="font-semibold text-[18px]">People</h2>
              </div>
              <IoIosArrowBack />
            </div>
          </div>{" "}
          <div>
            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                <AiOutlineDollarCircle size={25} />

                <div>
                  <h2 className="font-semibold text-[18px]">Financials</h2>
                  <ul className="ms-3 text-[#717f90] font-semibold">
                    <li>Payroll</li>
                    <li>Send payments</li>
                    <li>Past payments</li>
                    <li className=" rounded-xl text-[#2aa7ff] ">
                      Invoices
                    </li>
                    <li>Expenses</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                <LuSettings2 size={25} />
                <h2 className="font-semibold text-[18px]">
                  Settings & Policies
                </h2>
              </div>
              <IoIosArrowBack />
            </div>
          </div>
        </div>
      </div>
    );
};

export default Sitebar;