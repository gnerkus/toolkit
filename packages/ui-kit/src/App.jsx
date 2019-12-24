import React from 'react';
import { Button } from './lib';
import { Flex } from './lib';
import { Form } from './lib';

const textInputRef = React.createRef();
const numInputRef = React.createRef();
const selectInputRef = React.createRef();
const textAreaRef = React.createRef();
const checkboxRef = React.createRef();

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: false
    }

    this.onChange = this.onChange.bind(this)
  }

  onChange(e) {
    this.setState({
      checked: e.target.checked
    });
  }

  render() {
    return (
      <React.Fragment>
    <Flex.FlexGroup
  direction="row"
  gutterSize="s"
>
  <Flex.FlexItem
    grow={false}
  >
    <Button.Button
      fill
    >
      Primary
    </Button.Button>
  </Flex.FlexItem>
  <Flex.FlexItem
    grow={false}
  >
    <Button.Button
      color="secondary"
      fill
    >
      Secondary
    </Button.Button>
  </Flex.FlexItem>
  <Flex.FlexItem
    grow={false}
  >
    <Button.Button
      color="danger"
      fill
    >
      Warning
    </Button.Button>
  </Flex.FlexItem>
  <Flex.FlexItem>
    <Form.TextField
      placeholder="Test placeholder"
      ref={textInputRef}
      isInvalid={true}
    />
  </Flex.FlexItem>
  <Flex.FlexItem>
    <Form.NumberField
      placeholder="1"
      ref={numInputRef}
      isInvalid={true}
    />
  </Flex.FlexItem>
  <Flex.FlexItem>
    <Form.Select
      value="First"
      options={[
        {text: 'First', value: 'First'},
        {text: 'Second', value: 'Second'}
      ]}
      onChange={() => {}}
      isInvalid={true}
      ref={selectInputRef}
    />
  </Flex.FlexItem>
  <Flex.FlexItem>
    <Form.TextArea
      rows={3}
      placeholder="Textarea placeholder"
      ref={textAreaRef}
      isInvalid={true}
    >
      Test text area text
    </Form.TextArea>
  </Flex.FlexItem>
  <Flex.FlexItem>
    <Form.Checkbox
      id="checkbox1"
      label="Test Checkbox"
      checked={this.state.checked}
      onChange={this.onChange}
      ref={checkboxRef}
    />
  </Flex.FlexItem>
</Flex.FlexGroup>
<Flex.FlexGroup
  direction="row"
>
  <Flex.FlexItem>
    <Button.Button
      fill
    >
      Primary
    </Button.Button>
  </Flex.FlexItem>
  <Flex.FlexItem>
    <Button.Button
      color="secondary"
      fill
    >
      Secondary
    </Button.Button>
  </Flex.FlexItem>
  <Flex.FlexItem>
    <Button.Button
      color="danger"
      fill
    >
      Warning
    </Button.Button>
  </Flex.FlexItem>
</Flex.FlexGroup>
  </React.Fragment>
    );
  }
}

export default App;
