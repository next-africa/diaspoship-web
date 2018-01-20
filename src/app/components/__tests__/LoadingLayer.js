import React from 'react';
import LoadingLayer from '../LoadingLayer/index';
import renderer from 'react-test-renderer';

describe('LoadingLayer', () => {
  it('renders as expected', () => {
    const tree = renderer.create(<LoadingLayer />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
