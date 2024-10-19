import PropTypes from 'prop-types';

const Button = (props) => {
  const { children, variant, type } = props;

  return (
    <button
      className={`h-12 rounded-md text-sm w-full text-white ${variant === 'primary' ? 'bg-primary' : 'bg-secondary'}`}
      type={type}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.string,
  type: PropTypes.string,
};

Button.defaultProps = {
  variant: 'primary',
  type: 'button',
};

export default Button;
