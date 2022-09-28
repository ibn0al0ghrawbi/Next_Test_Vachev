import styled from "styled-components";

export const StyledContentWrapperContainer = styled(({ ...props }) => (
  <div {...props} />
))`
  display: flex;
  flex-direction: column;
  margin: auto;
  height: fit-content;
  width: fit-content;
`;
