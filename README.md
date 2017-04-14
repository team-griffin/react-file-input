# react-file-input

```sh
npm i --save @team-griffin/react-file-input

yarn add @team-griffin/react-file-input
```

This package allows you to design fancy file inputs, whilst not having an opinion on how you want to handle your forms or design.

## Usage

```jsx
import FileInput from '@team-griffin/react-file-input';

return (
  <FileInput
    id="a-unique-id-for-this-this-field"
    value={theListOfFilesNormallyStoredInReduxForm}
    button={(
      <button type="button">
        The button displayed
      </button>
    )}
    onChange={(e) => howToHandleTheChange}
  />
);
```

**Note:** It is recommended that in your application you wrap this component so that you are not having to constantly recode it. I would suggest also calling your component `FileInput` and then importing this component as `ReactFileInput`.

## Customization

By default the file input will automatically render the text and layout for you. But you are welcome to configure this as much as you desire.

On the `<FileInput/>` component there are 2 props `layout` and `text`. You can use these to augment how this component renders.

```jsx
const MyText = ({
  multiple,
  value,
}) => {
  return (
    <span>
      How ever you'd like to diplay your values.
    </span>
  );
};

const MyLayout = ({
  input,
  button,
  text,
  multiple,
  value,
}) => {
  return (
    <div>
      Your structure.
    </div>
  );
};

return (
  <FileInput
    button={<button>My Button</button>}
    layout={(<MyLayout/>)}
    text={(<MyText/>)}
  />
);

```

## API

### FileInput

All other props are passed through to the input.

| Prop     | Description                             | Type    | Default |
|----------|-----------------------------------------|---------|---------|
| id*      | Field Id                                | String  |         |
| value    | Array of values                         | Array   |         |
| multiple | To support multiple values              | Bool    | false   |
| button   | The button to render                    | Element |         |
| text     | The text to render                      | Element | Text    |
| layout   | The layout to render                    | Element | Layout  |
| onChange | The callback for when the input changes | Func    |         |

### Layout

The layout component is an internal component. But these are the props we pass to it or your custom one.

| Prop     | Description                | Type    | Default |
|----------|----------------------------|---------|---------|
| value    | Array of values            | Array   |         |
| multiple | To support multiple values | Bool    |         |
| input    | The input render           | Element |         |
| button   | The button to render       | Element |         |
| text     | The text to render         | Element | Text    |

### Text

The text component is an internal component. But these are the props we pass to it or your custom one.

| Prop     | Description                | Type  | Default |
|----------|----------------------------|-------|---------|
| value    | Array of values            | Array |         |
| multiple | To support multiple values | Bool  |         |