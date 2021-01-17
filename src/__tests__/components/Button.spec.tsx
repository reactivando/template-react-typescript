import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Button from 'src/components/Button';

const mockedClick = jest.fn();

describe('Button Component', () => {
  it('should be able to render Button and click', () => {
    render(<Button onClick={mockedClick}>Click</Button>);

    userEvent.click(screen.getByText('Click'));

    expect(mockedClick).toHaveBeenCalled();
  });
});
