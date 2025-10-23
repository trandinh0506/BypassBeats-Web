import { Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function SearchBar() {
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "e") {
        event.preventDefault();
        console.log("Ctrl+E pressed");
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const expanded = hovered || focused;

  return (
    <div
      className="relative w-full flex justify-center"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <motion.div
        animate={{
          width: expanded ? 340 : 220,
        }}
        transition={{
          duration: 0.35,
          ease: [0.4, 0, 0.2, 1],
        }}
        className="relative"
      >
        <Search
          className={`absolute left-3 top-1/2 -translate-y-1/2 ${
            focused ? "text-indigo-300" : "text-gray-400"
          }`}
          size={18}
        />

        <input
          type="text"
          placeholder="What do you want to play?"
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className="w-full pl-10 pr-16 py-2 rounded-full 
                     bg-neutral-800 text-white placeholder-gray-400 
                     focus:outline-none focus:ring-4 focus:ring-indigo-500/50 
                     transition-colors duration-200 ease-in-out"
        />

        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.22, delay: 0.06 }}
              className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1"
            >
              <kbd className="px-1.5 py-0.5 text-xs font-semibold text-gray-300 bg-neutral-700 border border-neutral-600 rounded">
                Ctrl
              </kbd>
              <kbd className="px-1.5 py-0.5 text-xs font-semibold text-gray-300 bg-neutral-700 border border-neutral-600 rounded">
                E
              </kbd>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
