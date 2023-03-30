import axios from "axios";
import { NextRouter } from "next/router";

const refreshInterval = async (router: NextRouter) => {
  try {
    const response = await axios.post(
      "https://ourth.duckdns.org/refresh",
      { refreshToken: localStorage.getItem("refreshKey") },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("tokenKey")}`,
        },
        withCredentials: true,
      }
    );

    localStorage.setItem("tokenKey", response.data.data.accessToken);
    localStorage.setItem("refreshKey", response.data.data.refreshToken);
    console.log("리프레시 되고 있음.");
  } catch (error) {
    router.push({
      pathname: "/login",
    });
  }
};

export default refreshInterval;
