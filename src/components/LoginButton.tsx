import "i18next";
import { useTranslation } from "react-i18next";

export default function LoginButton() {
  const { t } = useTranslation();
  return (
    <button className="h-12 px-8 rounded-3xl bg-white text-black font-bold text-lg hover:scale-105 transition-transform duration-200">
      {t("header.login")}
    </button>
  );
}
