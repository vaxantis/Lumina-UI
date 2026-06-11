import { describe, it, expect } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from './tooltip'

// delayDuration={0} makes tooltip appear instantly — avoids timing flakiness in tests
function TestTooltip({ content = 'Tooltip text' }) {
  return (
    <TooltipProvider delayDuration={0}>
      <Tooltip>
        <TooltipTrigger>Hover me</TooltipTrigger>
        <TooltipContent>{content}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

describe('Tooltip', () => {
  it('does not show the tooltip role initially', () => {
    render(<TestTooltip />)
    // The tooltip portal is only mounted when open=true
    expect(screen.queryByRole('tooltip', { hidden: true })).not.toBeInTheDocument()
  })

  it('shows content when trigger is focused', async () => {
    const user = userEvent.setup()
    render(<TestTooltip />)
    await user.tab()
    // Radix renders role="tooltip" on an ARIA-hidden span for screen readers
    await waitFor(() =>
      expect(screen.getByRole('tooltip', { hidden: true })).toBeInTheDocument(),
    )
  })

  it('renders tooltip text', async () => {
    const user = userEvent.setup()
    render(<TestTooltip content="Custom content" />)
    await user.tab()
    await waitFor(() =>
      expect(screen.getByRole('tooltip', { hidden: true })).toHaveTextContent('Custom content'),
    )
  })

  it('can be controlled as open', () => {
    render(
      <TooltipProvider>
        <Tooltip open>
          <TooltipTrigger>Hover</TooltipTrigger>
          <TooltipContent>Always visible</TooltipContent>
        </Tooltip>
      </TooltipProvider>,
    )
    expect(screen.getByRole('tooltip', { hidden: true })).toBeInTheDocument()
  })

  it('trigger is accessible', () => {
    render(<TestTooltip />)
    expect(screen.getByText('Hover me')).toBeInTheDocument()
  })
})
