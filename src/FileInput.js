import React, { PropTypes, Component, createElement, cloneElement } from 'react';
import reduce from 'lodash.reduce';

const renderText = ({ value }) => {
  const fileNames = reduce(value, (result, file) => {
    return [
      ...result,
      file.name,
    ];
  }, []).join(', ');

  return (
    <span>
      {fileNames}
    </span>
  );
};

const renderLayout = (props) => {
  return (
    <div>
      {props.input}
      {props.button}
      {props.text}
    </div>
  );
};

class FileInput extends Component {
  static defaultProps = {
    multiple: false,
    text: createElement(renderText),
    layout: createElement(renderLayout),
  }

  static PropTypes = {
    // Input pass throughs
    value: PropTypes.array,
    multiple: PropTypes.bool,
    // Renderers
    button: PropTypes.element,
    text: PropTypes.element,
    layout: PropTypes.element,

    // Events
    onChange: PropTypes.func,
  }

  constructor(props) {
    super(props);

    // Refs
    this.refInput = this.refInput.bind(this);
    // Events
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    const {
      multiple,
      onChange,
      value,
      button,
      text,
      layout,
      ...rest,
    } = this.props;

    const input = (
      <input
        ref={this.refInput}
        type="file"
        onChange={onChange}
        multiple={multiple}
        hidden={true}
        files={value}
        value={null}
        {...rest}
      />
    );

    const buttonEl = cloneElement(button, {
      multiple,
      value,
      onClick: this.handleClick,
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
  }

  // Refs
  refInput(input) {
    this.input = input;
  }

  // Events
  handleClick() {
    this.input.click();
  }
}

export default FileInput;