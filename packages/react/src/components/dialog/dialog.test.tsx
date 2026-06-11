import { describe, it, expect, vi } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from './dialog'

function TestDialog({ onOpenChange }: { onOpenChange?: (v: boolean) => void }) {
  return (
    <Dialog onOpenChange={onOpenChange}>
      <DialogTrigger>Open dialog</DialogTrigger>
      <DialogContent>
        <DialogTitle>Test Dialog</DialogTitle>
        <DialogDescription>Dialog description</DialogDescription>
        <DialogClose>Close</DialogClose>
      </DialogContent>
    </Dialog>
  )
}

describe('Dialog', () => {
  it('trigger opens the dialog', async () => {
    const user = userEvent.setup()
    render(<TestDialog />)
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    await user.click(screen.getByText('Open dialog'))
    expect(screen.getByRole('dialog')).toBeInTheDocument()
  })

  it('close button closes the dialog', async () => {
    const user = userEvent.setup()
    render(<TestDialog />)
    await user.click(screen.getByText('Open dialog'))
    expect(screen.getByRole('dialog')).toBeInTheDocument()
    await user.click(screen.getByText('Close'))
    await waitFor(() =>
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument(),
    )
  })

  it('calls onOpenChange with true when opened', async () => {
    const user = userEvent.setup()
    const onOpenChange = vi.fn()
    render(<TestDialog onOpenChange={onOpenChange} />)
    await user.click(screen.getByText('Open dialog'))
    expect(onOpenChange).toHaveBeenCalledWith(true)
  })

  it('renders title and description', async () => {
    const user = userEvent.setup()
    render(<TestDialog />)
    await user.click(screen.getByText('Open dialog'))
    expect(screen.getByText('Test Dialog')).toBeInTheDocument()
    expect(screen.getByText('Dialog description')).toBeInTheDocument()
  })

  it('can be controlled externally', () => {
    render(
      <Dialog open>
        <DialogContent>
          <DialogTitle>Controlled</DialogTitle>
        </DialogContent>
      </Dialog>,
    )
    expect(screen.getByRole('dialog')).toBeInTheDocument()
  })
})
