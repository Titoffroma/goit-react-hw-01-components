import React from "react";
import PropTypes from "prop-types";
import styles from "./Statistics.module.scss";

const StatsItem = ({ fileType, percentage }) => (
  <li className={styles.item}>
    <span className={styles.label}>{fileType}</span>
    <span className={styles.percentage}>{percentage}%</span>
  </li>
);

StatsItem.propTypes = {
  fileType: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

const Stats = ({ data }) => (
  <ul className={styles.statList}>
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
  <section className={styles.statistics}>
    <h2 className={styles.title}>{title}</h2>
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
