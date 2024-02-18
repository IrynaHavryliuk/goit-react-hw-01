import PropTypes from 'prop-types';
import css from './FriendList.module.css'; 

const FriendListItem = ({ avatar, name, isOnline }) => {
  const statusText = isOnline ? 'Online' : 'Offline';
  const statusClassName = isOnline ? css.online : css.offline; 

  return (
    <div className={`${css.item} ${css['friend-item']}`}>
      <img className={css.avatar} src={avatar} alt="Avatar" width="100" height="100" />
      <div>
        <p className={css.name}>{name}</p>
        <p className={`${css.status} ${statusClassName}`}>{statusText}</p>
      </div>
    </div>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;