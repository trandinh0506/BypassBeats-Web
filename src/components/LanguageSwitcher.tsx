import { useLanguageStore } from "../hooks/useLanguageStore";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguageStore();

  const toggleLanguage = () => {
    const next = language === "en" ? "vi" : "en";
    setLanguage(next);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="relative w-28 h-11 rounded-full bg-gray-800 border border-gray-700 flex items-center
                 transition-colors duration-300 hover:border-cyan-500 select-none"
    >
      {/* Label EN / VI */}
      <div className="absolute inset-0 flex justify-between items-center px-4 text-sm font-medium text-gray-400">
        <span className={language === "en" ? "text-white" : ""}>EN</span>
        <span className={language === "vi" ? "text-white" : ""}>VI</span>
      </div>

      {/* Toggle handle */}
      <div
        className={`absolute top-1 left-1 w-[48%] h-[calc(100%-8px)] rounded-full bg-cyan-600 
                    transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]
                    ${
                      language === "vi" ? "translate-x-full" : "translate-x-0"
                    }`}
      >
        <div className="flex justify-center items-center h-full text-lg">
          {language === "en" ? "🇺🇸" : "🇻🇳"}
        </div>
      </div>
    </button>
  );
}
