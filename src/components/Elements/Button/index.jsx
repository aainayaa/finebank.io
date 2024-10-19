import PropTypes from 'prop-types';
const Button = (props) => {
  const { children, variant, type } = props;

  return (
    <Button
      className={`h-12 rounded-md text-sm ${variant}`}
      type={type}
    >
      {children}
    </Button>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
export default Button