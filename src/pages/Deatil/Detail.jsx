import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { Input } from "../../components/Commons/Input";
import {
  deleteSpending,
  updateSpending,
} from "../../redux/slices/spending.slice";

export default function DetailPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const spendingLists = useSelector((state) => state.spendings.spendingLists);

  const paymentDateRef = useRef(null);
  const itemCategoryRef = useRef(null);
  const expenseAmountRef = useRef(null);
  const expenseDetailRef = useRef(null);

  const filteredList = spendingLists.filter((spendingList) => {
    return spendingList.id === id;
  });

  useEffect(() => {
    filteredList.forEach((detailItem) => {
      paymentDateRef.current.value = detailItem.date;
      itemCategoryRef.current.value = detailItem.item;
      expenseAmountRef.current.value = detailItem.amount;
      expenseDetailRef.current.value = detailItem.description;
    });
  }, [filteredList]);

  const handleUpdateSpending = (e) => {
    e.preventDefault();
    const date = paymentDateRef.current.value;
    const item = itemCategoryRef.current.value.trim();
    const amount = Number(expenseAmountRef.current.value);
    const description = expenseDetailRef.current.value.trim();

    if (isNaN(amount)) {
      alert("금액은 숫자만 입력해주세요");
      expenseAmountRef.current.focus();
      return;
    }

    dispatch(
      updateSpending({
        id,
        date,
        item,
        amount,
        description,
      })
    );

    navigate("/");
  };

  const handleDeleteSpendingList = () => {
    const confirmDelete = window.confirm(
      "정말로 이 지출 항목을 삭제하시겠습니까?"
    );
    if (!confirmDelete) return;

    dispatch(deleteSpending(id));
    navigate("/");
  };

  const handleGoBackPage = () => {
    navigate(-1);
  };

  return (
    <Section>
      <Form>
        <Input
          label="날짜"
          type="date"
          placeholder="YYYY-MM-DD"
          ref={paymentDateRef}
          width="100%"
        />
        <Input
          label="항목"
          type="text"
          placeholder="지출 항목"
          ref={itemCategoryRef}
          width="100%"
        />
        <Input
          label="금액"
          type="number"
          placeholder="지출 금액"
          ref={expenseAmountRef}
          width="100%"
        />
        <Input
          label="내용"
          type="text"
          placeholder="지출 내용"
          ref={expenseDetailRef}
          width="100%"
        />
        <div>
          <Button
            $backgroundColor="#007bff"
            onClick={handleUpdateSpending}
            type="button"
          >
            수정
          </Button>
          <Button
            $backgroundColor="#ff4d4d"
            onClick={handleDeleteSpendingList}
            type="button"
          >
            삭제
          </Button>
          <Button
            $backgroundColor="#6c757d"
            onClick={handleGoBackPage}
            type="button"
          >
            뒤로 가기
          </Button>
        </div>
      </Form>
    </Section>
  );
}

const Section = styled.section`
  width: 800px;
  border-radius: 16px;
  padding: 20px;
  background-color: #fff;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;
`;

const Button = styled.button`
  padding: 8px 20px;
  margin-top: 10px;
  margin-right: 10px;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 1.4rem;
  filter: brightness(1);
  background-color: ${(props) => props.$backgroundColor || "#007bff"};
  transition: filter 0.2s ease-in-out 0s;
  cursor: pointer;

  &:hover {
    filter: brightness(0.8);
  }
`;
