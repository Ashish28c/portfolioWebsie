// components/Banner.tsx
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { HiMinus } from "react-icons/hi";
import { Link } from "react-scroll";
import Design from "./Design";
import MobileNav from './MobileNav'; // Make sure to import MobileNav if it's defined

const Banner = () => {
  const ref = useRef<string | any>("");
  
  function handleClick(e: any) {
    if (e.target.contains(ref.current)) {
      // do something with myRef.current
      setMenu(false);
    }
  }

  // ============ Nav style Start here =============
  const [navSize, setnavSize] = useState("90px");
  const [navColor, setnavColor] = useState("transparent");

  const listenScrollEvent = () => {
    window.scrollY > 10 ? setnavColor("#000000") : setnavColor("transparent");
    window.scrollY > 10 ? setnavSize("90px") : setnavSize("90px");
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, [navColor]);

  // ============ Nav style End here ===============

  const [menu, setMenu] = useState(false);

  return (
    <div id="home" className="w-full h-[700px] relative">
      <Design />
      <div className="absolute left-0 top-0 w-full h-[700px] bg-black bg-opacity-10">
        <nav
          style={{
            backgroundColor: navColor,
            height: navSize,
            transition: "all 1s",
          }}
          className="w-full px-4 md:px-20 py-6 flex justify-between fixed top-0 z-40 bg-black bg-opacity-25"
        >
          <h1 className="font-bodyFont text-4xl text-white font-extrabold border-2 border-designColor w-20 text-center">
            AC
          </h1>
          <div
            onClick={() => setMenu(true)}
            className="w-8 h-6 group flex flex-col items-center justify-between cursor-pointer"
          >
            <span className="w-full h-[3px] bg-designColor inline-flex group-hover:w-4 duration-300"></span>
            <span className="w-full h-[3px] bg-designColor inline-flex"></span>
            <span className="w-full h-[3px] bg-designColor inline-flex group-hover:w-4 duration-300"></span>
          </div>
        </nav>
        <div className="w-full h-full flex flex-col justify-center items-start text-white px-4">
          <h1 className="text-[25px] md:text-[25px] lg:text-[80px] font-black ml-[4vw] mt-[200px] md:ml-[50px]">
            <span className="block">Ashish</span>
            <span className="block">Chauhan</span>
          </h1>
          <div className="flex items-center gap-2 md:gap-6 text-base md:text-xl font-bold bg-- px-6 py-3 md:ml-[350px]">
            <h2 className="tracking-[4px] mt-[200px]">Backed Developer</h2>
            <HiMinus className="text-2xl rotate-90 mt-[200px]" />
            <h2 className="tracking-[4px] mt-[200px]">Designer</h2>
            <HiMinus className="text-2xl rotate-90 mt-[200px]" />
            <h2 className="tracking-[4px] mt-[200px]">Photographer</h2>
          </div>
        </div>
      </div>
      {/* Render mobile navigation */}
      <MobileNav isOpen={menu} onClose={() => setMenu(false)} />

      {/* =========== Menu Icon status Start here ========= */}
      {menu && (
        <div
          ref={(node) => (ref.current = node)}
          onClick={handleClick}
          className="w-full h-screen bg-black bg-opacity-40 fixed top-0 right-0 flex justify-end z-50"
        >
          <motion.div
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full md:w-[60%] lg:w-[40%] h-full bg-[#0F1113] text-white flex items-center justify-center"
          >
            <div className="w-4/5 px-4 md:px-12">
              <div>
                <ul className="flex flex-col gap-2">
                  <Link
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onClick={() => setMenu(false)}
                  >
                    <li className="text-xl font-semibold text-gray-300 hover:text-white duration-300 cursor-pointer">
                      Home
                    </li>
                  </Link>
                  <Link
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onClick={() => setMenu(false)}
                  >
                    <li className="text-xl font-semibold text-gray-300 hover:text-white duration-300 cursor-pointer">
                      About
                    </li>
                  </Link>
                  <Link
                    to="portfolio"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onClick={() => setMenu(false)}
                  >
                    <li className="text-xl font-semibold text-gray-300 hover:text-white duration-300 cursor-pointer">
                      Portfolio
                    </li>
                  </Link>
                  <Link
                    to="testimonial"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onClick={() => setMenu(false)}
                  >
                    <li className="text-xl font-semibold text-gray-300 hover:text-white duration-300 cursor-pointer">
                      Social media 
                    </li>
                  </Link>
                  <Link
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onClick={() => setMenu(false)}
                  >
                    <li className="text-xl font-semibold text-gray-300 hover:text-white duration-300 cursor-pointer">
                      Contact
                    </li>
                  </Link>
                </ul>
              </div>
              <div className="text-lg font-thin mt-32">
                <p>
                  <span className="font-semibold text-designColor"></span>
                </p>
              </div>
            </div>
            <div className="w-1/5 h-full border-l-[1px] text-center flex items-center justify-center">
              <button
                onClick={() => setMenu(false)}
                className="text-3xl font-black text-designColor"
              >
                X
              </button>
            </div>
          </motion.div>
        </div>
      )}
      {/* =========== Menu Icon status End here =========== */}
    </div>
  );
};

export default Banner;
