import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Input, Textarea } from './input'

describe('Input', () => {
  it('renders an input element', () => {
    render(<Input placeholder="Enter text" />)
    expect(screen.getByPlaceholderText('Enter text')).toBeInTheDocument()
  })

  it('applies size class', () => {
    render(<Input data-testid="input" size="lg" />)
    expect(screen.getByTestId('input')).toHaveClass('lumina-input--lg')
  })

  it('sets aria-invalid when invalid', () => {
    render(<Input data-testid="input" invalid />)
    expect(screen.getByTestId('input')).toHaveAttribute('aria-invalid', 'true')
  })

  it('accepts user input', async () => {
    const user = userEvent.setup()
    render(<Input data-testid="input" />)
    const input = screen.getByTestId('input')
    await user.type(input, 'hello')
    expect(input).toHaveValue('hello')
  })

  it('forwards ref', () => {
    const ref = { current: null }
    render(<Input ref={ref} />)
    expect(ref.current).toBeInstanceOf(HTMLInputElement)
  })
})

describe('Textarea', () => {
  it('renders a textarea element', () => {
    render(<Textarea placeholder="Enter text" />)
    expect(screen.getByPlaceholderText('Enter text').tagName).toBe('TEXTAREA')
  })

  it('sets aria-invalid when invalid', () => {
    render(<Textarea data-testid="ta" invalid />)
    expect(screen.getByTestId('ta')).toHaveAttribute('aria-invalid', 'true')
  })
})
