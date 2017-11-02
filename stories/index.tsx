/// <reference path="./@my-types/@storybook__react__demo.d.ts"/>
import * as React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { Button, Welcome } from '@storybook/react/demo';
import Message from '../src/components/Message';
import MessageBoard from '../src/components/MessageBoard';
import 'semantic-ui-css/semantic.min.css';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);

storiesOf('Message', module)
  .add('default', () => (
    <Message.Group>
      <Message speaker="John" speech="Hello!" time="1/1/2017 23:00"/>
    </Message.Group>
  ));

storiesOf('MessageBoard', module)
  .add('default', () => (
    <MessageBoard messages={[
      { speaker: 'John', speech: 'Hello!', time: 'yesterday 13:05' },
      { speaker: 'Mary', speech: 'Hello, John!', time: 'yesterday 21:41' },
    ]}/>
  ));
