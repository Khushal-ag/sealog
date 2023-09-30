import styled from "styled-components";

import { useDarkMode } from "../context/useDarkMode";

const StyledLogo = styled.div`
  text-align: center;
`;

const Img = styled.img`
  height: 9.6rem;
  width: auto;
`;

function Logo() {
  const { isDarkMode } = useDarkMode();
  const src = isDarkMode ? "/sealog-logo-light.png" : "/sealog-logo-dark.png";
  return (
    <StyledLogo>
      <Img src={src} alt="sealog" />
    </StyledLogo>
  );
}

export default Logo;
