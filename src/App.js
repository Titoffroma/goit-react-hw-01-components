import Profile from "./Profile/Profile";
import Statistics from "./Statistics/Statistics";
import user from "./datae/user.json";
import statsData from "./datae/statistical-data.json";
import FriendList from "./FriendList/FriendList";
import friendList from "./datae/friends";
import TransactionsHisory from "./Transactions/TransactionHistory";
import transactions from "./datae/transactions.json";

const App = () => (
  <div className="container">
    <Profile {...user} />
    <Statistics title={"Your Filetypes Stats"} data={statsData} />
    <FriendList friends={friendList} />
    <TransactionsHisory data={transactions} />
  </div>
);

export default App;
