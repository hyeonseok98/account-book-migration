import { useEffect } from "react";
import { getUserInfos } from "../../api/auth.api";
import AddSpendings from "../../components/AddSpendings/AddSpendings";
import MonthlySpending from "../../components/MonthlySpending/MonthlySpending";
import SpendingGraph from "../../components/SpendingGraph";
import SpendingLists from "../../components/SpendingLists/SpendingLists";
import userInfoStore from "../../stores/userInfoStore";

export default function HomePage() {
  const { setUserInfo, isLoggedIn } = userInfoStore((state) => ({
    setUserInfo: state.setUserInfo,
    isLoggedIn: state.isLoggedIn,
  }));

  useEffect(() => {
    if (isLoggedIn()) {
      const getData = async () => {
        const userInfo = await getUserInfos();
        setUserInfo(userInfo);
      };

      getData();
    }
  }, [isLoggedIn, setUserInfo]);

  return (
    <>
      <AddSpendings />
      <MonthlySpending />
      <SpendingGraph />
      <SpendingLists />
    </>
  );
}
