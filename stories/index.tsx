import * as React from 'react';

import { storiesOf } from '@storybook/react';
import Message from '../src/components/Message';
import MessageBoard from '../src/components/MessageBoard';
import 'semantic-ui-css/semantic.min.css';

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
