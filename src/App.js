import Profile from "./Components/Profile/Profile";
import Statistics from "./Components/Statistics/Statistics";
import user from "./data/user.json";
import statsData from "./data/statistical-data.json";
import FriendList from "./Components/FriendList/FriendList";
import friendList from "./data/friends";
import TransactionsHisory from "./Components/Transactions/TransactionHistory";
import transactions from "./data/transactions.json";

const App = () => (
  <div className="container">
    <Profile {...user} />
    <Statistics title="Your Filetypes Stats" data={statsData} />
    <FriendList friends={friendList} />
    <TransactionsHisory data={transactions} />
  </div>
);

export default App;
