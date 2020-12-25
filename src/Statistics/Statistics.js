import React from "react";
import PropTypes from "prop-types";

const StatsItem = ({ fileType, percentage }) => (
  <li className="item">
    <span className="label">{fileType}</span>
    <span className="percentage">{percentage}%</span>
  </li>
);

StatsItem.propTypes = {
  fileType: PropTypes.string.isRequired,
  percentage: PropTypes.string.isRequired,
};

const Stats = ({ data }) => (
  <ul className="stat-list">
    {data.map((stat) => (
      <StatsItem
        key={stat.id}
        fileType={stat.label}
        percentage={stat.percentage}
      />
    ))}
  </ul>
);

const Statistics = ({ title, data }) => (
  <section className="statistics">
    <h2 className="title">{title}</h2>
    <Stats data={data} />
  </section>
);

Statistics.propTypes = {
  title: PropTypes.string,
  data: PropTypes.array.isRequired,
};
Statistics.defaultProps = {
  title: "",
};
export default Statistics;
