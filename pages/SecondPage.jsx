import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const SecondPage = () => {
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    // Generate image URLs dynamically
    const images = Array.from({ length: 16 }, (_, i) => `/images/${i + 1}.jpg`);
    setImageUrls(images);
  }, []);

  return (
    <div className="relative min-h-screen overflow-y-auto flex flex-col items-center justify-center text-center text-black">
      {/* Blurred Background */}
      <div
        className="absolute inset-0 bg-cover bg-center blur-md"
        style={{ backgroundImage: "url('/images/Background.jpg')" }}
      ></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-6 p-6">
        <h1 className="text-4xl font-bold">
          Happy 16 Months mi amorcito ❤️ Cada dia mas agradecido de tenerte en
          mi vida (Un recuerdito de cada mes)
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {imageUrls.map((src, index) => (
            <motion.img
              key={index}
              src={src}
              alt={`Memory ${index + 1}`}
              className="w-36 h-36 object-cover rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2, delay: index * 0.1 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SecondPage;
