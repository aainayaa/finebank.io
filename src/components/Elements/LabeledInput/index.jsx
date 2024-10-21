import PropTypes from 'prop-types';
import Input from './Input';
import Label from './Label';

const LabeledInput = (props) => {
  const { label, name, type, placeholder } = props;

  return (
    <>
      <Label htmlFor={name}>{label}</Label>
      <Input name={name} type={type} placeholder={placeholder} />
    </>
  );
};

LabeledInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
};

LabeledInput.defaultProps = {
  type: 'text',
  placeholder: '',
};

export default LabeledInput;
