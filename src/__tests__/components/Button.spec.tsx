import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Button from '@components/Button';

const mockedClick = jest.fn();

describe('Button Component', () => {
  it('should be able to render Button', () => {
    const { getByText } = render(<Button onClick={mockedClick}>Click</Button>);

    const button = getByText('Click');

    fireEvent.click(button);

    expect(mockedClick).toHaveBeenCalled();
  });
});

export {};
