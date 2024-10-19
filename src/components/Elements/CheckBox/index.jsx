import PropTypes from 'prop-types';

const CheckBox = (props) => {
  const { label, name } = props;

  return (
    <>
      <input
        type="checkbox"
        className="text-sm accent-primary"
        name={name}
        id={name}
      />
      <label htmlFor={name} className="text-sm text-gray-01 ms-6">
        {label}
      </label>
    </>
  );
};

CheckBox.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default CheckBox;
