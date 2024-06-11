import AddSpending from "../../components/AddSpending";
import MonthlySpending from "../../components/MonthlySpending";
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
