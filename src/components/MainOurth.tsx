import styled from "styled-components";
import Profile from "./Profile";
import Mission from "./Mission";
import Ranking from "./Ranking";
import Tip from "./tip/Tip";
import Link from "next/link";
import { motion } from "framer-motion";
import useMissionList from "../hooks/useMissionList";
import AddMission from "./AddMission";
import axios from "axios";
import { useRouter } from "next/router";
import { FC } from "react";

const Page: FC = () => {
  const router = useRouter();
  const { userInfo } = useMissionList();

  const urlstring = [
    "/images/recycling.jpg",
    "/images/cutevegi.jpg",
    "/images/factory.jpg",
  ];
  const userMission = async () => {
    try {
      await axios.post(
        "https://ourth.duckdns.org/usermission/add",
        {}, //post는 형식이 {data,{config}} 이렇게 해야함
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("tokenKey")}`,
          },
        }
      );
      router.push("/mission");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 10 }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
      >
        <Profile
          username={userInfo?.username as string}
          userpoint={userInfo?.point as number}
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 10 }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
      >
        {!userInfo?.missionPresence ? (
          <UnsetButton onClick={userMission}>
            <AddMission />
          </UnsetButton>
        ) : (
          <Link href="/mission">
            <Mission remainMission={userInfo.missionCount} />
          </Link>
        )}
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 10 }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
      >
        <Link href="/ranking">
          <Ranking schoolName={userInfo?.schoolName as string} />
        </Link>
      </motion.div>
      <TipCommunityScroll
        as={motion.div}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 10 }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
      >
        <TipCommunityContain>
          <Tip
            title="That can't be recycled!"
            subtitle="If you still don't know how to recycle? "
            imgurl={urlstring[0]}
            id="1"
          />

          <Tip
            title="Did you know there are various types of vegan options?"
            subtitle="What are the benefits of vegetarianism?"
            imgurl={urlstring[1]}
            id="2"
          />

          <Tip
            title="Even if factories destroy the environment"
            subtitle="we can preserve the future through our individual efforts"
            imgurl={urlstring[2]}
            id="3"
          />
        </TipCommunityContain>
      </TipCommunityScroll>
    </>
  );
};

export default Page;

const TipCommunityContain = styled.div`
  display: flex;
  margin-bottom: 1.5rem;
`;

const TipCommunityScroll = styled(motion.div)`
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const UnsetButton = styled.button`
  all: unset;
  cursor: pointer;
  width: 100%;
`;
