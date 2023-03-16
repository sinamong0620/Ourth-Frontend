import axios from "axios";
import { useState, useCallback, useEffect } from "react";

interface RandomMission {
  id: number;
  email: string;
  username: string;
  schoolName: string;
  point: number;
  missionPresence: boolean;
  missionCount: number;
}

const useMissionList = () => {
  const [userInfo, setUserInfo] = useState<RandomMission>();
  const saveRandomMission = useCallback(async () => {
    const response = await axios.get<RandomMission>(
      `https://ourth.duckdns.org/user`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("tokenKey")}`,
        },
        withCredentials: true,
      }
    );

    setUserInfo(response.data);
  }, []);

  useEffect(() => {
    saveRandomMission();
  }, [saveRandomMission]);

  return { userInfo, saveRandomMission };
};
export default useMissionList;
