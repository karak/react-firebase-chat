import * as React from 'react';
import Message, { MessageProps } from './Message';

export interface MessageBoardProps {
  messages?: MessageProps[];
}

// tslint:disable-next-line:function-name
function MessageBoard({ messages }: MessageBoardProps) {
  const children = (messages || []).map((x, i) => <Message {...x} key={i} />);

  return (
    <Message.Group>
      {children}
    </Message.Group>
  );
}

export default MessageBoard as React.StatelessComponent<MessageBoardProps>;
