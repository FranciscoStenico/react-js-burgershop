import styled from "styled-components";

export const ProductCard = styled.div`
  background-color: var(--color-white);
  border-radius: 5px;
  border: 2px solid var(--color-grey-100);
  height: 92%;
  max-height: 16rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 12rem;

  figure {
    height: 45%;
    background-image: var(--gradient-grey-white);
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      height: 100%;
    }
  }

  @media (min-width: 769px) {
    width: 15rem;
  }
`;

export const CardInfos = styled.section`
  height: 55%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0.7rem 0.5rem;
  font-size: 0.9rem;

  p {
    font-size: 0.7rem;
  }
  
  span {
    font-weight: 700;
    color: var(--color-primary);
  }
  
`
