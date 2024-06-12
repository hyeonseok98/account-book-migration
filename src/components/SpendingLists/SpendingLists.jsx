import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import SpendingDetail from "./../SpendingDetail/SpendingDetail";

export default function SpendingLists() {
  const navigate = useNavigate();
  const spendingLists = useSelector((state) => state.spendings.spendingLists);
  const selectedMonth = useSelector((state) => state.spendings.selectedMonth);

  const handleMoveDetailPage = (id) => {
    navigate(`/spending/${id}`);
  };
  const monthlySpendingLists = spendingLists.filter(
    (list) => selectedMonth === Number(list.date.slice(5, 7))
  );

  return (
    <Section>
      <ul>
        {monthlySpendingLists.length === 0 ? (
          <NoSpendingDiv>지출이 없습니다.</NoSpendingDiv>
        ) : (
          monthlySpendingLists.map((itemInfo) => (
            <li
              key={itemInfo.id}
              onClick={() => handleMoveDetailPage(itemInfo.id)}
            >
              <SpendingDetail itemInfo={itemInfo} />
            </li>
          ))
        )}
      </ul>
    </Section>
  );
}

const Section = styled.section`
  display: flex;
  flex-direction: column;
  width: 800px;
  padding: 20px;
  border-radius: 16px;
  background-color: #fff;

  ul {
    display: flex;
    flex-direction: column;
    gap: 10px;
    color: #007bff;

    li {
      max-width: 800px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 15px 20px;
      border-radius: 8px;
      font-size: 1.6rem;
      font-weight: 600;
      background-color: #f9f9f9;
      box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px;
      cursor: pointer;
      transition: transform 0.2s ease;

      &:hover {
        transform: scale(1.02);
      }
    }
  }
`;

const NoSpendingDiv = styled.div`
  padding: 15px 20px;
  border-radius: 8px;
  text-align: center;
  color: #9d9c9c;
  font-size: 1.6rem;
  font-weight: 600;
  background-color: #f9f9f9;
`;
