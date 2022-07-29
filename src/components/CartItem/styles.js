import styled from "styled-components";

export const CartListItem = styled.li`
  display: flex;
  height: 3rem;
  min-height: 3rem;
  justify-content: space-between;

  figure {
    height: 100%;
    width: 3rem;
    background-color: var(--color-grey-100);
    border-radius: 4px;

    img {
      width: 100%;
    }
  }

  section {
    border: none;
    width: 80%;

    h4 {
      color: var(--color-black);
      font-size: 0.9rem;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      width: 70%;
    }

    p {
      font-size: 0.8rem;
      color: var(--color-grey-300);
    }

    span {
      font-size: 0.8rem;
    }
  }
`;

export const CartItemInfos = styled.section`

`;