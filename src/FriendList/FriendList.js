import React from "react";
import PropTypes from "prop-types";
import styles from "./FriendList.module.scss";

const FriendListItem = ({ avatar, name, isOnline }) => (
  <li className={styles.item}>
    <span
      className={isOnline ? styles.status + ` ${styles.online}` : styles.status}
    ></span>
    <img className={styles.avatar} src={avatar} alt={name} width="48" />
    <p className={styles.name}>{name}</p>
  </li>
);
FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool,
};
FriendListItem.defaultProps = {
  isOnline: false,
};

const FriendList = ({ friends }) => (
  <ul className={styles.friendList}>
    {friends.map((friend) => (
      <FriendListItem key={friend.id} {...friend} />
    ))}
  </ul>
);

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};

export default FriendList;
