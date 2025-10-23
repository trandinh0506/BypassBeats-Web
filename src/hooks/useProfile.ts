import { create } from "zustand";
import type { Profile } from "../declarations/profile";

const useProfile = create<Profile>()((set) => ({
  display_name: "",
  email: "",
  setProfile: (display_name: string, email: string) =>
    set({ display_name, email }),
  clearProfile: () => set({ display_name: "", email: "" }),
}));

export default useProfile;
