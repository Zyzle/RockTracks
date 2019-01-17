import React from 'react';
import { RouteComponentProps } from 'react-router';

import renderer from 'react-test-renderer';;

import TrackInfo from './TrackInfo';
import { Result } from '../../models/ITunes';

describe('TrackInfo Component', () => {

  it('should render', () => {
    const props: Result & RouteComponentProps = {
      artistId: 123,
      collectionId: 456,
      trackId: 789,
      artistName: 'An artist',
      collectionName: 'A collection',
      trackName: 'A track',
      trackViewUrl: 'https://www.google.com',
      artworkUrl100: 'https://via.placeholder.com/100',
      artworkUrl30: 'https://via.placeholder.com/30',
      trackPrice: 1.99,
      releaseDate: '01-01-1970',
      trackTimeMillis: 80000,
      currency: 'GBP',
      history: jest.fn() as any,
      location: jest.fn() as any,
      match: jest.fn() as any
    };

    const component = renderer.create(
      <TrackInfo  {...props} />
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});