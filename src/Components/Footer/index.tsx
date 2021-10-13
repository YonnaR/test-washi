import styled from '@emotion/styled';

const SFooter = styled.footer`
  width: 100%;
  height: 200px;
  background-color: lightgray;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  > p {
    margin: 16px;
  }
`;

export default function Footer() {
  return <SFooter>
    <p> made with love by <a rel="noreferrer" target="_blank" href="https://github.com/YonnaR"> YonnaR </a></p>
  </SFooter>;
}