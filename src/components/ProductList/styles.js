import styled from "styled-components";

export const List = styled.ul`
  color: var(--color-black);
  height: 15rem;
  max-width: 100vw;
  display: flex;
  align-items: center;
  gap: 0.7rem;
  padding: 0 0.7rem;
  overflow-x: scroll;

  &::-webkit-scrollbar {
    height: 7px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--color-grey-fade);
    border-radius: 20px;
  }

  @media (min-width: 769px) {
    width: 70%;
    height: 36rem;
    flex-wrap: wrap;
    padding-left: 3rem;

    &::-webkit-scrollbar {
      width: 7px;
    }
  }
`;
