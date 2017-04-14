import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import FileInput from '../src';

storiesOf('File Input', module)
  .add('default', () => {
    const value = [
      { name: 'my-file-1.mp3' },
      { name: 'my-file-2.mp3' },
    ];

    return (
      <div>
        <FileInput
          id={'test'}
          value={value}
          button={(
            <button type="button">
              File
            </button>
          )}
          onChange={(e) => {
            action('change')(e.currentTarget.files[0].name);
          }}
        />
      </div>
    );
  });