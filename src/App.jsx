import Section from "./components/Section/Section";
import Profile from "./components/Profile/Profile";
import FriendList from "./components/FriendList/FriendList";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import user from "./data/user.json";
import friends from "./data/friends.json";
import transactions from "./data/transactions.json";

export default function App() {
  return (
    <div>
      <Section title={"Profile"}>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </Section>

      <Section title={"Friend list"}>
        <FriendList friends={friends} />
      </Section>

      <Section title={"Transaction history"}>
        <TransactionHistory transactions={transactions} />
      </Section>
    </div>
  );
}