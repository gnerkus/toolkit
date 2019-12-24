import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const propTypes = {
  name: PropTypes.string,
  id: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string,
  disabled: PropTypes.bool
};

const Checkbox = React.forwardRef(
  ({
    id,
    name,
    checked = false,
    label,
    className,
    onChange,
    disabled = false,
    ...props
  },
  inputRef
) => {
  const classes = classNames(
    'gCheckbox',
    className
  );

  let optionalLabel;

  if (label) {
    optionalLabel = (
      <label className="gCheckbox__label" htmlFor={id}>
        {label}
      </label>
    )
  }

  return (
    <div className={classes}>
      <input
        className="gCheckbox__input"
        type="checkbox"
        id={id}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        ref={inputRef}
        {...props}
      />
      <div className="gCheckbox__square" />
      {optionalLabel}
    </div>
  );
});

Checkbox.displayName = 'Checkbox';
Checkbox.propTypes = propTypes;

export default Checkbox;