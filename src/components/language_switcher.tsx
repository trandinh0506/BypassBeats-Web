import { useLanguageStore } from "../hooks/useLanguageStore";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguageStore();

  return (
    <div style={{ marginBottom: "1rem" }}>
      <button onClick={() => setLanguage("en")} disabled={language === "en"}>
        English
      </button>
      <button
        onClick={() => setLanguage("vi")}
        disabled={language === "vi"}
        style={{ marginLeft: 8 }}
      >
        Tiếng Việt
      </button>
    </div>
  );
}
