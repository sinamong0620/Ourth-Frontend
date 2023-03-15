import styled from "styled-components";
import Header from "./Header";
import Profile from "./Profile";
import Mission from "./Mission";
import Ranking from "./Ranking";
import Tip from "./tip/Tip";
import Footer from "../components/Footer";
import Link from "next/link";
import { motion } from "framer-motion";
import useMissionList from "../hooks/useMissionList";
import AddMission from "./AddMission";
import axios from "axios";

const MainOurth = () => {
  const { randomMission } = useMissionList();
  const UserMission = async () => {
    try {
      const response = await axios.post(
        "https://ourth.duckdns.org/usermission/add",
        {}, //post는 형식이 {data,{config}} 이렇게 해야함
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("tokenKey")}`,
          },
        }
      );
    } catch (error) {
      alert(error);
    }
  };

  return (
    <MainStyleContainer>
      <MainStyle>
        <Header />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 10 }}
          transition={{ delay: 0.3 }}
        >
          <Profile />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 10 }}
          transition={{ delay: 0.3 }}
        >
          <Link href="/mission">
            {randomMission.length === 0 ? (
              <button onClick={UserMission}>
                <AddMission />
              </button>
            ) : (
              <Mission />
            )}
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 10 }}
          transition={{ delay: 0.3 }}
        >
          <Link href="/ranking">
            <Ranking />
          </Link>
        </motion.div>

        <TipCommunityScroll
          as={motion.div}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 10 }}
          transition={{ delay: 0.3 }}
        >
          <TipCommunityContain>
            <Link
              href={{
                pathname: "/tipdetail/1",
                query: {
                  text: "그건 재활용이 안돼요",
                  img: "/images/recycling.jpg",
                },
              }}
            >
              <Tip
                title="그건 재활용이 안돼요"
                subtitle="아직도 재활용 방법을 모른다면? "
                imgurl="/images/recycling.jpg"
              />
            </Link>
            <Link
              href={{
                pathname: "/tipdetail/2",
                query: {
                  text: "비건만 있는게 아니에요",
                  img: "/images/cutevegi.jpg",
                },
              }}
            >
              <Tip
                title="비건만 있는게 아니에요"
                subtitle="채식주의에 대해서 알아봐요"
                imgurl="/images/cutevegi.jpg"
              />
            </Link>
            <Link
              href={{
                pathname: "/tipdetail/3",
                query: {
                  text: "공장을 없애요",
                  img: "/images/factory.jpg",
                },
              }}
            >
              <Tip
                title="기업을 없애요"
                subtitle="공장을 안돌리면 돼요"
                imgurl="/images/factory.jpg"
              />
            </Link>
          </TipCommunityContain>
        </TipCommunityScroll>
      </MainStyle>
      <Footer />
    </MainStyleContainer>
  );
};
export default MainOurth;

const MainStyleContainer = styled.div`
  max-width: 480px;
  margin: 0 auto;
  text-align: left;
`;
const MainStyle = styled.div`
  background-color: #f6f6f6;
  max-width: 480px;
  padding: 0 1.5rem 0 1.5rem;

  a:visited,
  a:link,
  a:active {
    color: black;
    text-decoration: none;
  }

  button {
    border: none;
    width: 100%;
    background: none;
  }
`;

const TipCommunityContain = styled.div`
  display: flex;

  margin-bottom: 1.5rem;
`;

const TipCommunityScroll = styled(motion.div)`
  overflow: scroll;
`;
