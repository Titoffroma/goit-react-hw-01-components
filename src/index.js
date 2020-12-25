import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import Profile from "./Profile/Profile";
import Statistics from "./Statistics/Statistics";
import user from "./datae/user.json";
import statsData from "./datae/statistical-data.json";
import randomizeBgColor from "./randomColors";
import FriendList from "./FriendList/FriendList";
import friendList from "./datae/friends";
import TransactionsHisory from "./Transactions/TransactionHistory";
import transactions from "./datae/transactions.json";

ReactDOM.render(
  <React.StrictMode>
    <div className="container">
      <Profile {...user} />
      <Statistics title={"Your Filetypes Stats"} data={statsData} />
      <FriendList friends={friendList} />
      <TransactionsHisory data={transactions} />
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);

const statItems = document.querySelectorAll(".stat-list .item");

statItems.forEach((item, index, arr) => {
  item.style.background = randomizeBgColor();
  item.style.width = `calc(100% / ${arr.length})`;
});
