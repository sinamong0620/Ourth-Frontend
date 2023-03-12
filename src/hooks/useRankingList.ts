import axios from "axios";
import { useState, useCallback, useEffect } from "react";

interface School {
  id: number;
  schoolName: string;
  point: number;
  ranking: number;
}

const useRankingList = () => {
  const renderingNumber = 3; // 재사용성 높은 코드
  const [ranking, setRanking] = useState<School[]>([]);
  const [anoterranking, setAnoterranking] = useState<School[]>([]);
  const [mySchoolRanking, setMySchoolRanking] = useState<School[]>([]);

  const saveRanking = useCallback(async () => {
    const response = await axios.get<School[]>(
      `https://ourth.duckdns.org/rank/school`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("tokenKey")}`,
        },
        withCredentials: true,
      }
    );

    const temp = [];

    for (let i = 0; i < renderingNumber; i++) {
      temp.push(response.data[i]);
    }

    setRanking(response.data);
    setAnoterranking(temp);
    setMySchoolRanking([response.data[response.data.length - 1]]);
  }, []);

  useEffect(() => {
    saveRanking();
  }, [saveRanking]);

  return { anoterranking, saveRanking, mySchoolRanking };
};
export default useRankingList;
