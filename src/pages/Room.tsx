import styled from "styled-components";
import ChatBox from "../components/game/ChatBox";
import GameFooter from "../components/game/GameFooter";
import MainPresenter from "../components/game/MainPresenter";
import PresenterSlider from "../components/game/PresenterSlider";
import ScoreBoard from "../components/game/ScoreBoard";
import Timer from "../components/game/Timer";

/*
 * 
 *   <span>
        height: {window.innerHeight}, {window.outerHeight}
      </span>
      <br />
      <span>
        width: {window.innerWidth}, {window.outerWidth}
      </span>
 */

const Room = () => {
  return (
    <>
      <RoomLayout>
        <RoomGridBox>
          <ScoreBoard />
          <RoomGridCenterBox>
            <MainPresenter />
            <PresenterSlider />
          </RoomGridCenterBox>
          <RoomGridRightBox>
            <Timer />
            <ChatBox />
          </RoomGridRightBox>
        </RoomGridBox>
      </RoomLayout>
      <GameFooter />
    </>
  );
};

const RoomLayout = styled.div`
  padding: 76px 150px 76px 152px;
`;

const RoomGridBox = styled.div`
  display: grid;
  grid-template-columns: 41fr 56fr 41fr;
  column-gap: 40px;
  height: 100%;
`;

const RoomGridCenterBox = styled.div`
  display: grid;
  grid-template-rows: 47fr 16fr;
  row-gap: 32px;
`;

const RoomGridRightBox = styled.div`
  display: grid;
  grid-template-rows: 15fr 49fr;
  row-gap: 23px;
`;

export default Room;
