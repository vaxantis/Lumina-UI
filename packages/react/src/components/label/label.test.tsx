import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Label } from './label'

describe('Label', () => {
  it('renders label text', () => {
    render(<Label>Email address</Label>)
    expect(screen.getByText('Email address')).toBeInTheDocument()
  })

  it('associates with an input via htmlFor', () => {
    render(
      <div>
        <Label htmlFor="email">Email</Label>
        <input id="email" />
      </div>,
    )
    expect(screen.getByLabelText('Email')).toBeInTheDocument()
  })

  it('applies lumina-label class', () => {
    render(<Label data-testid="label">Label</Label>)
    expect(screen.getByTestId('label')).toHaveClass('lumina-label')
  })
})
