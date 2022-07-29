import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  font-family: "Inter";
  background-color: var(--color-white);
  box-sizing: border-box;

  @media (min-width: 769px) {
    display: flex;
    justify-content: center;
  }
`;

export const Header = styled.header`
  height: fit-content;
  padding: 0.5rem 1rem;
  background-color: var(--color-whitesmoke);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  position: fixed;
  width: 100%;

  h1 {
    color: var(--color-secondary);
    font-size: 1rem;

    span {
      color: var(--color-primary);
      font-family: "Mochiy Pop One";
      font-size: 1.75em;
    }
  }

  @media (min-width: 426px) {
    align-items: flex-start;
  }

  @media (min-width: 769px) {
    flex-direction: initial;
    justify-content: space-between;
  }
`;

export const Main = styled.main`
  height: 100%;
  padding-top: 6.7rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 769px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    max-width: 90%;
    gap: 2rem;
  }
`