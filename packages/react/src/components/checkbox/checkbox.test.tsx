import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Checkbox } from './checkbox'

describe('Checkbox', () => {
  it('renders an unchecked checkbox by default', () => {
    render(<Checkbox aria-label="Accept terms" />)
    const cb = screen.getByRole('checkbox', { name: 'Accept terms' })
    expect(cb).toBeInTheDocument()
    expect(cb).not.toBeChecked()
  })

  it('can be checked', async () => {
    const user = userEvent.setup()
    const onCheckedChange = vi.fn()
    render(<Checkbox aria-label="Accept" onCheckedChange={onCheckedChange} />)
    await user.click(screen.getByRole('checkbox'))
    expect(onCheckedChange).toHaveBeenCalledWith(true)
  })

  it('renders as checked when defaultChecked', () => {
    render(<Checkbox aria-label="Checked" defaultChecked />)
    expect(screen.getByRole('checkbox')).toBeChecked()
  })

  it('is disabled when disabled prop is set', () => {
    render(<Checkbox aria-label="Disabled" disabled />)
    expect(screen.getByRole('checkbox')).toBeDisabled()
  })

  it('applies lumina-checkbox class', () => {
    render(<Checkbox aria-label="cls" />)
    expect(screen.getByRole('checkbox')).toHaveClass('lumina-checkbox')
  })
})
