import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import renderer from 'react-test-renderer'
import { Button } from 'src/components/Button/Button'

describe('Button Component', () => {
  it('should render correcty', () => {
    const mockedOnClick = jest.fn()

    const component = renderer.create(
      <Button onClick={mockedOnClick}>Button</Button>,
    )

    expect(component).toMatchSnapshot()
  })
  it('should be able to render Button and click', () => {
    const mockedOnClick = jest.fn()

    render(<Button onClick={mockedOnClick}>Button</Button>)

    userEvent.click(screen.getByText(/button/i))

    expect(mockedOnClick).toHaveBeenCalledTimes(1)
  })
})
