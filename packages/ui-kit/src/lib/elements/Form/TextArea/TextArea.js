import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const RESIZE_VALUES = [
  'vertical',
  'horizontal',
  'both',
  'none'
];

const resizeToClassMap = {
  'vertical': 'gTextArea--resizeVertical',
  'horizontal': 'gTextArea--resizeHorizontal',
  'both': 'gTextArea--resizeBoth',
  'none': 'gTextArea--resizeNone'
}

const propTypes = {
  name: PropTypes.string,
  placeholder: PropTypes.string,
  resize: PropTypes.oneOf(RESIZE_VALUES),
  id: PropTypes.string,
  fullWidth: PropTypes.bool,
  isInvalid: PropTypes.bool,
  rows: PropTypes.number
};

const TextArea = React.forwardRef(
  ({
    children,
    id,
    name,
    placeholder,
    className,
    fullWidth = false,
    isInvalid = false,
    rows = 6,
    resize = 'vertical',
    ...props
  },
  inputRef
) => {
  
  const classes = classNames(
    'gTextArea',
    className,
    {
      'gTextArea--fullWidth': fullWidth,
    },
    resizeToClassMap[resize]
  );

  return (
    <textarea
      id={id}
      name={name}
      placeholder={placeholder}
      className={classes}
      rows={rows}
      resize={resize}
      ref={(elem) => {
        elem.setCustomValidity(isInvalid ? 'Invalid' : '')
      }}
      {...props}
    >
      {children}
    </textarea>
  )
});

TextArea.displayName = 'TextArea';
TextArea.propTypes = propTypes;

export default TextArea;