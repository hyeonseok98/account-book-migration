import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import { getUserInfos } from "./api/auth.api";
import router from "./routes/router";
import userInfoStore from "./stores/userInfoStore";

const queryClient = new QueryClient();
let isTokenExpired = false; // 중복 알림 방지용

const checkTokenValidity = async () => {
  try {
    await getUserInfos();
  } catch (error) {
    const { clearUserInfo } = userInfoStore.getState();
    isTokenExpired = true;

    if (error.response && error.response.status === 401) {
      if (!isTokenExpired) {
        isTokenExpired = true;
        alert("세션이 만료되었습니다. 다시 로그인 해주세요.");
        clearUserInfo();
        localStorage.removeItem("accessToken");
        window.location.href = "/login";
      }
    }
  }
};

const App = () => {
  useEffect(() => {
    const observeUserActivity = () => {
      checkTokenValidity();
    };

    window.addEventListener("click", observeUserActivity);
    window.addEventListener("keydown", observeUserActivity);

    return () => {
      window.removeEventListener("click", observeUserActivity);
      window.removeEventListener("keydown", observeUserActivity);
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
};

export default App;
