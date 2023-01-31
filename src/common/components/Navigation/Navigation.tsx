import styled from 'styled-components';
import { Text } from '../Text/Text'

export const NavigationWrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 104px;
  padding: 32px;
`;

const NavigationStyled = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;

const UserInfo = styled.div`
  display: flex;
  gap: 8px;
  align-items: baseline;
`;

export const Navigation = () => {
  return (
    <NavigationWrapper>
      <NavigationStyled>
        <UserInfo>
          Current user: Bartosz Pietrzak
        </UserInfo>
      </NavigationStyled>
    </NavigationWrapper>
  )
}
