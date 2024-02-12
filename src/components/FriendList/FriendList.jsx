const FriendListItem = ({ friends: { name, isOnline } }) => {

    return (
      <div>
       <img src="" alt="Avatar" width="48"  />
       <p>Friend name: {name} </p>
       <p>Friend status: {isOnline}</p>
      </div>
    );
  };
  
 export const FriendList = () => {
    return (
  <ul>
      <li>
          <FriendListItem />
      </li>
  </ul>
    );
  }