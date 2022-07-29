import { useState } from "react";
import { FormContainer } from "./styles";
import Button from "../Button"

function Formulary({ setRender }) {
  const [inputValue, setInputValue] = useState("");
  
  function handleSubmit(e) {
    e.preventDefault();

  }
  
  return (
    <FormContainer onSubmit={handleSubmit}>
      <input
        onChange={(e) => setInputValue(e.target.value)}
        type="text"
        placeholder="Digitar Pesquisa"
      />
      <Button type="submit">Pesquisar</Button>
    </FormContainer>
  );
}

export default Formulary;
