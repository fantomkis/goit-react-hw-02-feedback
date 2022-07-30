import PropTypes from 'prop-types';
function Section({ title, children }) {
  return (
    <>
      <h1 className="tetle">{title}</h1>
      {children}
    </>
  );
}
Section.ropTypes = {
  title: PropTypes.string,
  children: PropTypes.array,
};

export default Section;
