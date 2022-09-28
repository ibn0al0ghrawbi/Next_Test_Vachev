import styled from "styled-components";

export const StyledOuterContainer = styled(({ ...props }) => (
  <div {...props} />
))`
  margin-top: 5rem;
  width: 90%;
`;
