import AddSpending from "../../components/AddSpending/AddSpending";
import MonthlySpending from "../../components/MonthlySpending/MonthlySpending";
import SpendingGraph from "../../components/SpendingGraph";
import SpendingLists from "../../components/SpendingLists/SpendingLists";

export default function HomePage() {
  return (
    <>
      <AddSpending />
      <MonthlySpending />
      <SpendingGraph />
      <SpendingLists />
    </>
  );
}
