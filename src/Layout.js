import React from 'react';
import PropTypes from 'prop-types';
import {
  setPropTypes,
  setDisplayName,
  compose,
} from 'recompose';

export const Layout = ({
  input,
  button,
  text,
}) => (
  <div>
    {input}
    {button}
    {text}
  </div>
);

export const enhance = compose(
  setDisplayName('Layout'),
  setPropTypes({
    input: PropTypes.node.isRequired,
    button: PropTypes.node.isRequired,
    text: PropTypes.node.isRequired,
  }),
);

export default enhance(Layout);