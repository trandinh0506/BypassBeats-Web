import "i18next";
import { useTranslation } from "react-i18next";

export default function SignUpButton() {
  const { t } = useTranslation();

  return (
    <button className="h-8 px-4 rounded-full bg-transparent text-gray-400 text-sm font-semibold hover:scale-105 hover:text-white transition-all duration-200">
      {t("header.signup")}
    </button>
  );
}
