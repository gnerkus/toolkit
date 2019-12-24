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
  options: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.node.isRequired
    })
  ),
  /**
   * Simulates no selection by creating an empty, selected, hidden first option
   */
  hasNoInitialSelection: PropTypes.bool,
  defaultValue: PropTypes.string,
};

const Select = React.forwardRef(
  ({
    id,
    name,
    placeholder,
    value,
    className,
    fullWidth = false,
    readOnly,
    isInvalid = false,
    options = [],
    hasNoInitialSelection = false,
    defaultValue,
    ...props
  },
  inputRef
) => {

  React.useEffect(() => {
    inputRef.current.setCustomValidity(isInvalid ? 'Invalid': '')
  })
  
  const classes = classNames(
    'gSelect',
    className,
    {
      'gSelect--fullWidth': fullWidth,
    }
  );

  let emptyOptionNode;
  if (hasNoInitialSelection) {
    emptyOptionNode = (
      <option value="" disabled hidden style={{ display: 'none' }}>
        &nbsp;
      </option>
    );
  }

  let selectDefaultValue;
  if (value == null) {
    selectDefaultValue = defaultValue || '';
  }

  return (
    <select
      id={id}
      name={name}
      placeholder={placeholder}
      value={value}
      defaultValue={selectDefaultValue}
      readOnly={readOnly}
      className={classes}
      ref={inputRef}
      {...props}
    >
      {emptyOptionNode}
      {options.map((option, index) => {
        const { text, ...rest } = option;
        return (
          <option {...rest} key={index}>
            {text}
          </option>
        );
      })}
    </select>
  );
});

Select.displayName = 'Select';
Select.propTypes = propTypes;

export default Select;