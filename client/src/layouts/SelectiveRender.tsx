interface SelectiveInterface {
  validation: boolean;
  children: React.ReactNode | React.ReactNode[];
}

/**
 * @function SelectiveRender
 * @description true 혹은 false 를 받아 true인 조건에서 Children 컴포넌트를 랜더해주는 HOC컴포넌트
 * @param validation {boolean} trueish / falsy 값
 * @param children  {JSX.Element} 보여줄 컴포넌트
 * @returns {JSX.Element} True : 파라미터로 받은 Children
 * @returns {React.ReactFragment} False : React.Fragment
 */
const SelectiveRender = ({
  validation,
  children,
}: SelectiveInterface): JSX.Element => {
  return validation ? <>{children}</> : <></>;
};
export default SelectiveRender;
