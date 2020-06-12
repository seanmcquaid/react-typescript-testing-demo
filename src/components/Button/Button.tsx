import React from "react";
import styled from "styled-components";

interface Props {
  onClick: () => void,
  title : string, 
};

const Button: React.FC<Props> = React.memo(({ onClick, title }) => (
  <StyledButton onClick={onClick}>
    {title}
  </StyledButton>
));

const StyledButton = styled.button`
`;

export default Button;