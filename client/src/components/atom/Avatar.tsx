import { css } from '@emotion/react';
import styled from '@emotion/styled';

type Props = {
  src: string;
  size?: number;
  alt: string;
};

const Avatar = (props: Props) => {
  const { src, size = 36, alt } = props;
  return (
    <AvatarCss src={src} alt={alt} width={size} height={size} css={AvatarCss} />
  );
};
const AvatarCss = styled.img`
  border-radius: 50%;
  border: 1px solid var(--line-gray);
  display: flex;
  object-fit: fill;
`;

export default Avatar;
