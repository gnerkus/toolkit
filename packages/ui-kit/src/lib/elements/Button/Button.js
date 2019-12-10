import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const BUTTON_COLORS = [
  'primary',
  'secondary',
  'warning',
  'danger',
  'ghost',
  'text'
];

const colorToClassNameMap = {
  primary: 'gButton--primary',
  secondary: 'gButton--secondary',
  warning: 'gButton-warning',
  danger: 'gButton--danger',
  ghost: 'gButton--ghost',
  text: 'gButton--text'
};

const sizeToClassNameMap = {
  s: 'gButton--small',
  m: null
};

const iconSideToClassNameMap = {
  left: null,
  right: 'gButton--iconRight'
};

const propTypes = {
  iconType: PropTypes.string,
  iconSide: PropTypes.oneOf(['left', 'right']),
  fill: PropTypes.bool,
  color: PropTypes.oneOf(BUTTON_COLORS),
  size: PropTypes.oneOf(['s', 'm']),
  isLoading: PropTypes.bool,
  isDisabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
  contentProps: PropTypes.node,
  textProps: PropTypes.node,
  href: PropTypes.string,
  rel: PropTypes.string,
  type: PropTypes.string,
};

const Button = React.forwardRef(
  ({
      children,
      className,
      iconType,
      iconSide = 'left',
      color = 'primary',
      size = 'm',
      fill = false,
      isDisabled,
      isLoading,
      href,
      target,
      rel,
      type = 'button',
      contentProps,
      textProps,
      fullWidth,
      ...props
   },
    buttonRef
  ) => {
  // If in the loading state, force disabled to true
  isDisabled = isLoading ? true : isDisabled;

  const classes = classNames(
    'gButton',
    color ? colorToClassNameMap[color] : null,
    size ? sizeToClassNameMap[size]: null,
    iconSide ? iconSideToClassNameMap[iconSide] : null,
    className,
    {
      'gButton--fill': fill,
      'gButton--fullWidth': fullWidth
    }
  );

  // wrapper around icon and text / label
  const contentClassNames = classNames(
    'gButton__content',
    contentProps && contentProps.className
  );

  const textClassNames = classNames(
    'gButton__text',
    textProps && textProps.className
  );

  // icon for button if one exists
  let buttonIcon;

  const innerNode = (
    <span {...contentProps} className={contentClassNames}>
      {buttonIcon}
      <span {...textProps} className={textClassNames}>
        {children}
      </span>
    </span>
  );

  if (href && !isDisabled) {
    return (
      <a
        className={classes}
        href={href}
        target={target}
        rel={rel}
        ref={buttonRef}
        {...props}
      >
        {innerNode}
      </a>
    )
  }

  return (
    <button
      disabled={isDisabled}
      className={classes}
      type={type}
      ref={buttonRef}
      {...props}
    >
      {innerNode}
    </button>
  );
});

Button.displayName = 'Button';
Button.propTypes = propTypes;

export default Button;
