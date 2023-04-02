import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import DiveForm from '@/pages/newlog';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

describe('DiveForm 첫번째 페이지 테스트', () => {
  render(<DiveForm />);
  const heading = screen.getByRole('heading');
  const nextButton = screen.getByText('다음');
  const beforeButton = screen.queryByText('이전');

  it('올바른 첫번째 페이지가 렌더링 되는지', () => {
    const 스쿠버다이빙 = screen.getByText('common:스쿠버다이빙');
    const 프리다이빙 = screen.getByText('common:프리다이빙');

    expect(nextButton).toBeInTheDocument();
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent('어떤 활동을 하셨나요?');

    expect(스쿠버다이빙).toBeInTheDocument();
    expect(프리다이빙).toBeInTheDocument();
  });
  it('첫번째 페이지에서는 이전 버튼이 없는지', () => {
    expect(beforeButton).toBeNull();
  });
  it('다음 버튼을 누를시 올바르게 다음페이지로 이동', () => {
    fireEvent.click(nextButton);
    const step1Heading = screen.getByText('어디에서 활동하셨나요?');
    expect(step1Heading).toBeInTheDocument();
  });
});
