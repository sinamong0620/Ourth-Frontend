import styled from "styled-components";
import Header from "./Header";
import Profile from "./Profile";
import Mission from "./Mission";
import Ranking from "./Ranking";
import Tip from "./Tip";
import Community from "./Community";
import Footer from "../components/Footer";
import Link from "next/link";
import { motion } from "framer-motion";
import useMissionList from "../hooks/useMissionList";
import AddMission from "./AddMission";
import axios from "axios";

const MainOurth = () => {
  const { remainMission } = useMissionList();
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
            {remainMission.length === 0 ? (
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

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 10 }}
          transition={{ delay: 0.3 }}
        >
          <TipCommunityContain>
            <Tip />
            <Tip />
          </TipCommunityContain>
        </motion.div>
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
`;
