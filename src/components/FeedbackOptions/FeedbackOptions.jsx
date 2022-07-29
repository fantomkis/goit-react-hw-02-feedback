import PropTypes from 'prop-types';
function FeedbackOptions({ onLeaveFeedback, options }) {
  return (
    <div>
      {options.map(({ name, type, value }) => (
        <button onClick={onLeaveFeedback} className="" name={name} type={type}>
          {value}
        </button>
      ))}
    </div>
  );
}
FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func,
  options: PropTypes.array,
};

export default FeedbackOptions;
