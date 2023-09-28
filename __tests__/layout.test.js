import { render, screen } from '@testing-library/react'
import Layout from '../components/layout'
import '@testing-library/jest-dom'
 
describe('Layout', () => {
  it('renders a link', () => {
    render(<Layout />)
 
    const heading = screen.getByRole('link', {
      name: /← Back to home/i,
    })
 
    expect(heading).toBeInTheDocument()
  })
})