import React, { useCallback, useState } from "react";
import { items } from "helpers/items";
import { CurrentSong } from "components/Shared";
import useActiveStore from "hooks/useActiveStore";
import styled from "styled-components";
import ShareIcon from "components/elements/ShareIcon";
import copy from "copy-to-clipboard";
import MailIcon from "components/elements/MailIcon";

const ShareCopy = styled.span<{ showCopy: boolean }>`
  font-family: ${({ theme }) => theme.fonts.ProximaRegular};
  color: ${({ theme }) => theme.colors.orange};
  text-transform: uppercase;
  margin-right: 1rem;
  font-size: 12px;
  opacity: ${({ showCopy }) => (showCopy ? 1 : 0)};
  transition: opacity 0.5s ease-in-out;
`;

const Wrapper = styled.div`
  height: 8rem;
  display: flex;
  padding: 0 5%;
  justify-content: flex-end;
  align-items: center;
  position: absolute;
  bottom: 0;
  right: 0;

  svg {
    margin-right: 0.75rem;
  }
`;

const Menu = ({ goToIndex }: { goToIndex: (input: number) => void }) => {
  const active = useActiveStore((state) => state.active);
  const [showCopy, setShowCopy] = useState(false);

  const handleShare = useCallback(() => {
    copy(window.location.origin + "/music?track=" + items[active].id);
    setShowCopy(true);
    setTimeout(() => setShowCopy(false), 2000);
  }, [active]);

  return (
    <Wrapper>
      <ShareCopy showCopy={showCopy}>Link copied to clipboard</ShareCopy>
      <ShareIcon onClick={handleShare} />
      <MailIcon />
      {items.map((item, i) => (
        <CurrentSong
          key={i}
          isActive={i === active}
          onClick={() => {
            goToIndex(i);
          }}
        >
          {item.label}
        </CurrentSong>
      ))}
    </Wrapper>
  );
};

export default Menu;
