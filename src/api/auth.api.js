import axios from "axios";
import userInfoStore from "../stores/userInfoStore";

const AUTH_BASE_URL = "https://moneyfulpublicpolicy.co.kr";

const authClient = axios.create({
  baseURL: AUTH_BASE_URL,
});

authClient.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

let isTokenExpired = false; // 중복 알림 방지용

authClient.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const { clearUserInfo } = userInfoStore.getState();

    if (error.response && error.response.status === 401) {
      if (!isTokenExpired) {
        isTokenExpired = true;
        alert("세션이 만료되었습니다. 다시 로그인 해주세요.");
        clearUserInfo();
        localStorage.removeItem("accessToken");
        window.location.href = "/login";
      }
    }
    return Promise.reject(error);
  }
);

export const signUp = async ({ id, password, nickname }) => {
  try {
    const response = await authClient.post("/register", {
      id: id,
      password: password,
      nickname: nickname,
    });
    return response.data;
  } catch (error) {
    console.error("SignUp error:", error);
    throw error;
  }
};

export const login = async ({ id, password }) => {
  try {
    const response = await authClient.post("/login?expiresIn=30m", {
      id: id,
      password: password,
    });
    localStorage.setItem("accessToken", response.data.accessToken);
    return response.data;
  } catch (error) {
    if (
      error.response &&
      (error.response.status === 401 || error.response.status === 404)
    ) {
      alert("로그인 실패: 아이디 또는 비밀번호를 다시 체크해주세요.");
    } else {
      console.error("Login error:", error);
    }
    throw error;
  }
};

export const getUserInfos = async () => {
  const accessToken = localStorage.getItem("accessToken");
  if (!accessToken) return;

  try {
    const response = await authClient.get("/user", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Userinfo fetching error:", error);
    throw error;
  }
};

export const changeProfile = async (formData) => {
  const accessToken = localStorage.getItem("accessToken");

  try {
    const response = await authClient.patch("/profile", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response;
  } catch (error) {
    console.error("Profile change error");
    throw error;
  }
};
