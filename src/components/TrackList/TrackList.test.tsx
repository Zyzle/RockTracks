import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import renderer from 'react-test-renderer';

import TrackList, { TrackListProps } from './TrackList';

describe('TrackList Component', () => {

  it('should render', () => {
    const props: TrackListProps = {
      search: jest.fn(),
      history: jest.fn() as any,
    location: jest.fn() as any,
      match: jest.fn() as any,
      resultsCount: 1,
      results: [{
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
      }],
      pending: false,
      error: null
    };

    const component = renderer.create(
      <MemoryRouter>
        <TrackList {...props} />
      </MemoryRouter>
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});