import axios from "axios";
import { useState, useCallback, useEffect } from "react";

interface Mission {
  id: number;
  createDate: string;
  text: string;
  point: number;
  status: boolean;
}

interface MissionResponse {
  username: string;
  point: number;
  badgeCount: number;
  userMissions: Mission[];
}

const useCompletedMission = () => {
  const [userMission, setuserMission] = useState<Mission[]>([]);
  const [userInfo, setUserInfo] = useState<MissionResponse>();
  const saveRandomMission = useCallback(async () => {
    const response = await axios.get<MissionResponse>(
      `https://ourth.duckdns.org/user/achieve`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("tokenKey")}`,
        },
        withCredentials: true,
      }
    );
    setuserMission(response.data.userMissions);
    setUserInfo(response.data);
  }, []);

  useEffect(() => {
    saveRandomMission();
  }, []);

  return { userMission, userInfo };
};
export default useCompletedMission;
