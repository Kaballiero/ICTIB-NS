import { render } from '@testing-library/react';

import Header from './Header';

describe('header', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<Header />);

        expect(baseElement).toBeTruthy();
    });

    it('should have a greeting as the title', () => {
        const { getByText } = render(<Header />);

        expect(getByText('Welcome to frontend!')).toBeTruthy();
    });
});
