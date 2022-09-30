import React from "react";
import Image from "next/image";
import { theme } from "~/styles";

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
  StyledCard,
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

const cardSize = {
  small: 32.5,
  medium: 35,
  big: 37.5,
};

const cardBackGroundColor = {
  light: theme.grayF8,
  medium: theme.grayF0,
  dark: theme.grayE2,
};

const contentFirstCard = {
  title: "Brief",
  bold: " brief writing or simple guidance ",
  descr1: "Complete",
  descr2: "on what to include, we`ve got you covered.",
};

const contentSecondCard = {
  title: "Search",
  bold: " criteria matching ",
  descr1: "In-depth agency search covering,",
  descr2: "door knocking and due-dilligence vetting",
};

const contentThirdCard = {
  title: "Pitch",
  bold: " pitch management, ",
  descr1: "Comprehensive",
  descr2: "including comms, diary management and pitch hosting",
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


              <StyledCard
                size={cardSize.small}
                bgColor={cardBackGroundColor.light}
              >
                <StyledCardLogoContainer>
                  <Image
                    src={brief.src}
                    alt={brief.alt}
                    width={iconWidth}
                    height={iconHeight}
                  />
                </StyledCardLogoContainer>
                <StyledCardTextContainer>
                  <StyledCardTitle>{contentFirstCard.title}</StyledCardTitle>
                  <StyledCardDescription>
                    {contentFirstCard.descr1}
                    <StyledCardBoldText>
                      {contentFirstCard.bold}
                    </StyledCardBoldText>
                    {contentFirstCard.descr2}
                  </StyledCardDescription>
                </StyledCardTextContainer>
              </StyledCard>


              <StyledCard
                size={cardSize.medium}
                bgColor={cardBackGroundColor.medium}
              >
                <StyledCardLogoContainer>
                  <Image
                    src={search.src}
                    alt={search.alt}
                    width={iconWidth}
                    height={iconHeight}
                  />
                </StyledCardLogoContainer>
                <StyledCardTextContainer>
                  <StyledCardTitle>{contentSecondCard.title}</StyledCardTitle>
                  <StyledCardDescription>
                    {contentSecondCard.descr1}
                    <StyledCardBoldText>
                      {contentSecondCard.bold}
                    </StyledCardBoldText>
                    {contentSecondCard.descr2}
                  </StyledCardDescription>
                </StyledCardTextContainer>
              </StyledCard>


              <StyledCard
                size={cardSize.big}
                bgColor={cardBackGroundColor.dark}
              >
                <StyledCardLogoContainer>
                  <Image
                    src={pitch.src}
                    alt={pitch.alt}
                    width={iconWidth}
                    height={iconHeight}
                  />
                </StyledCardLogoContainer>
                <StyledCardTextContainer>
                  <StyledCardTitle>{contentThirdCard.title}</StyledCardTitle>
                  <StyledCardDescription>
                    {contentThirdCard.descr1}
                    <StyledCardBoldText>
                      {contentThirdCard.bold}
                    </StyledCardBoldText>
                    {contentThirdCard.descr2}
                  </StyledCardDescription>
                </StyledCardTextContainer>
              </StyledCard>
            </StyledCardContainer>
          </StyledContentWrapperContainer>
        </StyledBackgroundImgContainer>
      </StyledOuterContainer>
    </StyledContainer>
  );
};

{
}
