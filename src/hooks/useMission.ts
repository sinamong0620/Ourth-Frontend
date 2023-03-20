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
  currentBadge: boolean;
  userMissions: Mission[];
}

const useMission = () => {
  const [userMission, setuserMission] = useState<Mission[]>([]);

  const saveRandomMission = useCallback(async () => {
    const response = await axios.get<MissionResponse>(
      `https://ourth.duckdns.org/mission`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("tokenKey")}`,
        },
        withCredentials: true,
      }
    );

    setuserMission(response.data.userMissions);
  }, []);

  useEffect(() => {
    saveRandomMission();
  }, [saveRandomMission]);

  return { userMission, saveRandomMission };
};
export default useMission;
