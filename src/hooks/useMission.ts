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
  const [missionArray, setMissionArray] = useState<boolean[]>([]);

  const saveRandomMission = useCallback(async () => {
    const response = await axios.get<MissionResponse>(
      `https://ourth.duckdns.org/user/mission`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("tokenKey")}`,
        },
        withCredentials: true,
      }
    );
    const currentBadge = response.data.currentBadge;
    const m1 = response.data.userMissions[0].status;
    const m2 = response.data.userMissions[1].status;
    const m3 = response.data.userMissions[2].status;
    const m4 = response.data.userMissions[3].status;
    setMissionArray([currentBadge, m1, m2, m3, m4]);

    setuserMission(response.data.userMissions);

    console.log(response);
  }, []);

  useEffect(() => {
    saveRandomMission();
  }, []);

  return { userMission, saveRandomMission, missionArray };
};
export default useMission;
