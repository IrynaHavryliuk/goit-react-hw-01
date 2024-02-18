import Section from "./components/Section/Section";
import SocialProfile from "./components/SocialProfile/SocialProfile";
import FriendList from "./components/FriendList/FriendList";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import user from "./data/user.json";
import friends from "./data/friends.json";
import transactions from "./data/transactions.json";

export default function App() {
  return (
    <div>
      <Section title={"'Profile'"}>
        <SocialProfile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </Section>

      <Section title={"'Friend list'"}>
        <FriendList friends={friends} />
      </Section>

      <Section title={"'Transaction history'"}>
        <TransactionHistory transactions={transactions} />
      </Section>
    </div>
  );
}