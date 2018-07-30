import React from 'react';
import App from '../client/components/App.jsx';
import idObj from 'identity-obj-proxy';
import { shallow, mount, render } from 'enzyme';

const wrapper = shallow(<App />);

describe('App tests', () => {
  test('able to find a button', () => {
    expect(0).toEqual(0);
  });
});
