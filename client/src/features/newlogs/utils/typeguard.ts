// 이런식으로 하는게 맞는지 모르겠다..

/** e를 받아 e.target.value 가 sun에 해당하는지 리턴하는 함수*/
export const WeatherTypeGuard = (e: React.ChangeEvent<HTMLInputElement>) => {
  if (
    e.target.value === "sun" ||
    e.target.value === "rain" ||
    e.target.value === "fog" ||
    e.target.value === "snow"
  ) {
    return e.target.value;
  } else return "sun";
};
