import React from 'react';
import { HiOutlineClock, HiOutlineDocumentReport } from "react-icons/hi";
import { BsArrowUpRight } from "react-icons/bs";
import { LuMessageSquare, LuBellRing } from "react-icons/lu";
import { PiGift } from "react-icons/pi";
import { BiRectangle } from "react-icons/bi";
import { CgMenuGridO } from "react-icons/cg";
import { AiOutlineCalendar } from "react-icons/ai";
import { MdKeyboardArrowDown } from "react-icons/md";
import avater from './../../../assets/icons8-circled-user-male-skin-type-6-96.png'
import setting from '../../../assets/s.png'
import calenderX from '/c.png'
import kk from '/k.png'
const Home = () => {
    return (
      <>
        {" "}
        <div className="mx-10 mt-9 w-full">
          <div className="flex justify-between">
            <div className="flex gap-3 border px-2 py-2 rounded-xl">
              <HiOutlineClock size={25} />
              <h5 className="text-[#2aa7ff] text-[18px]">2:44:15</h5>
              <BsArrowUpRight className="blue" size={25} />
            </div>
            <div className="flex items-center gap-4">
              <LuMessageSquare size={25} />
              <LuBellRing size={25} />
              <PiGift size={25} />
              <CgMenuGridO size={25} />
              <img src={avater} width={50} />
              <div><img src={kk} alt="" /></div>
            </div>
          </div>
          <hr className="mt-3"></hr>
          <div className="flex justify-between items-center">
            <h3 className="text-[32px] ">Invoices</h3>
            <div className="flex gap-2 setting">
              <img src={setting} width={25} alt="" />
              Setting
            </div>
          </div>
          <div className="flex gap-3 mt-4">
            <div className="text-[#2aa7ff] font-semibold">CLIENT (25)</div>{" "}
            <div className=" font-semibold">TEAM (5)</div>
          </div>
          <div className="flex gap-6 my-4">
            <div className=" flex rounded-lg  justify-between w-[280px] border border-[#d9dde8] px-6 py-2 font-semibold">
              <h3> Jan 1 - Mar 29,2021</h3>
              <AiOutlineCalendar  size={20} />
            </div>
            <div className="text-center">
              <h4 className="font-semibold">OUTSTANDING</h4>
              <strong className="text-[19px]">$321.30</strong>
            </div>{" "}
            <div className="text-center">
              <h4 className="font-semibold">PAID</h4>
              <strong className="text-[#18d06b] text-[19px]">$14,258.73</strong>
            </div>
          </div>
          {/*  */}
          <div className="flex justify-between ">
            <div className="flex  gap-4">
              <div>
                <h4 className="mb-2 font-semibold">CLIENTS</h4>
                <select className="select w-[260px] max-w-xs border-spacing-4 border-[#d8dee5]">
                  <option disabled selected>
                    All Client
                  </option>
                  <option>Homer</option>
                  <option>Marge</option>
                  <option>Bart</option>
                  <option>Lisa</option>
                  <option>Maggie</option>
                </select>
              </div>
              <div>
                <h4 className="mb-2 font-semibold">STATUS</h4>
                <select className="select w-[260px] max-w-xs border-spacing-4 border-[#d8dee5]">
                  <option disabled selected>
                    All
                  </option>
                  <option>Homer</option>
                  <option>Marge</option>
                  <option>Bart</option>
                  <option>Lisa</option>
                  <option>Maggie</option>
                </select>
              </div>
            </div>
            <div>
              <button className="bg-[#2aa7ff] px-4 py-2 rounded-md text-white font-semibold">
                New Invoice
              </button>
            </div>
          </div>
          {/* Table */}
          <div className="overflow-x-auto mt-4">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>
                    <BiRectangle size={20} />
                  </th>
                  <th>Invoice</th>
                  <th>Client</th>
                  <th>Issue date</th>
                  <th>Days old</th>
                  <th>Total</th>
                  <th>Paid</th>
                  <th>Status</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                <tr>
                  <th>
                    <BiRectangle size={20} />
                  </th>
                  <td className="text-[#2aa7ff]">HU1514</td>
                  <td>Jane Doe</td>
                  <td>23/4/21</td>
                  <td>4</td>
                  <td>$1469.23</td>
                  <td>$1469.23</td>
                  <td>
                    <button className="bg-[#18d06b] rounded-sm text-white px-2 py-1">
                      Paid
                    </button>
                  </td>
                  <td>
                    <button className=" flex items-center gap-1 border border-[#d4dce9] px-4 py-1 ">
                      Action <MdKeyboardArrowDown />
                    </button>
                  </td>
                </tr>
                <tr>
                  <th>
                    <BiRectangle size={20} />
                  </th>
                  <td className="text-[#2aa7ff]">HU1495</td>
                  <td>Tampa General Hospital</td>
                  <td>16/4/21</td>
                  <td>11</td>
                  <td>$2169.23</td>
                  <td>$2169.23</td>
                  <td>
                    <button className="bg-[#18d06b] rounded-sm text-white px-2 py-1">
                      Paid
                    </button>
                  </td>
                  <td>
                    <button className=" flex items-center gap-1 border border-[#d4dce9] px-4 py-1 ">
                      Action <MdKeyboardArrowDown />
                    </button>
                  </td>
                </tr>
                <tr>
                  <th>
                    <BiRectangle size={20} />
                  </th>
                  <td className="text-[#2aa7ff]">HU1495</td>
                  <td>City Of Chicago</td>
                  <td>16/4/21</td>
                  <td>11</td>
                  <td>$2169.23</td>
                  <td>$2169.23</td>
                  <td>
                    <button className="bg-[#aebed3] rounded-sm text-white px-2 py-1">
                      Draft
                    </button>
                  </td>
                  <td>
                    <button className=" flex items-center gap-1 border border-[#d4dce9] px-4 py-1 ">
                      Action <MdKeyboardArrowDown />
                    </button>
                  </td>
                </tr>{" "}
                <tr>
                  <th>
                    <BiRectangle size={20} />
                  </th>
                  <td className="text-[#2aa7ff]">HU1486</td>
                  <td>Kontrast</td>
                  <td>31/4/21</td>
                  <td>11</td>
                  <td>$5169.23</td>
                  <td>$4169.23</td>
                  <td>
                    <button className="bg-[#18d06b] rounded-sm text-white px-2 py-1">
                      Paid
                    </button>
                  </td>
                  <td>
                    <button className=" flex items-center gap-1 border border-[#d4dce9] px-4 py-1 ">
                      Action <MdKeyboardArrowDown />
                    </button>
                  </td>
                </tr>{" "}
                <tr>
                  <th>
                    <BiRectangle size={20} />
                  </th>
                  <td className="text-[#2aa7ff]">HU1486</td>
                  <td>Jamie'S Design</td>
                  <td>31/4/21</td>
                  <td>11</td>
                  <td>$4169.23</td>
                  <td>$2169.23</td>
                  <td>
                    <button className="bg-[#18d06b] rounded-sm text-white px-2 py-1">
                      Paid
                    </button>
                  </td>
                  <td>
                    <button className=" flex items-center gap-1 border border-[#d4dce9] px-4 py-1 ">
                      Action <MdKeyboardArrowDown />
                    </button>
                  </td>
                </tr>
                <tr>
                  <th>
                    <BiRectangle size={20} />
                  </th>
                  <td className="text-[#2aa7ff]">HU1486</td>
                  <td>Endava</td>
                  <td>31/4/21</td>
                  <td>11</td>
                  <td>$4169.23</td>
                  <td>$2169.23</td>
                  <td>
                    <button className="bg-[#18d06b] rounded-sm text-white px-2 py-1">
                      Paid
                    </button>
                  </td>
                  <td>
                    <button className=" flex items-center gap-1 border border-[#d4dce9] px-4 py-1 ">
                      Action <MdKeyboardArrowDown />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </>
    );
};

export default Home;