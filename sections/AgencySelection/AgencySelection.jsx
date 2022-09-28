import React from "react";
import Image from "next/image";

import {
  StyledContainer,
  StyledSectionContainer,
  StyledBackgroundImgContainer,
  StyledOuterContainer,
  StyledTextContainer,
  StyledTitle,
  StyledCardTitle,
  StyledCardDescription,
  StyledCardTextContainer,
  StyledCardLogoContainer,
  StyledCardBoldText,
  StyledDescription,
  StyledVideoContainer,
  StyledCardContainer,
  StyledLightCard,
  StyledMiddleCard,
  StyledHeavyCard,
  StyledContentWrapperContainer,
} from "./elements";

const videoPNG = {
  src: "/img/video.png",
  alt: "video",
  width: 250,
  height: 398,
};

const brief = {
  src: "/icons/briefing.svg",
  alt: "briefing",
};

const search = {
  src: "/icons/research.svg",
  alt: "search",
};

const pitch = {
  src: "/icons/meeting.svg",
  alt: "pitch",
};

const iconWidth = 160;
const iconHeight = 160;

export const AgencySelection = ({ image, title, description, ...props }) => {
  return (
    <StyledContainer {...props}>
      <StyledTextContainer>
        <StyledTitle>{title}</StyledTitle>
        <StyledDescription>{description}</StyledDescription>
      </StyledTextContainer>
      <StyledOuterContainer>
        <StyledBackgroundImgContainer width={image.width} height={image.height}>
          <StyledContentWrapperContainer>
            <StyledSectionContainer>
              <StyledVideoContainer>
                {/** ToDo: Own Image Container Component */}
                <Image
                  layout="responsive"
                  src={videoPNG.src}
                  alt={videoPNG.alt}
                  width={videoPNG.width}
                  height={videoPNG.height}
                  quality={100}
                />
              </StyledVideoContainer>
            </StyledSectionContainer>
            <StyledCardContainer>
              <StyledLightCard>
                <StyledCardLogoContainer>
                  <Image
                    src={brief.src}
                    alt={brief.alt}
                    width={iconWidth}
                    height={iconHeight}
                  />
                </StyledCardLogoContainer>
                <StyledCardTextContainer>
                  <StyledCardTitle>Brief</StyledCardTitle>
                  <StyledCardDescription>
                    Complete{" "}
                    <StyledCardBoldText>
                      brief writing or simple guidance
                    </StyledCardBoldText>{" "}
                    on what to include, we&lsquo;ve got you covered
                  </StyledCardDescription>
                </StyledCardTextContainer>
              </StyledLightCard>
              <StyledMiddleCard>
                <StyledCardLogoContainer>
                  <Image
                    src={search.src}
                    alt={search.alt}
                    width={iconWidth}
                    height={iconHeight}
                  />
                </StyledCardLogoContainer>
                <StyledCardTextContainer>
                  <StyledCardTitle>Search</StyledCardTitle>
                  <StyledCardDescription>
                    In-depth agency search covering,{" "}
                    <StyledCardBoldText>criteria matching</StyledCardBoldText>,
                    door knocking and due-dilligence vetting
                  </StyledCardDescription>
                </StyledCardTextContainer>
              </StyledMiddleCard>
              <StyledHeavyCard>
                <StyledCardLogoContainer>
                  <Image
                    src={pitch.src}
                    alt={pitch.alt}
                    width={iconWidth}
                    height={iconHeight}
                  />
                </StyledCardLogoContainer>
                <StyledCardTextContainer>
                  <StyledCardTitle>Pitch</StyledCardTitle>
                  <StyledCardDescription>
                    Comprehensive{" "}
                    <StyledCardBoldText>pitch management</StyledCardBoldText>,
                    including comms, diary management and pitch hosting
                  </StyledCardDescription>
                </StyledCardTextContainer>
              </StyledHeavyCard>
            </StyledCardContainer>
          </StyledContentWrapperContainer>
        </StyledBackgroundImgContainer>
      </StyledOuterContainer>
    </StyledContainer>
  );
};

{
}
