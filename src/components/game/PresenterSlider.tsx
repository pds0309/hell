import React from "react";
import styled from "styled-components";

const PresenterSlider = () => {
  return (
    <PresenterSliderLayout>
      <ImageBox />
      <ImageBox />
      <ImageBox />
    </PresenterSliderLayout>
  );
};

const PresenterSliderLayout = styled.div`
  display: flex;
  grid-column-gap: 16px;
  border: ${({ theme }) => theme.borders.smallGrey};
  padding: 16px 39px;
`;

const ImageBox = styled.div`
  width: 150px;
  height: 130px;
  background-color: lightgray;
`;

export default PresenterSlider;
