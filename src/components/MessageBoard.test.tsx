import * as React from 'react';
import { shallow } from 'enzyme';
import MessageBoard from './MessageBoard';
import Message, { MessageProps } from './Message';

describe('<MessageBoard>', () => {
  it('is rendered as <Message.Group>', () => {
    const wrapper = shallow(<MessageBoard />);

    expect(wrapper.find(Message.Group)).toBePresent();

    expect(wrapper.children()).toBeEmpty();
  });

  it('has children of <Message />', () => {
    const propsArray: MessageProps[] = [{
      speaker: 'a', speech: 'b', time: 'c',
    }, {
      speaker: 'd', speech: 'e', time: 'f',
    }];

    const wrapper = shallow(<MessageBoard messages={propsArray} />);

    expect(wrapper.children(Message)).toHaveLength(2);
    expect(wrapper.children(Message).at(0).props()).toEqual(propsArray[0]);
    expect(wrapper.children(Message).at(1).props()).toEqual(propsArray[1]);
  });

  it('has same number of children as input', () => {
    const props: MessageProps = {
      speaker: '',
      speech: '',
      time: '',
    };

    for (let i = 0; i < 5; i += 1) {
      const wrapper = shallow(<MessageBoard messages={repeat(props, i)} />);

      expect(wrapper.find(Message)).toHaveLength(i);
    }
  });
});

function repeat<T>(x: T, n: number) {
  const result: T[] = [];
  for (let i = 0; i < n; i += 1) {
    result.push(x);
  }
  return result;
}
