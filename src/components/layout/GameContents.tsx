import React from "react";
import styled from "styled-components";
import headLight from "../../assets/svg_headerlight.svg";

const GameContents = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <GameContentsLayout>
      <GameContentsHeader>
        <GameTitleImage src={headLight} />
        <GameContentsTitle>{title}</GameContentsTitle>
      </GameContentsHeader>
      <GameContentsBody>{children}</GameContentsBody>
    </GameContentsLayout>
  );
};

const GameContentsLayout = styled.div`
  box-shadow: ${(props) => props.theme.boxShadows.card};
  border: ${(props) => props.theme.borders.normal};
  background-color: ${({ theme }) => theme.colors.black1};
`;

const GameContentsHeader = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  padding: 8px 0;
  background-color: ${(props) => props.theme.colors.white1};
`;

const GameContentsTitle = styled.span`
  font-weight: 600;
  font-size: 24px;
  line-height: 24px;
  text-transform: uppercase;
`;

const GameContentsBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const GameTitleImage = styled.img`
  position: absolute;
  left: 0;
  bottom: 0;
  padding: 0 0 12px 24px;
`;

export default GameContents;
