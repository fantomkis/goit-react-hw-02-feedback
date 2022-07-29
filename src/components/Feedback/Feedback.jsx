import PropTypes from 'prop-types';

function Feedback({ good, neutral, bad, onLeaveFeedback }) {
  return (
    <div>
      <h1 className="tetle">Please leave feedback</h1>
      <button onClick={onLeaveFeedback} className="" name="good" type="button">
        Good
      </button>
      <button
        onClick={onLeaveFeedback}
        className=""
        name="neutral"
        type="button"
      >
        Neutral
      </button>
      <button onClick={onLeaveFeedback} className="" name="bad" type="button">
        Bad
      </button>
      <h2 className="stats">Statistics</h2>
      <p>
        Good:
        <span>{good}</span>
      </p>
      <p>
        Neutral:
        <span>{neutral}</span>
      </p>
      <p>
        Bad:
        <span>{bad}</span>
      </p>
    </div>
  );
}
Feedback.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  onLeaveFeedback: PropTypes.func,
};

export default Feedback;
