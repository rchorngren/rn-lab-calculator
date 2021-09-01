import 'react-native';
import React from 'react';
import HistoryComponent from '../Components/HistoryComponent';

import { render } from '@testing-library/react-native';

it("Ensure HistoryComponent has text element in it", () => {
    const { getByText } = render(<HistoryComponent />);
    const element = getByText("");
});
