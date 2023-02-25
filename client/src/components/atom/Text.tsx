import styled from "@emotion/styled";

interface TextProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  > {
  typography: "h1" | "h2" | "h3" | "h4"| "p" | "sub";
  bold?: boolean;
  align?: string;
  color?: string;
}

const Text = styled.span`
  display: ${(props: TextProps) => (props.align ? "block" : "inline")};
  text-align: ${(props: TextProps) => (props.align ? props.align : "")};
  color: ${(props: TextProps) => (props.color ? `${props.color}` : "")};
  font-size: ${(props: TextProps) => `var(--${props.typography})`};
  font-weight: ${(props: TextProps) => (props.bold ? "var(--bold)" : null)};
  word-break: keep-all;
`;

export default Text;
