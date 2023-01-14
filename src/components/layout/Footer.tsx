import styled from "styled-components";

const Footer = ({ children }: { children: React.ReactNode }) => {
  return <FooterLayout>{children}</FooterLayout>;
};

const FooterLayout = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 150px;
  background-color: ${(props) => props.theme.colors.grey2};
`;

export default Footer;
