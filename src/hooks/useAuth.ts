import { create } from "zustand";
import type { Auth } from "../declarations/auth";

const useAuth = create<Auth>()((set) => ({
  user_id: "",
  username: "",
  access_token: "",
  is_authenticated: false,
  setUser: (
    user_id: string,
    username: string,
    access_token: string,
    is_authenticated: boolean
  ) => set({ user_id, username, access_token, is_authenticated }),
  clearUser: () =>
    set({
      user_id: "",
      username: "",
      access_token: "",
      is_authenticated: false,
    }),
}));

export default useAuth;
