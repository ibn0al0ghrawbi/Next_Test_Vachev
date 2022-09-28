import styled from "styled-components";
import { theme } from "~/styles";

export const StyledCardLight = styled(({ ...props }) => <div {...props} />)`
  width: 32.5rem;
  height: 10rem;
  background-color: ${theme.grayF8};
  border-radius: 10px;
  display: flex;
  box-sizing: border-box;

  &:hover {
    border: solid ${({ theme }) => theme.main} 3px;
    cursor: pointer;
    & label {
      color: ${({ theme }) => theme.main};
      cursor: pointer;
      text-decoration: underline;
    }
  }
`;

export const StyledCardMiddle = styled(({ ...props }) => <div {...props} />)`
  width: 35rem;
  height: 10rem;
  background-color: ${theme.grayF0};
  border-radius: 10px;
  display: flex;
  box-sizing: border-box;

  &:hover {
    border: solid ${({ theme }) => theme.main} 3px;
    cursor: pointer;
    & label {
      color: ${({ theme }) => theme.main};
      cursor: pointer;
      text-decoration: underline;
    }
  }
`;
export const StyledCardHeavy = styled(({ ...props }) => <div {...props} />)`
  width: 37.5rem;
  height: 10rem;
  background-color: ${theme.grayE2};
  border-radius: 10px;
  display: flex;
  box-sizing: border-box;

  &:hover {
    border: solid ${({ theme }) => theme.main} 3px;
    cursor: pointer;
    & label {
      color: ${({ theme }) => theme.main};
      cursor: pointer;
      text-decoration: underline;
    }
  }
`;
