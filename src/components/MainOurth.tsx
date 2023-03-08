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

const MainOurth = () => {
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
            <Mission />
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
            <Community />
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
`;

const TipCommunityContain = styled.div`
  display: flex;
`;
