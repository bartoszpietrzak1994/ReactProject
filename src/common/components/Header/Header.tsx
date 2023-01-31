import styled from "styled-components";

const HeaderWrapper = styled.h2`
  display: inline-flex;
  align-items: baseline;
  letter-spacing: 24px;
  font-size: 47px;
`;

const Header = ({ welcomeString }: { welcomeString: string } ) => {
  return <>
    <HeaderWrapper>
      {welcomeString}
    </HeaderWrapper>
  </>;
};

export default Header;
