import { SubmitButton } from "./styles";

function Button({ children }) {
  function handleSubmit() {

  }
  
  return (
    <SubmitButton type="submit" onClick={handleSubmit}>
      {children}
    </SubmitButton>
  );
}

export default Button;
