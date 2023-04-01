import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Head from 'next/head'
import { useRouter } from 'next/router'
import DiveForm from '@/pages/newlog'

jest.mock('next/router', () => ({
  useRouter: jest.fn()
}))

describe('DiveForm 테스트', () => {
  it('올바른 페이지가 렌더링 되는지', () => {
    render(<DiveForm />)
    const heading = screen.getByRole('heading')
    const nextButton = screen.getByText('다음')
    expect(nextButton).toBeInTheDocument()
    expect(heading).toBeInTheDocument()
    expect(heading).toHaveTextContent("어떤 활동을 하셨나요?")
  })
})