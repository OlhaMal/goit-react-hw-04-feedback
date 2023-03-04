import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => (
  <ul className={css.statisticsList}>
    <li className={css.statisticsListItem}>
      Good: <span>{good}</span>
    </li>
    <li className={css.statisticsListItem}>
      Neutral: <span>{neutral}</span>
    </li>
    <li className={css.statisticsListItem}>
      Bad: <span>{bad}</span>
    </li>
    <li className={css.statisticsListItem}>
      Total: <span>{total}</span>
    </li>
    <li className={css.statisticsListItem}>
      Positive feedback: <span>{positivePercentage} %</span>
    </li>
  </ul>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
