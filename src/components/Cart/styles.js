import styled from "styled-components";

export const ProductCart = styled.div`
  margin-top: 0.5rem;
  height: 48%;
  width: 96%;
  max-width: 20rem;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  overflow: hidden;

  h1 {
    width: 100%;
    height: 2rem;
    background-color: var(--color-primary);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--color-white);
  }

  @media (min-width: 769px) {
    width: 18rem;
    height: 20rem;

    h1 {
      height: 3rem;
    }
  }
`;

export const EmptyCart = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: var(--color-whitesmoke);
  align-items: center;
  height: 84%;
  border: 2px solid var(--color-grey-100);
  border-top: unset;

  p {
    font-size: 0.8rem;
  }
`;

export const LoadedCart = styled.section`
  background-color: var(--color-whitesmoke);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 0.2rem 0.5rem;
  height: 84%;
  padding: 0.5rem;

  .cart-details {
    width: 100%;
    border-top: 1px solid var(--color-grey-100);

    div {
      display: flex;
      width: 100%;
      justify-content: space-between;
      align-items: center;
      padding: 0.2rem;
      color: var(--color-grey-300);

      h6 {
        color: initial;
      }
    }

    button {
      width: 100%;
      padding: 0.5rem 0;
      border: none;
      border-radius: 8px;
      background-color: var(--color-secondary);
      color: var(--color-white);
      font-family: inherit;
      font-size: 0.85rem;
      font-weight: 600;
      transition: 400ms;

      &:hover {
        background-color: var(--color-primary-2);
        color: var(--color-white);
      }

      @media (min-width: 769px) {
        color: var(--color-grey-300);
        background-color: var(--color-grey-100);
      }
    }
  }
`;

export const CartList = styled.ul`
  height: 10rem;
  width: 100%;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  &::-webkit-scrollbar {
    width: 7px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--color-grey-fade);
    border-radius: 20px;
  }

  @media (min-width: 769px) {
    height: 12rem;

    div {
      display: flex;
      justify-content: space-between;
    }
  }
`;
