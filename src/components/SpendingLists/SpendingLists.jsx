import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useSpendings } from "../../hooks/useSpendings";
import selectedMonthStore from "../../stores/selectedMonthStore";
import userInfoStore from "../../stores/userInfoStore";
import SpendingDetail from "./../SpendingDetail/SpendingDetail";

export default function SpendingLists() {
  const navigate = useNavigate();
  const selectedMonth = selectedMonthStore((state) => state.selectedMonth);
  const { data: spendingLists, isLoading, isError } = useSpendings();
  const userUuid = userInfoStore((state) => state.userInfo.userUuid);

  const handleMoveDetailPage = (id, userId) => {
    userUuid === userId
      ? navigate(`/spendings/${id}`)
      : alert("본인의 지출만 수정할 수 있습니다");
  };

  if (isLoading) {
    return <div>로딩중입니다...</div>;
  }

  if (!spendingLists) {
    return <div>지출 내역이 없습니다.</div>;
  }

  if (isError) {
    return <div>데이터 조회 중 오류가 발생했습니다.</div>;
  }

  const monthlySpendingLists = spendingLists.filter(
    (list) => selectedMonth === Number(list.date.slice(5, 7))
  );

  return (
    <Section>
      <ul>
        {monthlySpendingLists.length === 0 ? (
          <NoSpendingDiv>지출이 없습니다.</NoSpendingDiv>
        ) : (
          monthlySpendingLists.map((itemInfo) => {
            return (
              <li
                key={itemInfo.id}
                onClick={() =>
                  handleMoveDetailPage(itemInfo.id, itemInfo.userUuid)
                }
              >
                <SpendingDetail itemInfo={itemInfo} />
              </li>
            );
          })
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
