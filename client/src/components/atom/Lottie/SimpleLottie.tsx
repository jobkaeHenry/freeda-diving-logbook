import Lottie from 'react-lottie';

type Props = {
  loop?: boolean;
  autoplay?: boolean;
  data: any;
  width: number | string;
  height?: number | string;
};

const SimpleLottie = (props: Props) => {
  const { loop, autoplay, data, width, height } = props;
  const defaultOptions = {
    loop: loop !== undefined ? loop : true,
    autoplay: autoplay !== undefined ? autoplay : true,
    animationData: data,
    width: width,
    height: height ? height : width,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return <Lottie options={defaultOptions} />;
};

export default SimpleLottie;
