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
import { FC, useState } from "react";

import MenuModal from "./MenuModal";

const Page: FC = () => {
  const router = useRouter();
  const { userInfo } = useMissionList();
  const [modalOpen, setModalOpen] = useState<boolean>(false);

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
          {/* <Link
        href={{
          pathname: "/tipdetail/1",
          query: {
            text: "그건 재활용이 안돼요",
            img: "/images/recycling.jpg",
          },
        }}
      > */}
          <Tip
            title="그건 재활용이 안돼요"
            subtitle="아직도 재활용 방법을 모른다면? "
            imgurl="/images/recycling.jpg"
          />
          {/* </Link> */}
          {/* <Link
        href={{
          pathname: "/tipdetail/2",
          query: {
            text: "비건만 있는게 아니에요",
            img: "/images/cutevegi.jpg",
          },
        }}
      > */}
          <Tip
            title="비건만 있는게 아니에요"
            subtitle="채식주의에 대해서 알아봐요"
            imgurl="/images/cutevegi.jpg"
          />
          {/* </Link> */}
          {/* <Link
        href={{
          pathname: "/tipdetail/3",
          query: {
            text: "공장을 없애요",
            img: "/images/factory.jpg",
          },
        }}
      > */}
          <Tip
            title="기업을 없애요"
            subtitle="공장을 안돌리면 돼요"
            imgurl="/images/factory.jpg"
          />
          {/* </Link> */}
        </TipCommunityContain>
      </TipCommunityScroll>
      {true && <MenuModal />}
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
