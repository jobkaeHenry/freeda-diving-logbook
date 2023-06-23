import styled from "@emotion/styled";

type ButtonType = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

interface ButtonProps extends ButtonType {
  width?: string;
  variant?: "default" | "ghost" | "disable";
  rounded?: boolean | undefined;
}

export const Button = styled.button`
  display: flex;
  gap: 8px;
  justify-content: center;
  font-size: var(--h4);
  align-items: center;
  padding: 12px 16px;
  border-radius: ${(props: ButtonProps) => (props.rounded ? "100px" : `8px`)};
  width: ${(props: ButtonProps) => (props.width ? props.width : `100%`)};
  background-color: ${(props: ButtonProps) => {
    switch(props.variant){
      case "default": return `var(--main)`
      case "ghost": return`var(--pure-white)`
      case "disable": return`var(--bg-gray)`
      default : return `var(--main)`
    }
  }};
  color: ${(props: ButtonProps) => {
    switch(props.variant){
      case "default": return `var(--pure-white)`
      case "ghost": return`var(--font-main)`
      case "disable": return`var(--pure-white)`
      default : return `var(--pure-white)`
    }
  }};
    border: ${(props: ButtonProps) => {
    switch(props.variant){
      case "ghost": return `1px solid var(--line-gray)`
      default : return ''
    }
  }};
  font-weight: var(--bold);
`;

export const LinkButton = Button.withComponent("a");
