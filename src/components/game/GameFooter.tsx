import React from "react";
import styled from "styled-components";
import Footer from "../layout/Footer";

const GameFooter = () => {
  return (
    <GameFooterLayout>
      <div>icon</div>
      <div>
        <LeaveButton>나가기</LeaveButton>
      </div>
    </GameFooterLayout>
  );
};

const GameFooterLayout = styled(Footer)`
  justify-content: space-between;
`;

const LeaveButton = styled.button`
  padding: 12px 70px;
  font-size: 20px;
  line-height: 24px;
  background-color: ${({ theme }) => theme.colors.silver};
`;

export default GameFooter;
