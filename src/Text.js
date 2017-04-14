import React from 'react';
import PropTypes from 'prop-types';
import {
  setPropTypes,
  setDisplayName,
  compose,
  withProps,
} from 'recompose';
import reduce from 'lodash.reduce';

export const Text = ({
  filenames,
}) => (
  <span>
    {filenames}
  </span>
);

export const reduceFileNames = (value) => {
  return reduce(value, (result, file) => {
    return [
      ...result,
      file.name,
    ];
  }, []).join(', ');
};

export const enhance = compose(
  setDisplayName('Text'),
  setPropTypes({
    value: PropTypes.array,
  }),
  withProps(({
    value,
  }) => {
    return {
      filenames: reduceFileNames(value),
    };
  }),
);

export default enhance(Text);