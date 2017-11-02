import * as React from 'react';
import * as utils from './test-utils';
import { Feed } from 'semantic-ui-react';
import Message from './Message';

describe('<Message>', () => {
  utils.element(it, <Message speaker="John" speech="Hello." time="1:00" />).
    shallow((wrapper) => {
      it('has <Feed.User> with speaker', () => {
        expect(wrapper.find(Feed.User)).toBePresent();
        expect(wrapper.find(Feed.User).dive()).toHaveText('John');
      });

      it('has <Feed.Extra> with speech', () => {
        expect(wrapper.find(Feed.Extra)).toBePresent();
        expect(wrapper.find(Feed.Extra)).toHaveProp('text');
        expect(wrapper.find(Feed.Extra).dive()).toHaveText('Hello.');
      });

      it('has <Feed.Date> with time', () => {
        expect(wrapper.find(Feed.Date)).toBePresent();
        expect(wrapper.find(Feed.Date).dive()).toHaveText('1:00');
      });
    }).
    retainsSnapshot();
});

describe('<Message.Group>', () => {
  utils.element(it, <Message.Group/>).
    shallow((wrapper) => {
      it('is rendered as <Feed>', () => {
        expect(wrapper.type()).toBe(Feed);
      });
    }).
    retainsSnapshot();
});
