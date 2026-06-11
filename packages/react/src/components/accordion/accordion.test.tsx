import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from './accordion'

function TestAccordion() {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>Section one</AccordionTrigger>
        <AccordionContent>Content for section one</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Section two</AccordionTrigger>
        <AccordionContent>Content for section two</AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

describe('Accordion', () => {
  it('renders all trigger buttons', () => {
    render(<TestAccordion />)
    expect(screen.getByText('Section one')).toBeInTheDocument()
    expect(screen.getByText('Section two')).toBeInTheDocument()
  })

  it('expands an item when its trigger is clicked', async () => {
    const user = userEvent.setup()
    render(<TestAccordion />)
    const trigger = screen.getByRole('button', { name: /Section one/i })
    await user.click(trigger)
    expect(trigger).toHaveAttribute('data-state', 'open')
  })

  it('collapses the item when clicked again (collapsible)', async () => {
    const user = userEvent.setup()
    render(<TestAccordion />)
    const trigger = screen.getByRole('button', { name: /Section one/i })
    await user.click(trigger)
    await user.click(trigger)
    expect(trigger).toHaveAttribute('data-state', 'closed')
  })

  it('applies lumina-accordion class to root', () => {
    render(<TestAccordion />)
    expect(document.querySelector('.lumina-accordion')).toBeInTheDocument()
  })

  it('multiple type allows several items open', async () => {
    const user = userEvent.setup()
    render(
      <Accordion type="multiple">
        <AccordionItem value="a">
          <AccordionTrigger>A</AccordionTrigger>
          <AccordionContent>Content A</AccordionContent>
        </AccordionItem>
        <AccordionItem value="b">
          <AccordionTrigger>B</AccordionTrigger>
          <AccordionContent>Content B</AccordionContent>
        </AccordionItem>
      </Accordion>,
    )
    await user.click(screen.getByRole('button', { name: 'A' }))
    await user.click(screen.getByRole('button', { name: 'B' }))
    expect(screen.getByRole('button', { name: /A/ })).toHaveAttribute('data-state', 'open')
    expect(screen.getByRole('button', { name: /B/ })).toHaveAttribute('data-state', 'open')
  })
})
