import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import DisplayComponent from '../Components/DisplayComponent';

it("Matches snapshot on DisplayComponent", () => {

    const tree = renderer.create(<DisplayComponent />).toJSON();
    expect(tree).toMatchSnapshot();

});
