import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const propTypes = {
  name: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  readOnly: PropTypes.bool,
  id: PropTypes.string,
  fullWidth: PropTypes.bool,
  isInvalid: PropTypes.bool,
};

const TextField = React.forwardRef(
  ({
    id,
    name,
    placeholder,
    value,
    className,
    fullWidth = false,
    readOnly,
    isInvalid = false,
    ...props
  },
  inputRef
) => {
  
  const classes = classNames(
    'gTextField',
    className,
    {
      'gTextField--fullWidth': fullWidth,
    }
  );

  const control = (
    <input
      type="text"
      id={id}
      name={name}
      placeholder={placeholder}
      value={value}
      readOnly={readOnly}
      className={classes}
      ref={inputRef}
      ref={(elem) => {
        elem.setCustomValidity(isInvalid ? 'Invalid' : '')
      }}
      {...props}
    />
  );

  console.log('Input control', control);

  // if (isInvalid) {
  //   control.setCustomValidity('Invalid')
  // }

  return control;
});

TextField.displayName = 'TextField';
TextField.propTypes = propTypes;

export default TextField;