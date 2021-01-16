import { render } from '@testing-library/react';

import Example from 'src/pages/Example';

describe('Example Page', () => {
  it('should be able to render Example text', () => {
    const { getByText } = render(<Example />);

    const exampleText = getByText('Example');

    expect(exampleText).toBeInTheDocument();
  });
});

export {};
