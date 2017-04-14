import React, {
  createElement,
  cloneElement,
} from 'react';
import PropTypes from 'prop-types';
import {
  setPropTypes,
  setDisplayName,
  compose,
  defaultProps,
  withHandlers,
} from 'recompose';
import Text from './Text';
import Layout from './Layout';

export const FileInput = ({
  multiple,
  onChange,
  onClick,
  value,
  button,
  text,
  layout,
  ...rest
}) => {
  const input = (
    <input
      type="file"
      onChange={onChange}
      multiple={multiple}
      hidden={true}
      files={value}
      value=""
      {...rest}
    />
  );

  const buttonEl = cloneElement(button, {
    multiple,
    value,
    onClick,
  });

  const textEl = cloneElement(text, {
    multiple,
    value,
  });

  const layoutEl = cloneElement(layout, {
    input,
    button: buttonEl,
    text: textEl,
    multiple,
    value,
  });

  return layoutEl;
};

export const enhance = compose(
  setDisplayName('FileInput'),
  setPropTypes({
    // Input pass throughs
    id: PropTypes.string.isRequired,
    value: PropTypes.array,
    multiple: PropTypes.bool,
    // Renderers
    button: PropTypes.element,
    text: PropTypes.element,
    layout: PropTypes.element,

    // Events
    onChange: PropTypes.func,
  }),
  defaultProps({
    multiple: false,
    text: createElement(Text),
    layout: createElement(Layout),
  }),
  withHandlers({
    onClick: ({
      id,
    }) => () => {
      document.getElementById(id).click();
    },
  }),
);

export default enhance(FileInput);