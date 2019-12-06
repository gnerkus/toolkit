import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const gutterSizeToClassNameMap = {
  none: null,
  xs: 'gFlexGroup--gutterXS',
  s: 'gFlexGroup--gutterS',
  m: 'gFlexGroup--gutterM',
  l: 'gFlexGroup--gutterL',
  xl: 'gFlexGroup--gutterXL'
};

const alignItemsToClassNameMap = {
  stretch: null,
  flexStart: 'gFlexGroup--alignItemsFlexStart',
  flexEnd: 'gFlexGroup--alignItemsFlexEnd',
  center: 'gFlexGroup--alignItemsCenter',
  baseline: 'gFlexGroup--alignItemsBaseline'
};

const justifyContentToClassMap = {
  flexStart: null,
  flexEnd: 'gFlexGroup--justifyContentFlexEnd',
  center: 'gFlexGroup--justifyContentCenter',
  spaceBetween: 'gFlexGroup--justifyContentSpaceBetween',
  spaceAround: 'gFlexGroup--justifyContentSpaceAround',
  spaceEvenly: 'gFlexGroup--justifyContentSpaceEvenly'
};

const directionToClassMap = {
  row: 'gFlexGroup--directionRow',
  rowReverse: 'gFlexGroup--directionRowReverse',
  column: 'gFlexGroup--directionColumn',
  columnReverse: 'gFlexGroup--directionColumnReverse'
};

const VALID_ELEMENTS = ['div', 'span'];

const propTypes = {
  alignItems: PropTypes.oneOf(['stretch', 'flexStart', 'flexEnd', 'center', 'baseline']),
  component: PropTypes.oneOf(VALID_ELEMENTS),
  direction: PropTypes.oneOf(['row', 'rowReverse', 'column', 'columnReverse']),
  gutterSize: PropTypes.oneOf(['xs', 's', 'm', 'l', 'xl']),
  justifyContent: PropTypes.oneOf(['flexStart', 'flexEnd', 'center', 'spaceBetween', 'spaceAround', 'spaceEvenly']),
  responsive: PropTypes.bool,
  wrap: PropTypes.bool
};

const FlexGroup = React.forwardRef(
  ({
    children,
    className,
    alignItems = 'stretch',
    component = 'div',
    direction = 'row',
    gutterSize = 'l',
    justifyContent = 'flexStart',
    responsive = true,
    wrap = true,
    ...rest
  },
  flexRef
  ) => {
    const classes = classNames(
      'gFlexGroup',
      alignItems ? alignItemsToClassNameMap[alignItems] : null,
      direction ? directionToClassMap[direction] : null,
      gutterSize ? gutterSizeToClassNameMap[gutterSize] : null,
      justifyContent ? justifyContentToClassMap[justifyContent] : null,
      {
        'gFlexGroup--responsive': responsive,
        'gFlexGroup--wrap': wrap
      },
      className
    );

    if (!VALID_ELEMENTS.includes(component)) {
      throw new Error(
        `${component} is not a valid element type. Use \'div\' or \'span\'.`
      );
    }

    return component === 'span' ? (
      <span
        className={classes}
        ref={flexRef}
        {...rest}
      >
        {children}
      </span>
    ) : (
      <div
        className={classes}
        ref={flexRef}
        {...rest}
      >
        {children}
      </div>
    )
  }
);

FlexGroup.displayName = 'FlexGroup';
FlexGroup.propTypes = propTypes;

export default FlexGroup;