/* eslint-disable react/display-name */
import { forwardRef } from "react";
import styled from "styled-components";
import { theme } from "~/styles";

export const StyledSectionBigHeading = styled(
  forwardRef((props, ref) => <h1 {...props} ref={ref} />)
)`
  font-family: Poppins;
  font-weight: 600;
  font-size: 3rem;
  line-height: 3.94rem;
`;

export const StyledSectionHeading = styled(
  forwardRef((props, ref) => <h2 {...props} ref={ref} />)
)`
  font-family: Poppins;
  font-size: 2.5rem;
  line-height: 4.375rem;
  font-weight: 600;
`;

export const StyledSectionSubheading = styled(
  forwardRef((props, ref) => <h3 {...props} ref={ref} />)
)`
  font-family: Poppins;
  font-size: 1.25rem;
  line-height: 1.875rem;
  font-weight: 300;
`;

export const StyledSectionInnerHeading = styled(
  forwardRef((props, ref) => <h4 {...props} ref={ref} />)
)`
  font-family: Poppins;
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 300;
`;

export const StyledSectionTinyHeading = styled(
  forwardRef((props, ref) => <h5 {...props} ref={ref} />)
)`
  font-family: Poppins;
  font-size: 0.75rem;
  line-height: 1.125rem;
  font-weight: 300;
`;

export const StyledSectionParagraph = styled((props) => <p {...props} />)`
  font-family: Poppins;
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 400;
`;

export const StyledCardHeading = styled((props) => <label {...props} />)`
  font-family: Poppins;
  font-size: 1.7rem;
  line-height: 1.7rem;
  font-weight: 600;
  display: inline-block; //bcs <label> is display: inline by default
`;

export const StyledCardDescription = styled((props) => <p {...props} />)`
  font-family: Poppins;
  font-size: 1.2rem;
  line-height: 1.5rem;
  font-weight: 400;
`;

export const StyledCardBoldText = styled((props) => <div {...props} />)`
  font-family: Poppins;
  font-size: 1.2rem;
  line-height: 1.5rem;
  font-weight: 600;
  margin: auto;
  display: inline;
`;
