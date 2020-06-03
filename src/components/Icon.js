import styled from "styled-components";

const Icon = styled.img`
  width: ${({ width }) => width || "75px"};
  height: ${({ height }) => height || "45px"};
`;

export default Icon;