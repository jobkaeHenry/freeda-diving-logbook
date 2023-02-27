import { render, screen } from '@testing-library/react'
import Home from '@/pages/index'
import '@testing-library/jest-dom'
import { useRouter } from 'next/router'

jest.mock('next/router', () => ({
  useRouter: jest.fn()
}))

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />)
    const heading = screen.getByRole('heading')
    expect(heading).toBeInTheDocument()
    expect(heading).toHaveTextContent("홈페이지입니당")
  })
})