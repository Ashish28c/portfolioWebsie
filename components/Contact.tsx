import { motion } from "framer-motion";
import { useState } from "react";
import { FaEnvelope, FaMap, FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const handleSubmit = (e: any) => {
    e.preventDefault(e);
    if (username === "") {
      setErrMsg("Enter your Name");
    } else if (email === "") {
      setErrMsg("Enter your Email");
    } else if (message === "") {
      setErrMsg("Enter your Messages");
    } else {
      setSuccessMsg(
        `Hell dear ${username}, Thank you for your Messages. Additional Information will send to you shortly via your email at ${email}`
      );
    }
  };

  return (
    <section
      id="contact"
      className="w-full h-[800px] bg-contact-image bg-no-repeat bg-cover bg-fixed text-white px-4 relative"
    >
      <div className="w-full h-full bg-black bg-opacity-80 py-20">
        <div className="max-w-6xl h-full mx-auto flex flex-col gap-6 md:gap-12">
          <h1 className="text-3xl font-thin tracking-widest uppercase text-center">
            Contact
          </h1>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col items-center gap-3">
              <FaMap className="text-4xl text-designColor" />
              <p className="text-sm tracking-wide">Ahmedabad, India</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <FaPhoneAlt className="text-4xl text-designColor justify-centre" />
              <p className="text-sm tracking-wide">+91 8000001378</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <FaEnvelope className="text-4xl text-designColor" />
              <p className="text-sm tracking-wide">ashishchauhan28802@gmail.com</p>
            </div>
          </div>

          {successMsg ? (
            <motion.p
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, type: "easeIn" }}
              className="max-w-[600px] h-full flex justify-center items-center mx-auto text-lg font-semibold px-4"
            >
              {successMsg}
            </motion.p>
          ) : (
            <form className="w-full flex flex-col items-center gap-4 md:gap-10">
              <div className="w-full flex flex-col md:flex-row items-center gap-4 md:gap-10">
                <input
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full md:w-1/2 py-2 px-4 text-base text-black placeholder:text-gray-600 font-bold placeholder:font-normal outline-none border-transparent border-2 focus-within:border-designColor duration-200"
                  type="text"
                  placeholder="Name"
                />
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full md:w-1/2 py-2 px-4 text-base text-black placeholder:text-gray-600 font-bold placeholder:font-normal outline-none border-transparent border-2 focus-within:border-designColor duration-200"
                  type="text"
                  placeholder="Email"
                />
              </div>
              <textarea
                onChange={(e) => setMessage(e.target.value)}
                placeholder="You Message"
                className="w-full text-base h-36 p-4 text-black placeholder:text-gray-600 font-bold placeholder:font-normal outline-none border-transparent border-2 focus-within:border-designColor duration-200 resize-none"
              ></textarea>
              {errMsg && (
                <p className="w-full bg-red-500 py-1 text-center text-base font-semibold tracking-wider">
                  {errMsg}
                </p>
              )}
              <button
                onClick={handleSubmit}
                className="w-44 h-12 bg-designColor text-base uppercase font-bold tracking-wide border-2 border-transparent hover:bg-black hover:border-designColor duration-300"
              >
                Submit Now
              </button>
            </form>
          )}
          <div className="w-full py-10 bg-black flex flex-col md:flex-row px-4 md:items-center justify-between">
            <div className="text-lg font-thin">
              <p>
                <span className="font-semibold text-designColor">
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
