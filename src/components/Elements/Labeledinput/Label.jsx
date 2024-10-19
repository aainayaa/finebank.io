import PropTypes from 'prop-types';

const Label = (props) => {
  const { htmlFor, children } = props;

  return (
    <label htmlFor={htmlFor} className="block text-sm mb-2">
      {children}
    </label>
  );
};

Label.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Label;
