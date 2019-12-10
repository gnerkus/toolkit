import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const mapFlexGrowToClass = grow => {
  return typeof grow === 'number' ? `gFlexItem--flexGrow${grow}` : undefined
}
  

const propTypes = {
  grow: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, true, false, null]),
  component: PropTypes.string,
};

const FlexItem = ({
  children,
  className,
  grow = true,
  component = 'div',
  ...rest
}) => {
  const classes = classnames(
    'gFlexItem',
    grow ? mapFlexGrowToClass(grow) : 'gFlexItem--flexGrowZero',
    className
  );

  const Component = component;

  return (
    <Component
      className={classes}
      {...rest}
    >
      {children}
    </Component>
  );
};

FlexItem.displayName = 'FlexItem';
FlexItem.propTypes = propTypes;

export default FlexItem;