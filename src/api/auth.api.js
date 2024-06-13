import axios from "axios";

const AUTH_BASE_URL = "https://moneyfulpublicpolicy.co.kr";

const authClient = axios.create({
  baseURL: AUTH_BASE_URL,
  // withCredentials: true,
});

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
    const response = await authClient.post("/login", {
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
