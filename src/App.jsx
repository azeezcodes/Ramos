import { useState, useEffect } from "react";
//import { motion } from "framer-motion"
import "./index.css";
import AOS from "aos";
import { TiPlus } from "react-icons/ti";
import { PiLinkSimpleBold } from "react-icons/pi";

import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);
  const [count, setCount] = useState(0);
  return (
    <main className="w-full m-0 p-0">
      {/* NAVBAR */}
      <div className="navbar  bg-black rounded-3xl text-white h-[70px] w-full flex items-center justify-between pl-5 pr-2 py-2">
        <div className="logo flex items-center gap-2">
          <PiLinkSimpleBold color="white" size={12} />
          <p className="font-semibold text-lg">ramos</p>
        </div>
        <div className="menu bg-[#252525] w-1/2 flex justify-between text-sm h-full items-center px-4 rounded-3xl">
          <p>Dashboard</p>
          <p>Reports</p>
          <p>Documents</p>
          <p>History</p>
          <p>Settings</p>
        </div>
        <div className="button bg-white h-full rounded-2xl w-28 flex items-center justify-center text-black ">
          <p className="text-sm">Sign Up</p>
        </div>
      </div>
      {/* ............HERO */}
      <div data-aos="fade-up"   className="w-full flex justify-center mt-16 flex-col ">
        <div className="flex item-start gap-4 mx-auto pl-16">
          <img
            src="/twoRound.png"
            alt=""
            className="w-[198px] object-contain -mt-20"
          />
          <p className="text-[125px] font-light mt-10 tracking-tight">
            Analytics
          </p>
          <img
            src="/rectop.png"
            alt=""
            className="w-[468px] object-contain  mt-10"
          />
        </div>
        <p className="text-[125px] font-light text-left ml-8 -mt-[150px] tracking-tight">
          {" "}
          that <span className="text-[#CCCCCC]"> helps</span> you
        </p>
        <div className="text-[125px] font-light text-left -mt-[40px]  tracking-tight  flex self-end  mr-[95px]">
          shape{" "}
          <span>
            {" "}
            <img
              src="/yellow.png"
              alt="circle"
              className="w-[110px] mt-12 mx-2"
            />{" "}
          </span>{" "}
          the future
        </div>
      </div>

      {/* Strategic Section */}

      <div className="bg-[#F9F9F9] rounded-[70px] w-full px-20 py-32 mt-[100px]">
        <div className="flex justify-between items-center ">
          <p className="w-[650px] text-[50px] font-light">
            Your key to strategic success through analytics
          </p>
          <p className="font-extralight w-[300px] text-[18px] mr-3">
            Ready for exciting. instantaneous all-accessible insights in
            real time?
          </p>
        </div>
        <div className="flex mt-5">
          <img
            src="/firstRec.png"
            className="w-[60%] h-[500px] object-contain"
            alt=""
          />
          <img
            src="/secondRec.png"
            className="w-[40%]  h-[420px] mt-[38px]  "
            alt=""
          />
        </div>

        <div className="flex items-end w-fit mx-auto gap-4 pl-8">
          <p className=" text-[30px]">Up to</p>
          <p className="font-[300] text-[150px] -mb-12">45%</p>
          <p className="w-[500px] font-light mb-4">
            Increase your analytics efficiency by up to 45%, Unique
            algorithms provide insights from data, reduce time for
            analysis or save fire for making important, informed decisions
          </p>
        </div>
      </div>

      {/* Maximum */}
      <div className="flex flex-col px-16">
        <p className="text-[125px] font-light mt-20 tracking-tight text-left w-[1200px] ">
          Maximize <span className="text-[#CCCCCC]"> efficiency </span>
          with our intuitive
        </p>
        <div className="flex justify-between">
          <img
            src="/twoPost.png"
            alt=""
            className="w-[298px] object-contain"
          />
          <div className="rounded-[50px] bg-[#FAD049] h-[160px] w-[450px] overflow-hidden flex items-center ">
            <p className=" moving-text text-[125px] font-light text-nowrap ">
              Analytics Service
            </p>
          </div>
        </div>

        <div className="bg-[#F9F9F9] w-full h-1 rounded-full mt-12"></div>

        <div className="flex w-full justify-between mt-14">
          <p className="font-light w-[630px]">
            Explore traffic sources, page behavior, conversions and more
            to gain deep insight into your audience. With us, your
            business doesn't just adapt - it evolves
          </p>
          <div className="flex gap-2">
            <button
              className="rounded-2xl bg-[#F9F9F9] grid place-content-center  font-light px-10 py-3 text-xs text-gray-700
            "
            >
              <p>Request a demo</p>
            </button>
            <button
              className="rounded-2xl bg-[#ED4734] grid place-content-center  font-light px-10 py-3 text-xs text-white
            "
            >
              <p>Start for free</p>
            </button>
          </div>
        </div>
      </div>

      {/* Turning data into real */}
      <div className="bg-[url('/bg.svg')] rounded-[70px] w-full pt-32 pb-[170px] mt-[100px] flex justify-between pl-14 h-fit ">
        <div className="relative ">
          <div className="absolute">
            <p className="text-[50px] font-light w-[600px] ">
              Turning data into real actions and ideas.
            </p>
            <div className="grid gap-8 mt-[100px]">
              <div className="bg-white rounded-[30px] py-4 px-4 flex items-center justify-between w-[400px] shadow-md">
                {" "}
                <p>Instant Insights</p>{" "}
                <div className="rounded-full p-6 grid place-content-center bg-[#F9F9F9]">
                  <TiPlus size={12} />
                </div>{" "}
              </div>
              <div className="bg-white rounded-[30px] py-4 px-4 flex items-center justify-between w-[400px] shadow-md">
                {" "}
                <p>Al technology</p>{" "}
                <div className="rounded-full p-6 grid place-content-center bg-[#F9F9F9]">
                  <TiPlus size={12} />
                </div>{" "}
              </div>
              <div className="bg-white rounded-[30px] py-4 px-4 flex items-center justify-between w-[400px] shadow-md">
                {" "}
                <p>Easy integration</p>{" "}
                <div className="rounded-full p-6 grid place-content-center bg-[#F9F9F9]">
                  <TiPlus size={12} />
                </div>{" "}
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <img src="/lay.png" alt="" className="w-[1300px] ml-[70px]" />
          <p className="text-[#ED4734] absolute font-black text-[380px] -mt-[270px]">
            Ramos
          </p>
        </div>
      </div>

      {/* we give you full control */}

      <div className="mt-[100px] px-16 ">
        <p className="text-[125px] font-[300] mt-20 tracking-tight text-left ml-10 ">
          We give you full
          <span className="text-[#CCCCCC]"> control </span> over your data
        </p>

        <div className="flex w-full gap-6 mt-28 ">
          <div className="rounded-[40px] w-1/2 bg-[#f9f9f9] grid justify-items-center py-20  shadow-lg  border border-gray-200 ">
            <img src="/three.png" alt="" className="w-[420px] " />
            <p className="text-2xl mt-8">Improved customer service</p>
            <p className="text-base text-center w-[420px] mt-8">
              Analytics helps to optimize service processes by providing
              information on how to improve interaction with customer and
              how to increase satisfaction
            </p>
          </div>
          <div className="rounded-[40px] w-1/2 bg-[#f9f9f9] grid justify-items-center py-20 shadow-lg  border border-gray-200  ">
            <img src="/four.png" alt="" className="w-[420px] " />
            <p className="text-2xl mt-8">Monitoring key indicators</p>
            <p className="text-base text-center w-[400px] mt-8">
              Analytics platforms allow businesses to track KPIs. an
              important tool fon measuring success and achieving goals
            </p>
          </div>
        </div>
      </div>

      {/* Get started */}
      <div className="grid justify-items-center w-full mt-[100px]">
        <div data-aos="zoom-out" className="grid place-content-center p-[48px] rounded-[40px] bg-[#ED4734]  shadow-2xl shadow-[#ED4734]">
          <PiLinkSimpleBold size={40} color="white" />
        </div>
        <p className="text-[125px] font-[300] ">Get Started</p>
        <p className="text-[22px] font-[200] text-center w-[620px] text-[#858585]">
          {" "}
          Turn information into advantage! Start using Ramos today. Sign up
          for a free trial
        </p>

        <div className="flex gap-2 mt-10">
          <button
            className="rounded-lg bg-[#F2F2F2] grid place-content-center  font-[500] px-14 py-3 text-xs text-gray-700
            "
          >
            <p>Request a demo</p>
          </button>
          <button
            className="rounded-lg bg-[#ED4734] grid place-content-center  font-[500] px-14 py-3 text-xs text-white
            "
          >
            <p>Start for free</p>
          </button>
        </div>
      </div>

      {/* footer side */}

      <footer className="bg-black w-full mt-[100px] text-white px-16 pt-20">
        <div className="flex justify-between items-center ">
          <div className="w-[600px] text-[#888888] text-[20px] justify-between flex items-center font-[200]">
            <p>About</p>
            <p>Why Us</p>
            <p>Platform</p>
            <p>Pricing</p>
            <p>Contacts</p>
          </div>
          <p className="text-[60px] font-light ">hello@ramos.com</p>
        </div>
        {/* line */}
        <div className="w-full bg-[#888888] h-[1px] mt-16"></div>
        {/* line */}

        <div className="flex justify-between w-full mt-8">

          <div className="flex ">
            <div className="grid text-left ">
              <p>Warrensville Heights</p>
              <p className="text-[#888888] ">14418 Vineyard Drive, NC</p>
              <p className="text-[#888888]">44128</p>
            </div>
            <div className="grid text-left ml-[160px] ">
              <p>Saint Louis</p>
              <p className="text-[#888888] ">1368 Penn Street</p>
              <p className="text-[#888888]">63101</p>
            </div>
          </div>
          <div className="grid gap-10 text-right">
            <p>Linkedin</p>
            <p>Instagram</p>
            <p>Facebook</p>
          </div>
        </div>



        <div className="flex mt-10 items-center justify-between">
          <p className="text-[125px] font-[300]">Ramos®</p>
          <div className="gap-10 flex">
            <p className="text-[#888888] text-[16px] font-[200]">Privacy policy</p>
            <p className="text-[#888888] text-[16px] font-[200]">License agreement</p>
          </div>
          <div className="rounded-2xl bg-white py-4 px-6">
            <img src="/q.png" className="w-24" alt="" />
          </div>
        
</div>


      </footer>

      {/* End of discussions section */}
    </main>
  );
}

export default App;
