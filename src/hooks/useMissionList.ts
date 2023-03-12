import axios from "axios";
import { useState, useCallback, useEffect } from "react";
interface Random {
  createDate: string;
  id: number;
  point: number;
  status: boolean;
  text: string;
}
interface RandomMission {
  email: string;
  id: number;
  point: number;
  schoolName: string;
  userMissions: Random[]; //Random과 Random[]차이가뭐임
  username: string;
}

const useMissionList = () => {
  const [randomMission, setRandomMission] = useState<Random[]>([]);
  const [userInfo, setuserInfo] = useState<RandomMission>();
  let remainMission = [];
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

    setRandomMission(response.data.userMissions);
    setuserInfo(response.data);
  }, []);

  for (let i of randomMission) {
    if (i.status === false) {
      remainMission.push(i);
    }
  }

  useEffect(() => {
    saveRandomMission();
  }, [saveRandomMission]);

  return { randomMission, saveRandomMission, userInfo, remainMission };
};
export default useMissionList;
