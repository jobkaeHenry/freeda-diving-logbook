// 이런식으로 하는게 맞는지 모르겠다..

import { WeatherInterface } from '@/types/DiveLogTypes';

/** e를 받아 e.target.value 가 sun|rain|fog|snow 에 해당하는지 리턴하는 함수*/
export const WeatherTypeGuard = (
  e: React.ChangeEvent<HTMLInputElement>
): Pick<WeatherInterface, 'weather'> => {
  if (
    e.target.value === 'sun' ||
    e.target.value === 'rain' ||
    e.target.value === 'fog' ||
    e.target.value === 'snow'
  ) {
    return e.target.value as unknown as Pick<WeatherInterface, 'weather'>;
  } else throw Error;
};
