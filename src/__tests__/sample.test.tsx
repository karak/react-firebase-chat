import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

describe('<a> component', () => {
  const element = <a href="http://www.facebook.com">Facebook</a>;

  describe('when shallow rendered', () => {
    const wrapper = shallow(element);

    it('has href', () => {
      expect(wrapper.find('a')).toHaveProp('href', 'http://www.facebook.com');
    });

    it('has text content', () => {
      expect(wrapper.find('a')).toHaveText('Facebook');
    });
  });

  it('retains snapshot', () => {
    const tree = renderer.create(element).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
