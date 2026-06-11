import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Button } from './button'

describe('Button', () => {
  it('renders children', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByRole('button', { name: 'Click me' })).toBeInTheDocument()
  })

  it('applies variant class', () => {
    render(<Button variant="destructive">Delete</Button>)
    const btn = screen.getByRole('button')
    expect(btn).toHaveClass('lumina-button--destructive')
  })

  it('applies size class', () => {
    render(<Button size="lg">Large</Button>)
    expect(screen.getByRole('button')).toHaveClass('lumina-button--lg')
  })

  it('is disabled when disabled prop is set', () => {
    render(<Button disabled>Disabled</Button>)
    expect(screen.getByRole('button')).toBeDisabled()
  })

  it('is disabled when loading', () => {
    render(<Button loading>Loading</Button>)
    const btn = screen.getByRole('button')
    expect(btn).toBeDisabled()
    expect(btn).toHaveAttribute('aria-busy')
  })

  it('calls onClick handler', async () => {
    const handler = vi.fn()
    const user = userEvent.setup()
    render(<Button onClick={handler}>Click</Button>)
    await user.click(screen.getByRole('button'))
    expect(handler).toHaveBeenCalledOnce()
  })

  it('does not call onClick when disabled', async () => {
    const handler = vi.fn()
    const user = userEvent.setup()
    render(<Button disabled onClick={handler}>Disabled</Button>)
    await user.click(screen.getByRole('button'))
    expect(handler).not.toHaveBeenCalled()
  })

  it('forwards ref', () => {
    const ref = { current: null }
    render(<Button ref={ref}>Ref button</Button>)
    expect(ref.current).toBeInstanceOf(HTMLButtonElement)
  })

  it('merges custom className', () => {
    render(<Button className="custom-class">Custom</Button>)
    const btn = screen.getByRole('button')
    expect(btn).toHaveClass('lumina-button', 'custom-class')
  })

  it('renders as child element with asChild', () => {
    render(
      <Button asChild>
        <a href="/home">Home</a>
      </Button>,
    )
    const link = screen.getByRole('link', { name: 'Home' })
    expect(link).toBeInTheDocument()
    expect(link).toHaveClass('lumina-button')
  })
})
