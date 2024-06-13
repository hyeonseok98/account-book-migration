import { useEffect, useRef } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import { useCreateSpending } from "../../hooks/useSpendings";
import selectedMonthStore from "../../stores/selectedMonthStore";
import { Input } from "../Commons/Input";
import userInfoStore from "./../../stores/userInfoStore";

export default function AddSpendings() {
  const addSpending = useCreateSpending();
  const nickname = userInfoStore((state) => state.userInfo.nickname);
  const selectedMonth = selectedMonthStore((state) => state.selectedMonth);

  const paymentDateRef = useRef(null);
  const itemCategoryRef = useRef(null);
  const expenseAmountRef = useRef(null);
  const expenseDetailRef = useRef(null);

  useEffect(() => {
    const setInitialDate = () => {
      if (paymentDateRef.current) {
        paymentDateRef.current.value =
          selectedMonth >= 10
            ? `2024-${selectedMonth}-01`
            : `2024-0${selectedMonth}-01`;
      }
    };
    setInitialDate();
  }, [selectedMonth]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const date = paymentDateRef.current.value;
    const item = itemCategoryRef.current.value.trim();
    const amount = Number(expenseAmountRef.current.value);
    const description = expenseDetailRef.current.value.trim();
    if (!(item && amount >= 0 && description)) {
      alert("유효한 항목과 0원 이상의 금액을 입력해주세요.");
      return;
    }

    addSpending.mutate({
      id: uuidv4(),
      date,
      item,
      amount,
      description,
      createdBy: nickname,
    });

    paymentDateRef.current.value =
      selectedMonth >= 10
        ? `2024-${selectedMonth}-01`
        : `2024-0${selectedMonth}-01`;
    itemCategoryRef.current.value = "";
    expenseAmountRef.current.value = "";
    expenseDetailRef.current.value = "";
  };

  return (
    <Section>
      <Form onSubmit={handleSubmit}>
        <Input
          label="날짜"
          type="date"
          placeholder="YYYY-MM-DD"
          ref={paymentDateRef}
        />
        <Input
          label="항목"
          type="text"
          placeholder="지출 항목"
          ref={itemCategoryRef}
        />
        <Input
          label="금액"
          type="number"
          placeholder="지출 금액"
          ref={expenseAmountRef}
        />
        <Input
          label="내용"
          type="text"
          placeholder="지출 내용"
          ref={expenseDetailRef}
        />
        <Button>저장</Button>
      </Form>
    </Section>
  );
}

const Section = styled.section`
  width: 800px;
  height: 95px;
  border-radius: 16px;
  padding: 20px;
  background-color: #fff;
`;

const Form = styled.form`
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  width: 23%;
  height: 36px;
  padding: 6px 20px;
  margin-top: 20px;
  border: none;
  border-radius: 4px;
  font-size: 1.4rem;
  cursor: pointer;
  color: #fff;
  background-color: #007bff;
  transition: background-color 0.2s ease-in-out 0s;

  &:hover {
    background-color: #005aba;
  }
`;
