import { SubmitButton } from "./styles";

function Button({ children, handler }) {
  return (
    <SubmitButton type="submit" onClick={handler}>
      {children}
    </SubmitButton>
  );
}

export default Button;
