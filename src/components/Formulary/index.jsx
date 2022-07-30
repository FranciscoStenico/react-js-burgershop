import { useState } from "react";
import { FormContainer } from "./styles";
import Button from "../Button";

function Formulary({ list, setRender }) {
  const [inputValue, setInputValue] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const rgx = new RegExp(inputValue, "gi");
    const newRender = list.filter((item) => {
      const testName = rgx.test(item.name);
      const testCategory = rgx.test(item.category);
      const testPrice = rgx.test(item.price);

      return testName || testCategory || testPrice;
    });

    setRender(newRender);
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
