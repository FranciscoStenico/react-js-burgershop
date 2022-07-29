import styled from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: var(--color-white);
  justify-content: space-between;
  height: fit-content;
  width: 100%;
  padding: 0.3rem;
  border-radius: 8px;
  border: 2px solid var(--color-grey-100);
  font-size: 0.8rem;

  input {
    width: 60%;
    padding-left: 0.5rem;
    border: none;
    outline: none;

    &::placeholder {
        color: var(--color-grey-100);
    }

    &:focus::placeholder {
      transition: 400ms;
      color: transparent;
    }
  }

  @media (min-width: 426px) {
    max-width: 25rem;
    align-self: flex-end;
  }
`;
