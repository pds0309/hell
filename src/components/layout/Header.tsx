import styled from "styled-components";

const Header = () => {
  return (
    <HeaderLayout>
      <LogoBox>
        <LogoText>LOG0</LogoText>
      </LogoBox>
      <div>some text</div>
    </HeaderLayout>
  );
};

const HeaderLayout = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1px 56px;
  background-color: ${({ theme }) => theme.colors.white1};
  margin: -1px -1px 0 -1px;
`;

const LogoBox = styled.div`
  padding: 14px 96px;
  background-color: ${({ theme }) => theme.colors.grey2};
`;

const LogoText = styled.span`
  font-size: 24px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.white0};
`;

export default Header;
