import styled, { css } from "styled-components";

export const FooterContainer = styled.footer`
  ${({ theme }) => css`
    grid-area: Footer;
    background: ${theme.colors.blue_100};
    @media only screen and ${theme.medias.mx} {
      grid-template-columns: 1fr;
    }
  `}
`;
