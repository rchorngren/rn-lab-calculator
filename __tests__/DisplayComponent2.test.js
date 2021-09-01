import 'react-native';
import React from 'react';
import DisplayComponent from '../Components/DisplayComponent';

import { render } from '@testing-library/react-native';

it("Ensure DisplayComponent has a text element in it", () => {
    const { getByText } = render(<DisplayComponent />);
    const element = getByText("");
});
