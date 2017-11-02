import * as React from 'react';
import { Feed } from 'semantic-ui-react';

export interface MessageProps {
  speaker: string;
  speech: string;
  time: React.ReactNode;
}

export default class Message extends React.PureComponent<MessageProps> {
  render() {
    return (
        <Feed.Event>
          <Feed.Content>
            <Feed.Summary>
              <Feed.User>{this.props.speaker}</Feed.User>
              <Feed.Date>{this.props.time}</Feed.Date>
            </Feed.Summary>
            <Feed.Extra text>{this.props.speech}</Feed.Extra>
          </Feed.Content>
        </Feed.Event>
    );
  }

  // tslint:disable-next-line:function-name
  static Group({ children }: { children?: React.ReactNode }) {
    return <Feed>{children}</Feed>;
  }
}
