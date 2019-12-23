import React from 'react';
import { Button } from './lib';
import { Flex } from './lib';
import { Form } from './lib';
import Select from './lib/elements/Form/Select';

const inputRef = React.createRef();

const App = () => (
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
      ref={inputRef}
    />
  </Flex.FlexItem>
  <Flex.FlexItem>
    <Form.NumberField
      placeholder="1"
      ref={inputRef}
    />
  </Flex.FlexItem>
  <Flex.FlexItem>
    <Select
      ref={inputRef}
      value="First"
      options={[
        {text: 'First', value: 'First'},
        {text: 'Second', value: 'Second'}
      ]}
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

export default App;
