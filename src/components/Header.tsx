import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

const HeaderContainer = styled.header`
  background-color: var(--adaptive-background);
  height: 20px;
  width: auto;
  top: 0;
  height: 60px;
  position: sticky;
  width: 100%;
  z-index: 100;
`;

const LogoLink = styled(Link)`
  text-decoration: none;
`;

const LogoImage = styled(Image)`
  height: 20px;
  width: auto;
  color: transparent;
`;

const HeaderNav = styled.nav`
  align-items: center;
  display: flex;
  width:100%;
  height:100%;
  padding: 0 20px;
`;

function Header() {
    const logoURL = "https://static.toss.im/png-icons/securities/logo_securities_mono_white_korean_300.png"

  return (
    <HeaderContainer>
      <HeaderNav>
        <LogoLink href="/">
          <LogoImage src={logoURL} alt="logo" width={100} height={20} />
        </LogoLink>
      </HeaderNav>
    </HeaderContainer>
  );
}

export default Header;