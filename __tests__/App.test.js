import 'react-native';
import React from 'react';
import App from '../App';
import DisplayComponent from '../Components/DisplayComponent';
import ButtonComponent from '../Components/ButtonComponent';
import HistoryComponent from '../Components/HistoryComponent';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('core components renders correctly', () => {
  renderer.create(<App />);
  renderer.create(<DisplayComponent />);
  renderer.create(<ButtonComponent />);
  renderer.create(<HistoryComponent />);
});
