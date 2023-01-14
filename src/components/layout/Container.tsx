import React from "react";
import styled from "styled-components";
import Header from "./Header";

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <ContainerLayout>
      <ContainerInnerBox>
        <Header />
        {children}
      </ContainerInnerBox>
    </ContainerLayout>
  );
};

const ContainerLayout = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: ${({ theme }) => theme.layout.maxWidth};
  height: ${({ theme }) => theme.layout.maxHeight};
  transform: scale(${({ theme }) => theme.layout.scale});
  padding-top: 60px;
  padding-bottom: 60px;
  padding-left: 80px;
  padding-right: 80px;
`;

const ContainerInnerBox = styled.div`
  width: 1830px;
  height: 968px;
  box-shadow: ${(props) => props.theme.boxShadows.card};
  outline: ${(props) => props.theme.borders.large};
`;

export default Container;
