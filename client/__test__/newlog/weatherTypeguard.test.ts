import { WeatherTypeGuard } from '@/features/newlogs/utils/weatherTypeguard';
import '@testing-library/jest-dom';

describe('타입가드 테스트', () => {
  const mockGenerator = (value: string) => {
    return {
      target: { value: value },
    } as unknown as React.ChangeEvent<HTMLInputElement>;
  };

  it('sun|rain|fog|snow중 하나를 입력했을때 ', () => {
    expect(WeatherTypeGuard(mockGenerator('sun'))).toEqual('sun');
    expect(WeatherTypeGuard(mockGenerator('rain'))).toEqual('rain');
    expect(WeatherTypeGuard(mockGenerator('fog'))).toEqual('fog');
    expect(WeatherTypeGuard(mockGenerator('snow'))).toEqual('snow');
  });

  it('존재하지 않는것을 인자로 넣었을때 기본값인 sun을 리턴', () => {
    expect(WeatherTypeGuard(mockGenerator('something'))).toEqual('sun');
  });
});
