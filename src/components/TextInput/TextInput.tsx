import React, { RefObject } from "react";
import styled from "styled-components";

type Props = {
    onChange : (event : React.ChangeEvent<HTMLInputElement>) => void,
    value: string,
    ref? : RefObject<HTMLInputElement>,
};

const TextInput : React.FC<Props> = React.memo(({onChange, value, ref}) => (
    <StyledInput
        value={value}
        onChange={onChange}
        data-testid="textInput"
        ref={ref}
    />
));

const StyledInput = styled.input`
`;

export default TextInput;