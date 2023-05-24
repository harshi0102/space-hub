import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { store } from './redux/store';

// Component imports
import Rocket from './components/rocket';

// Function imports
import reducer, { reserveRocket } from './redux/rocket/rocketSlice';

describe('Rockets Slice', () => {
  test('should handle reserving a rocket', () => {
    const state = {
      rocket: [
        {
          id: '0', name: 'Falcon 1', description: 'The best SpaceX', image: 'linkto image',
        },
        {
          id: '1', name: 'Falcon 9', description: 'Dragon SpaceCraft', image: 'linkto image',
        },
        {
          id: '2', name: 'Falcon Heavy', description: 'Heavy SpaceCraft', image: 'linkto image',
        },
      ],
      isLoading: false,
    };

    expect(reducer(state, reserveRocket('1'))).toEqual(
      {
        rocket: [
          {
            id: '0', name: 'Falcon 1', description: 'The best SpaceX', image: 'linkto image',
          },
          {
            id: '1', name: 'Falcon 9', description: 'Dragon SpaceCraft', image: 'linkto image', reserved: true,
          },
          {
            id: '2', name: 'Falcon Heavy', description: 'Heavy SpaceCraft', image: 'linkto image',
          },
        ],
        isLoading: false,
      },
    );
  });
});

it('rockets renders correctly', () => {
  const rockets = renderer
    .create(
      <Provider store={store}>
        <Rocket page="/">Rockets Page</Rocket>
      </Provider>,
    )
    .toJSON();
  expect(rockets).toMatchSnapshot();
});

it('renders Rockets component', () => {
  render(
    <Provider store={store}>
      <Rocket />
    </Provider>,
  );
});
