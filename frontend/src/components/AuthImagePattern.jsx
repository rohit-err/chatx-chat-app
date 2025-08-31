
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CHAT_BUBBLES = [
  { id: 1, text: "Hey! How are you?", isSent: false },
  { id: 2, text: "I'm good, just checking ChatX 😎", isSent: true },
  { id: 3, text: "Wow, this app looks amazing!", isSent: false },
  { id: 4, text: "Right? Let’s stay connected.", isSent: true },
];

const AuthImagePattern = ({ title, subtitle }) => {
  const [bubbles, setBubbles] = useState(CHAT_BUBBLES);

 
  useEffect(() => {
    const interval = setInterval(() => {
      setBubbles((prev) => {
        const [first, ...rest] = prev;
        return [...rest, first];
      });
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  
  const lines = [...Array(10)];

  return (
    <div className="hidden lg:flex relative items-center justify-center bg-base-200 p-12 overflow-hidden">
      
      {lines.map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-primary/30"
          style={{
            width: `${Math.random() * 2 + 1}px`,
            height: `${Math.random() * 100 + 50}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, Math.random() * 50 - 25, 0],
            x: [0, Math.random() * 50 - 25, 0],
          }}
          transition={{ repeat: Infinity, duration: 10 + Math.random() * 5, ease: "easeInOut" }}
        />
      ))}

      
      <motion.div
        className="relative z-10 max-w-md w-full bg-base-100/70 backdrop-blur-lg border border-base-300 rounded-3xl p-8 space-y-4 shadow-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl font-bold">{title}</h2>
        <p className="text-base-content/70 mb-6">{subtitle}</p>

        
        <div className="flex flex-col gap-3">
          {bubbles.map((bubble, index) => (
            <motion.div
              key={bubble.id}
              initial={{ x: bubble.isSent ? 50 : -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.3, duration: 0.8 }}
              className={`max-w-[80%] p-3 rounded-xl shadow-sm ${
                bubble.isSent ? "self-end bg-primary text-primary-content" : "self-start bg-base-200"
              }`}
            >
              {bubble.text}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default AuthImagePattern;

