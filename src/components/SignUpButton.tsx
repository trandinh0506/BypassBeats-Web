import "i18next";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export default function SignUpButton() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <button
      className="cursor-pointer h-8 px-4 rounded-full bg-transparent text-gray-400 text-sm font-semibold hover:scale-105 hover:text-white transition-all duration-200"
      onClick={() => navigate("/signup")}
    >
      {t("header.signup")}
    </button>
  );
}
