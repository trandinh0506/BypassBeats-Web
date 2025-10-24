import { Search } from "lucide-react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
  animate as motionAnimate,
} from "framer-motion";
import { useState, useEffect } from "react";
import "i18next";
import { useTranslation } from "react-i18next";

export default function SearchBar() {
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);

  const { t } = useTranslation();

  const alpha = useMotionValue(0);
  const spread = useMotionValue(0);

  const boxShadow = useTransform(
    [spread, alpha],
    ([s, a]) => `0 0 0 ${s}px rgba(99,102,241,${a})`
  );

  const expanded = hovered || focused;

  useEffect(() => {
    const targetAlpha = focused ? 0.45 : hovered ? 0.25 : 0;
    const targetSpread = focused ? 6 : hovered ? 4 : 0;

    const aAnim = motionAnimate(alpha, targetAlpha, {
      duration: 1,
      ease: [0.4, 0, 0.2, 1],
    });
    const sAnim = motionAnimate(spread, targetSpread, {
      duration: 0.45,
      ease: [0.4, 0, 0.2, 1],
      delay: 0.1,
    });

    return () => {
      aAnim.stop();
      sAnim.stop();
    };
  }, [hovered, focused, alpha, spread]);

  return (
    <div
      className="relative w-full flex justify-center"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <motion.div
        animate={{
          width: expanded ? 360 : 305,
        }}
        transition={{
          width: { duration: 0.35, ease: [0.4, 0, 0.2, 1] },
        }}
        style={{ boxShadow }}
        className="relative rounded-full"
      >
        <Search
          className={`absolute left-3 top-1/2 -translate-y-1/2 ${
            focused ? "text-indigo-300" : "text-gray-400"
          }`}
          size={18}
        />

        <input
          type="text"
          placeholder={t("searchPlaceholder")}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className="w-full pl-10 pr-16 py-2 rounded-full 
                     bg-neutral-800 text-white placeholder-gray-400 
                     focus:outline-none transition-colors duration-200 ease-in-out"
        />

        <AnimatePresence>
          {hovered && !focused && (
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
