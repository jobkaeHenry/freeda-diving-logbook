// 이런식으로 하는게 맞는지 모르겠다..

import { WeatherInterface } from '@/types/DiveLogTypes';

/**
 * @function WeatherTypeGuard
 * @description e를 받아 e.target.value 가 sun|rain|fog|snow 에 해당하는지 리턴하는 함수
 * @param e { React.ChangeEvent<HTMLInputElement> } 인풋을 검증하는 용도이므로 HTML 인풋 이벤트가 인자로 들어온다
 * @returns {"sun"|"rain"|"fog"|"snow"} 올바른 값인지 검증 후 값을 리턴
 * @returns {Error} 그 외의 값이 들어올 때
 */
export const WeatherTypeGuard = (
  e: React.ChangeEvent<HTMLInputElement>
): Pick<WeatherInterface, 'weather'> => {
  if (
    e?.target?.value === 'sun' ||
    e?.target?.value === 'rain' ||
    e?.target?.value === 'fog' ||
    e?.target?.value === 'snow'
  ) {
    return e.target.value as unknown as Pick<WeatherInterface, 'weather'>;
  } else return 'sun' as unknown as Pick<WeatherInterface, 'weather'>;
};
