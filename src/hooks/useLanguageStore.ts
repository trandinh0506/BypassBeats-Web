import { create } from "zustand";
import i18n from "../i18n";

type LanguageStore = {
  language: string;
  setLanguage: (language: string) => void;
};

export const useLanguageStore = create<LanguageStore>((set) => ({
  language: "en",
  setLanguage: (language: string) => {
    i18n.changeLanguage(language);
    set({ language });
  },
}));
