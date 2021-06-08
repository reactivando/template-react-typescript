import { render, screen } from '@testing-library/react'
import renderer from 'react-test-renderer'
import { Example } from 'src/pages/Example/Example'

describe('Example Page', () => {
  it('should render correcty', () => {
    const component = renderer.create(<Example />)

    expect(component).toMatchSnapshot()
  })
  it('should be able to render Example text', () => {
    render(<Example />)

    expect(screen.getByText(/example/i)).toBeInTheDocument()
  })
})
