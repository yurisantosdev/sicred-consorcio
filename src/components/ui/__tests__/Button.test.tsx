import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { Button } from '../Button'

describe('Button Component', () => {
  it('renders correctly with default props', () => {
    render(<Button>Click me</Button>)

    const button = screen.getByRole('button', { name: /click me/i })
    expect(button).toBeInTheDocument()
    expect(button).toHaveClass('bg-[#14B2C1]')
  })

  it('renders with different variants', () => {
    const { rerender } = render(<Button variant="secondary">Secondary</Button>)

    let button = screen.getByRole('button', { name: /secondary/i })
    expect(button).toHaveClass('bg-gray-100')

    rerender(<Button variant="outline">Outline</Button>)
    button = screen.getByRole('button', { name: /outline/i })
    expect(button).toHaveClass('border-[#14B2C1]')
  })

  it('renders with different sizes', () => {
    const { rerender } = render(<Button size="sm">Small</Button>)

    let button = screen.getByRole('button', { name: /small/i })
    expect(button).toHaveClass('px-3 py-1.5')

    rerender(<Button size="lg">Large</Button>)
    button = screen.getByRole('button', { name: /large/i })
    expect(button).toHaveClass('px-6 py-3')
  })

  it('handles click events', () => {
    const handleClick = jest.fn()
    render(<Button onClick={handleClick}>Click me</Button>)

    const button = screen.getByRole('button', { name: /click me/i })
    fireEvent.click(button)

    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('shows loading state', () => {
    render(<Button loading>Loading</Button>)

    const button = screen.getByRole('button', { name: /loading/i })
    expect(button).toBeDisabled()
    expect(button.querySelector('svg')).toBeInTheDocument()
  })

  it('renders with icon', () => {
    const icon = <div data-testid="test-icon">Icon</div>
    render(<Button icon={icon}>With Icon</Button>)

    expect(screen.getByTestId('test-icon')).toBeInTheDocument()
  })

  it('applies full width class when fullWidth is true', () => {
    render(<Button fullWidth>Full Width</Button>)

    const button = screen.getByRole('button', { name: /full width/i })
    expect(button).toHaveClass('w-full')
  })

  it('is disabled when disabled prop is true', () => {
    render(<Button disabled>Disabled</Button>)

    const button = screen.getByRole('button', { name: /disabled/i })
    expect(button).toBeDisabled()
  })
})
