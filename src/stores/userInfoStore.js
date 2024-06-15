import { create } from "zustand";
import { persist } from "zustand/middleware";

const initialUserInfo = {
  accessToken: "",
  id: "",
  nickname: "",
  avatar: "",
  success: false,
  userUuid: "",
};

const userInfoStore = create(
  persist(
    (set) => ({
      userInfo: initialUserInfo,
      setUserInfo: (newInfo) =>
        set((state) => ({
          userInfo: { ...state.userInfo, ...newInfo },
        })),
      clearUserInfo: () => set({ userInfo: initialUserInfo }),
      isLoggedIn: () => !!localStorage.getItem("accessToken"),
    }),
    {
      name: "user-info",
      storage: localStorage,
    }
  )
);

export default userInfoStore;



