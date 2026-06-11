import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Switch } from './switch'

describe('Switch', () => {
  it('renders an unchecked switch by default', () => {
    render(<Switch aria-label="Dark mode" />)
    expect(screen.getByRole('switch', { name: 'Dark mode' })).not.toBeChecked()
  })

  it('calls onCheckedChange when toggled', async () => {
    const user = userEvent.setup()
    const onCheckedChange = vi.fn()
    render(<Switch aria-label="Toggle" onCheckedChange={onCheckedChange} />)
    await user.click(screen.getByRole('switch'))
    expect(onCheckedChange).toHaveBeenCalledWith(true)
  })

  it('renders checked when defaultChecked', () => {
    render(<Switch aria-label="Enabled" defaultChecked />)
    expect(screen.getByRole('switch')).toBeChecked()
  })

  it('is disabled when disabled prop is set', () => {
    render(<Switch aria-label="Disabled" disabled />)
    expect(screen.getByRole('switch')).toBeDisabled()
  })

  it('applies lumina-switch class', () => {
    render(<Switch aria-label="cls" />)
    expect(screen.getByRole('switch')).toHaveClass('lumina-switch')
  })
})
