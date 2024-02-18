import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import css from './FriendList.module.css'; 

const FriendList = ({ friends }) => {
  return (
    <section className="section"> 
      <div className="container"> 
        <ul className={css['friend-list']}> 
          {friends.map(friend => (
            <li key={friend.id}>
              <FriendListItem {...friend} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

export default FriendList;