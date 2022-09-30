import styled from "styled-components";
import { ContentCard } from "~/collections";

import {
  SectionContainer,
  TextContainer,
  VideoContainer,
  OuterContainer,
  BackgroundImgContainer,
  CardContainer,
  ContentWrapperContainer,
  CardLogoContainer,
  CardTextContainer,
  SectionBigHeading,
  SectionSubheading,
  CardHeading,
  CardDescription,
  CardBoldText,
} from "~/components";

export const StyledContainer = styled(({ ...props }) => (
  <SectionContainer {...props} />
))`
  //flex by import
  align-items: center;
  flex-direction: column;
  margin-bottom: 7rem;
`;

export const StyledSectionContainer = styled(({ ...props }) => (
  <SectionContainer {...props} />
))`
  width: 25.03rem;
  margin: auto;
`;

export const StyledVideoContainer = styled(({ ...props }) => (
  <VideoContainer {...props} />
))`
  margin-top: -3rem;
`;

export const StyledTitle = styled((props) => <SectionBigHeading {...props} />)`
  margin: 6rem 0 0 0;
  color: black;
  text-align: center;
`;

export const StyledCardTitle = styled((props) => <CardHeading {...props} />)`
  margin: 0.5rem 0 0 0;
  color: black;
`;

export const StyledCardDescription = styled((props) => (
  <CardDescription {...props} />
))`
  margin: 1rem 2.5rem 0 0;
  color: black;
`;

export const StyledDescription = styled((props) => (
  <SectionSubheading {...props} />
))`
  margin: 0 0;
  text-align: center;
  font-size: 1.5rem;
`;

export const StyledTextContainer = styled(({ ...props }) => (
  <TextContainer {...props} />
))`
  @media only screen and (min-width: 768px) {
    margin: auto;
    width: 100%;
  }
  @media only screen and (min-width: 1024px) {
    margin: auto;
    width: 80%;
  }
`;

export const StyledOuterContainer = styled(({ ...props }) => (
  <OuterContainer {...props} />
))``;

export const StyledBackgroundImgContainer = styled(({ ...props }) => (
  <BackgroundImgContainer {...props} />
))`
  background-position: 15% 0%;

  @media only screen and (min-width: 768px) {
    background-position: 25% 0%;
    margin: 2rem 0 3rem 0;
  }
  @media only screen and (min-width: 1024px) {
    background-position: 80% 0;
    margin: 2rem 0 3rem 4rem;
  }
`;

export const StyledCardContainer = styled(({ ...props }) => (
  <CardContainer {...props} />
))`
  @media only screen and (min-width: 1024px) {
    margin-left: 6rem;
    justify-content: space-between;
    padding-bottom: 1rem;
    margin-top: 0;
    margin-bottom: 0;
  }
`;

export const StyledCard = styled(({ ...props }) => (
  <ContentCard {...props} />
))``;

export const StyledContentWrapperContainer = styled(({ ...props }) => (
  <ContentWrapperContainer {...props} />
))`
  @media only screen and (min-width: 1024px) {
    flex-direction: row;
    margin-left: 12rem;
  }
`;

export const StyledCardTextContainer = styled(({ ...props }) => (
  <CardTextContainer {...props} />
))``;

export const StyledCardLogoContainer = styled(({ ...props }) => (
  <CardLogoContainer {...props} />
))``;

export const StyledCardBoldText = styled(({ ...props }) => (
  <CardBoldText {...props} />
))``;
