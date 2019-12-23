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
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number
};

const NumberField = React.forwardRef(
  ({
    id,
    name,
    placeholder,
    value,
    className,
    fullWidth = false,
    readOnly,
    isInvalid = false,
    min,
    max,
    step,
    ...props
  },
  inputRef
) => {
  
  const classes = classNames(
    'gNumberField',
    className,
    {
      'gNumberField--fullWidth': fullWidth,
    }
  );

  return (
    <input
      type="number"
      id={id}
      name={name}
      placeholder={placeholder}
      value={value}
      min={min}
      max={max}
      step={step}
      readOnly={readOnly}
      className={classes}
      ref={(elem) => {
        elem.setCustomValidity(isInvalid ? 'Invalid' : '')
      }}
      {...props}
    />
  );
});

NumberField.displayName = 'NumberField';
NumberField.propTypes = propTypes;

export default NumberField;