import styled from "styled-components";

export const CartListItem = styled.li`
  display: flex;
  height: 3rem;
  min-height: 3rem;
  justify-content: space-between;
  cursor: pointer;

  &hover {

  }

  figure {
    height: 100%;
    width: 3rem;
    background-color: var(--color-grey-100);
    border-radius: 4px;

    img {
      width: 100%;
    }
  }
`;

export const CartItemInfos = styled.section`
  border: none;
  width: 75%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  div {
    display: flex;
  }

  h4 {
    color: var(--color-black);
    font-size: 0.9rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 70%;
  }

  p {
    font-size: 0.7rem;
    color: var(--color-grey-300);
  }

  button {
    font-size: 0.7rem;
    font-family: inherit;
    color: var(--color-grey-300);
    border: none;
    background-color: inherit;
    transition: 200ms;

    &:hover {
      color: var(--color-secondary);
    }
  }

  span {
    font-size: 0.8rem;
    font-weight: 700;
  }
`;
