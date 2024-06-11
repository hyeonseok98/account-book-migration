import styled from "styled-components";
import tosim2 from "../../assets/화이팅 토심이.png";

export default function SpendingGraph() {
  return (
    <Section>
      <img src={tosim2} alt="파이팅 토심이" width="120px" height="120px" />
    </Section>
  );
}

const Section = styled.section`
  display: flex;
  justify-content: center;
  width: 800px;
  height: 180px;
  padding: 20px;
  border-radius: 16px;
  font-size: 1.8rem;
  background-color: #fff;
`;
