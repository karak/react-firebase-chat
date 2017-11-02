import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { shallow, ShallowWrapper, ShallowRendererProps } from 'enzyme';
import 'jest';

class ItElementChain<P> {
  constructor(private myIt: jest.It, private el: React.ReactElement<P>) {
  }

  /**
   * Shorthand method to render element and expect the tree to match snapshot()
   */
  retainsSnapshot() {
    this.myIt(
      'retains snapshot',
      () => {
        const tree = renderer.create(this.el).toJSON();

        expect(tree).toMatchSnapshot();
      }
    );

    return this;
  }

  /**
   * shorthand method to shallow rendering
   */
  shallow(
    callback: (wrapper: ShallowWrapper<P>, it: jest.It) => void,
    options?: ShallowRendererProps) {
    callback(shallow(this.el, options), this.myIt);

    return this;
  }
}


declare global {
  namespace jest {
    interface It {
      element<P>(el: React.ReactElement<P>): ItElementChain<P>;
    }
  }
}

export default function element<P>(it: jest.It, el: React.ReactElement<P>) {
  return new ItElementChain(it, el);
}
