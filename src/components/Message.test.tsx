import * as React from 'react';
import { shallow } from 'enzyme';
import { Feed } from 'semantic-ui-react';
import Message from './Message';

describe('<Message>', () => {
  const element = <Message speaker="John" speech="Hello." time="1:00" />;
  const wrapper = shallow(element);

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
});

describe('<Message.Group>', () => {
  it('is rendered as <Feed>', () => {
    const wrapper = shallow(<Message.Group/>);

    expect(wrapper.type()).toBe(Feed);
  });
});
