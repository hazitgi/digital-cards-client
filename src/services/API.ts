import axios, {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";

const API = axios.create({
  baseURL: "/fetch",
  headers: {
    Accept: "application/json, text/plain",
    Authorization: `Bearer ${localStorage.getItem("access_token")}`,
  },
});

API.interceptors.response.use(
  (response: AxiosResponse) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config as InternalAxiosRequestConfig & {
      _retry?: boolean;
    };
    if (error.response?.status === 401 && !originalRequest?._retry) {
      originalRequest._retry = true;
      const refresh_token = localStorage.getItem("refresh_token");
      if (refresh_token) {
        try {
          const { access_token } = await generateNewAccessToken(refresh_token);
          console.log(access_token, ".>>>>>>>>>>>>>>>>>>> ");

          localStorage.setItem("access_token", access_token);
          API.defaults.headers.common[
            "Authorization"
          ] = `Bearer ${access_token}`;
          if (originalRequest.headers) {
            originalRequest.headers["Authorization"] = `Bearer ${access_token}`;
          }
          return API(originalRequest);
        } catch (refreshError) {
          console.error("Failed to refresh token:", refreshError);
          localStorage.removeItem("access_token");
          localStorage.removeItem("refresh_token");
          return Promise.reject(refreshError);
        }
      }
    }
    return Promise.reject(error);
  }
);
interface AccessTokenResponse {
  access_token: string;
}

const generateNewAccessToken = (
  refresh_token: string
): Promise<AccessTokenResponse> => {
  return new Promise((resolve, reject) => {
    console.log(refresh_token, "refresh_token refresh");

    axios({
      url: "/users/refresh",
      method: "GET",
      headers: {
        Authorization: `Refresh ${refresh_token}`,
      },
    })
      .then((response) => {
        console.log(response, "response");

        const access_token = response.headers["access-token"] as string;
        console.log("new Access token: ", access_token);

        if (!access_token) {
          throw new Error("No access token received");
        }
        resolve({ access_token });
      })
      .catch((error) => {
        console.error("Failed to refresh", error);
        reject(error);
      });
  });
};

export default API;
