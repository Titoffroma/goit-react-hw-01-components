import React from "react";
import PropTypes from "prop-types";
import imagePlaceholder from "../img/notImage.png";

const Bio = ({ avatar, name, tag, location }) => (
  <div className="description">
    <img src={avatar} alt="Аватар пользователя" className="avatar" />
    <p className="name">{name}</p>
    <p className="tag">@{tag}</p>
    <p className="location">{location}</p>
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
  <ul className="stats">
    <li>
      <span className="label">Followers</span>
      <span className="quantity">{stats.followers}</span>
    </li>
    <li>
      <span className="label">Views</span>
      <span className="quantity">{stats.views}</span>
    </li>
    <li>
      <span className="label">Likes</span>
      <span className="quantity">{stats.likes}</span>
    </li>
  </ul>
);

const Profile = ({ name, tag, location, avatar, stats }) => (
  <div className="profile">
    <Bio name={name} tag={tag} location={location} avatar={avatar} />
    <Stats stats={stats} />
  </div>
);

export default Profile;
