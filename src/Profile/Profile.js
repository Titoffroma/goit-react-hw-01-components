import React from "react";
import PropTypes from "prop-types";
import imagePlaceholder from "../img/notImage.png";
import styles from "./Profile.module.scss";

const Bio = ({ avatar, name, tag, location }) => (
  <div className={styles.description}>
    <img src={avatar} alt="Аватар пользователя" className={styles.avatar} />
    <p className={styles.name}>{name}</p>
    <p className={styles.tag}>@{tag}</p>
    <p className={styles.location}>{location}</p>
  </div>
);

Bio.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};
Bio.defaultProps = {
  avatar: imagePlaceholder,
};

const Stats = ({ stats }) => (
  <ul className={styles.stats}>
    <li>
      <span className={styles.label}>Followers</span>
      <span className={styles.quantity}>{stats.followers}</span>
    </li>
    <li>
      <span className={styles.label}>Views</span>
      <span className={styles.quantity}>{stats.views}</span>
    </li>
    <li>
      <span className={styles.label}>Likes</span>
      <span className={styles.quantity}>{stats.likes}</span>
    </li>
  </ul>
);

const Profile = ({ name, tag, location, avatar, stats }) => (
  <div className={styles.profile}>
    <Bio name={name} tag={tag} location={location} avatar={avatar} />
    <Stats stats={stats} />
  </div>
);

export default Profile;
