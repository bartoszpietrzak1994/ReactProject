import React from 'react';
import { ReactNode } from 'react';
import styled from 'styled-components';

export const CONTAINER_DEFAULT_WIDTH = 640;
export const CONTAINER_MINIMUM_PAGE_PADDINGS = 64;

export default function Container({ children }: { children: ReactNode }) {
  return (
    <ContainerWrapper>
      {children}
    </ContainerWrapper>
  );
}

const ContainerWrapper = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding-top: 104px;
  padding-left: 32px;
  padding-right: 32px;
  width: 640px;
`;
