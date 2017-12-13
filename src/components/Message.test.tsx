import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import { Comment } from 'semantic-ui-react';
import Message from './Message';

describe('<Message>', () => {
  const element = <Message speaker="John" speech="Hello." time="1:00" />;
  const wrapper = shallow(element);

  it('has <Comment.Author> with speaker', () => {
    expect(wrapper.find(Comment.Author)).toBePresent();
    expect(wrapper.find(Comment.Author).dive()).toHaveText('John');
  });

  it('has <Comment.Text> with speech', () => {
    expect(wrapper.find(Comment.Text)).toBePresent();
    expect(wrapper.find(Comment.Text).dive()).toHaveText('Hello.');
  });

  it('has <Comment.Metadata> with time', () => {
    expect(wrapper.find(Comment.Metadata)).toBePresent();
    expect(wrapper.find(Comment.Metadata).dive()).toHaveText('1:00');
  });
});

describe('<Message.Group>', () => {
  it('is rendered as <Comment.Group>', () => {
    const wrapper = shallow(<Message.Group/>);

    expect(wrapper.type()).toBe(Comment.Group);
  });

  it('retains snapshot', () => {
    const tree = renderer.create(<Message.Group/>).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
