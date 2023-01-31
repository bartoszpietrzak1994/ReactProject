import styled from 'styled-components';
import { CONTAINER_DEFAULT_WIDTH, CONTAINER_MINIMUM_PAGE_PADDINGS } from '../Container/Container';
import { ReactNode } from 'react';

const SIDEBAR_WIDTH = 240;

const ColumnSidebarStyled = styled.section`
  position: fixed;
  left: calc(((100vw - ${CONTAINER_DEFAULT_WIDTH}px) / 2) - ${SIDEBAR_WIDTH}px - ${CONTAINER_MINIMUM_PAGE_PADDINGS}px);
  width: ${SIDEBAR_WIDTH}px;
  display: flex;
  flex-direction: column;
`;

const Sidebar = ({ children }: { children: ReactNode }) => {
  return <ColumnSidebarStyled>{children}</ColumnSidebarStyled>;
};

export default Sidebar;
