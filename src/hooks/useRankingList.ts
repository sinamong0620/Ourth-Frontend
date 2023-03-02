import axios from "axios";
import { useState, useCallback, useEffect } from "react";
import { idText } from "typescript";
interface School {
  id: number;
  schoolName: string;
  point: number;
  ranking: number;
}

const useRankingList = () => {
  const [ranking, setRanking] = useState<School[]>([]);

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

    setRanking(response.data);

    // for (let i of ranking) {
    //   if (i.ranking < 4) {
    //     console.log(i);
    //     setreRanking([
    //       ...ranking,
    //       {
    //         id: i.id,
    //         schoolName: i.schoolName,
    //         point: i.point,
    //         ranking: i.ranking,
    //       },
    //     ]);
    //   }
    // }
  }, []);

  useEffect(() => {
    saveRanking();
  }, [saveRanking]);

  return { ranking, saveRanking };
};
export default useRankingList;
