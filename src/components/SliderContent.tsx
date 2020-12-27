import React from "react";
import { items } from "components/SongsContainer";
import styled from "styled-components";
import { a } from "react-spring";
import H1 from "components/elements/H1";
import useActiveStore from "hooks/useActiveStore";
import PlayButton from "components/elements/PlayButton";
import PauseButton from "components/elements/PauseButton";

interface ISliderContent {
  bg: any;
}

const Content = styled.div`
  width: 100%;
  height: 100%;
`;

const StyledH1 = styled(H1)`
  color: ${({ theme }) => theme.colors.orange};
  font-size: 18px;
`;

const Image = styled(a.div)`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  cursor: url("https://github.com/chenglou/react-motion/raw/master/demos/demo8-draggable-list/cursor.png")
      39 39,
    auto;
  background-color: rgba(0, 0, 0, 0.3); // Tint color
  background-blend-mode: multiply;
`;

const PlayWrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
`;

const SliderContent = ({ bg }: ISliderContent) => {
  const active = useActiveStore((state) => state.active);
  const currentSong = useActiveStore((state) => state.currentSong);
  const setCurrentSong = useActiveStore((state) => state.setCurrentSong);
  const handlePlay = () => setCurrentSong(active);
  const handlePause = () => setCurrentSong(null);
  const isPlaying = active === currentSong;

  return (
    <Content>
      <Image style={{ backgroundImage: bg }} />
      <PlayWrapper>
        {isPlaying ? (
          <PauseButton onClick={handlePause} />
        ) : (
          <PlayButton onClick={handlePlay} />
        )}
      </PlayWrapper>
      <StyledH1
        style={{
          position: "absolute",
          bottom: "20%",
          left: "10%",
          fontSize: "48px",
        }}
      >
        {items[active].label}
      </StyledH1>
    </Content>
  );
};

export default SliderContent;