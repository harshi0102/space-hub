import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { store } from './redux/store';

// Component imports
import Missions from './components/missions';

import reducer, { joinMission, leaveMission } from './redux/mission/missionSlice';

describe('Missions Slice', () => {
  test('should handle reserving a mission', () => {
    const state = {
      missions: [
        {
          id: '0', name: 'Thaicom', description: 'The best Satellite', reserved: false,
        },
        {
          id: '1', name: 'Telstar', description: 'Communication Satellite', reserved: false,
        },
        {
          id: '2', name: 'Iridium', description: 'Telecommunication Satellite', reserved: false,
        },
      ],
      isLoading: false,
      error: undefined,
    };

    expect(reducer(state, joinMission('1'))).toEqual(
      {
        missions: [
          {
            id: '0', name: 'Thaicom', description: 'The best Satellite', reserved: false,
          },
          {
            id: '1', name: 'Telstar', description: 'Communication Satellite', reserved: true,
          },
          {
            id: '2', name: 'Iridium', description: 'Telecommunication Satellite', reserved: false,
          },
        ],
        isLoading: false,
        error: undefined,
      },
    );
  });

  test('should handle cancelling a mission', () => {
    const state = {
      missions: [
        {
          id: '0', name: 'Thaicom', description: 'The best Satellite', reserved: true,
        },
        {
          id: '1', name: 'Telstar', description: 'Communication Satellite', reserved: false,
        },
        {
          id: '2', name: 'Iridium', description: 'Telecommunication Satellite', reserved: false,
        },
      ],
      isLoading: false,
      error: undefined,
    };

    expect(reducer(state, leaveMission('0'))).toEqual(
      {
        missions: [
          {
            id: '0', name: 'Thaicom', description: 'The best Satellite', reserved: false,
          },
          {
            id: '1', name: 'Telstar', description: 'Communication Satellite', reserved: false,
          },
          {
            id: '2', name: 'Iridium', description: 'Telecommunication Satellite', reserved: false,
          },
        ],
        isLoading: false,
        error: undefined,
      },
    );
  });
});

it('mission renders correctly', () => {
  const missions = renderer
    .create(
      <Provider store={store}>
        <Missions page="/missions">Missions Page</Missions>
      </Provider>,
    )
    .toJSON();
  expect(missions).toMatchSnapshot();
});

it('renders Missions component', () => {
  render(
    <Provider store={store}>
      <Missions />
    </Provider>,
  );
});
