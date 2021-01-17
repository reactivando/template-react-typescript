import { render, screen } from '@testing-library/react';

import Example from 'src/pages/Example';

describe('Example Page', () => {
  it('should be able to render Example text', () => {
    render(<Example />);

    expect(screen.getByText('Example')).toBeInTheDocument();
  });
});

export {};
