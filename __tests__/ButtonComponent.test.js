import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import ButtonComponent from '../Components/ButtonComponent';

it("Matches snapshoton DisplayComponent", () => {

    const tree = renderer.create(<ButtonComponent />).toJSON();
    expect(tree).toMatchSnapshot();

});
