import * as React from 'react';
import { Comment } from 'semantic-ui-react';

export interface MessageProps {
  speaker: string;
  speech: string;
  time: React.ReactNode;
}

export default class Message extends React.PureComponent<MessageProps> {
  render() {
    return (
      <Comment>
        <Comment.Avatar src="" />
        <Comment.Content>
          <Comment.Author as="a">{this.props.speaker}</Comment.Author>
          <Comment.Metadata>
            <div>{this.props.time}</div>
          </Comment.Metadata>
          <Comment.Text>{this.props.speech}</Comment.Text>
        </Comment.Content>
      </Comment>
    );
  }

  // tslint:disable-next-line:function-name
  static Group({ children }: { children?: React.ReactNode }) {
    return <Comment.Group>{children}</Comment.Group>;
  }
}
