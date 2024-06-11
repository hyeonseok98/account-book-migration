import styled from "styled-components";

export default function SpendingDetail({ itemInfo }) {
  const { date, item, amount, description } = itemInfo;
  return (
    <>
      <ItemWrapper>
        <Date>{date}</Date>
        <Description>{`${item} - ${description}`}</Description>
      </ItemWrapper>
      <Amount>{`${amount.toLocaleString()} 원`}</Amount>
    </>
  );
}

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-grow: 1;
  margin-right: 15px;
`;

const Date = styled.span`
  font-size: 1.4rem;
  font-weight: 400;
  color: #666666;
`;

const Description = styled.span`
  max-width: 600px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Amount = styled.span`
  max-width: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
