import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const EnvelopePage = () => {
  const [isOpened, setIsOpened] = useState(false);
  const navigate = useNavigate();

  const handleOpenEnvelope = () => {
    setIsOpened(true);
    setTimeout(() => {
      navigate("/second-page");
    }, 500);
  };

  return (
    <div className="relative h-screen flex flex-col items-center justify-center text-center text-black">
      {/* Blurred Background */}
      <div
        className="absolute inset-0 bg-cover bg-center blur-md"
        style={{ backgroundImage: "url('/public/images/Background.jpg')" }}
      ></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-4">
        <h1 className="text-4xl font-bold">Hola mi amorcito 💖</h1>
        <h2 className="text-2xl font-bold">Abre el sobre ;)</h2>

        <div
          className="relative flex items-center justify-center w-full max-w-xs mx-auto mt-20"
          onClick={handleOpenEnvelope}
        >
          {/* Envelope Back */}
          <motion.div
            className="absolute hover:cursor-pointer flex items-center justify-center"
            initial={{ opacity: 1 }}
            animate={isOpened ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-40 h-40"
            >
              <rect x="2" y="4" width="20" height="16" rx="2" ry="2" />
              <path d="M22 6l-10 7L2 6" />
            </svg>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default EnvelopePage;
