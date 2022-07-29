import styled from 'styled-components';

export const SubmitButton = styled.div`
  background-color: var(--color-primary);
  font-weight: 600;
  padding: 0.4rem 0.8rem;
  border-radius: 8px;
  width: fit-content;
  color: var(--color-white);
  cursor: pointer;
  transition: 400ms;

  &:hover {
    background-color: var(--color-primary-2);
  }
`;
