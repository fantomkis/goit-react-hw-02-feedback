import PropTypes from 'prop-types';
function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <div>
      <h2 className="stats">Statistics</h2>
      <ul>
        <li>
          <p>
            Good:
            <span>{good}</span>
          </p>
        </li>
        <li>
          <p>
            Neutral:
            <span>{neutral}</span>
          </p>
        </li>
        <li>
          <p>
            Bad:
            <span>{bad}</span>
          </p>
        </li>
        <li>
          <p>
            Total:
            <span>{total}</span>
          </p>
        </li>
        <li>
          <p>
            Positive feedback:
            <span>{positivePercentage}</span>
          </p>
        </li>
      </ul>
    </div>
  );
}
Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.func,

  positivePercentage: PropTypes.func,
};

export default Statistics;
