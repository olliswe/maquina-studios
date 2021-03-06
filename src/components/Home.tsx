import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router";
import MailIcon, { EMAIL, EMAIL_2 } from "components/elements/MailIcon";
import Logo from "assets/images/logov2.png";
import { theme } from "helpers/theme";
import { StringParam, useQueryParam } from "use-query-params";
import InstaIcon from "components/elements/InstaIcon";

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0;
  left: 0;
`;

const Content = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Subtitle = styled.span`
  font-family: ${({ theme }) => theme.fonts.ProximaRegular};
  text-transform: uppercase;
  font-size: 16px;
  color: #ffe6cc;
  font-weight: 500;
`;

const Caption = styled.span`
  font-family: ${({ theme }) => theme.fonts.ProximaRegular};
  text-transform: uppercase;
  font-size: 12px;
  color: #ffe6cc;
  font-weight: 500;
`;

const AboutLink = styled.span`
  font-family: ${({ theme }) => theme.fonts.ProximaRegular};
  text-transform: uppercase;
  font-size: 16px;
  color: #ffe6cc;
  font-weight: 500;
  cursor: pointer;
  text-decoration: underline;
`;

const StyledButton = styled.button`
  padding: 0.7rem 1.25rem;
  background: transparent;
  outline: none;
  opacity: 1;
  cursor: pointer;
  margin: 1.2rem 0 1rem 0;
  border: solid 2px ${({ theme }) => theme.colors.orange};

  :hover {
    background: rgba(255, 233, 204, 0.2);
  }
`;

const LogoImg = styled.img`
  height: 150px;
  margin-bottom: 0.5rem;
  ${theme.media.phone} {
    height: 100px;
  }
`;

const AboutDesc = styled(Subtitle)`
  width: 600px;
  text-align: center;
  margin-bottom: 1rem;

  ${theme.media.phone} {
    max-width: 50%;
  }
`;

const Row = styled.div`
  justify-content: center;
  display: flex;
  align-items: center;
  margin-bottom: 0.3rem;
`;

const MailWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  flex-direction: column;
  margin-top: 0.5rem;
`;

const StyledVideo = styled.video`
  position: absolute;
  min-width: 100%;
  min-height: 110%;
  top: 50%;
  left: 52%;

  transform: translate(-52%, -50%);
  z-index: -1;
`;

const Home = () => {
  const history = useHistory();
  const [about, setAbout] = useQueryParam("about", StringParam);

  return (
    <>
      <StyledVideo autoPlay muted loop playsInline>
        <source
          src="https://firebasestorage.googleapis.com/v0/b/nick-malmestrom.appspot.com/o/bgvid.mp4?alt=media"
          type="video/mp4"
        />
      </StyledVideo>

      <Wrapper>
        <Content>
          {!about ? (
            <>
              <LogoImg src={Logo} />

              <Subtitle>SCORES FOR THE SCREEN</Subtitle>
              <StyledButton onClick={() => history.push("/music")}>
                <Subtitle>ENTER</Subtitle>
              </StyledButton>
              <AboutLink onClick={() => setAbout("show")}>ABOUT</AboutLink>
            </>
          ) : (
            <>
              <AboutDesc>
                Maquina Studios creates scores for the screen. The studio was
                founded by Nick and Milton Malmestrom.
              </AboutDesc>
              <Caption>REACH OUT AT</Caption>
              <MailWrapper>
                <Row>
                  <Subtitle>{EMAIL_2}</Subtitle>&nbsp;&nbsp;
                  <MailIcon email={EMAIL_2} />
                </Row>
                <Row>
                  <Subtitle>{EMAIL}</Subtitle>&nbsp;&nbsp; <MailIcon />
                </Row>
                <Row>
                  <Subtitle>@MAQUINASTUDIOSOFFICIAL</Subtitle> &nbsp;&nbsp;{" "}
                  <InstaIcon />
                </Row>
              </MailWrapper>
              <Caption>OR VISIT US AT</Caption>
              <AboutDesc>
                Bjurholmsgatan 3C, 116 38, Stockholm, Sweden
              </AboutDesc>
              <AboutLink onClick={() => setAbout(undefined)}>RETURN</AboutLink>
            </>
          )}
        </Content>
      </Wrapper>
    </>
  );
};

export default Home;
