import React from "react";
import styled from "styled-components";

interface Props {
    onChange : (event : React.ChangeEvent<HTMLInputElement>) => void,
    value : string
};

const TextInput : React.FC<Props> = React.memo(({onChange, value}) => (
    <StyledInput
        value={value}
        onChange={onChange}
        data-testid="textInput"
    />
));

const StyledInput = styled.input`
`;

export default TextInput;