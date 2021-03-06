import React, { useState, useCallback, useRef } from 'react';
import './App.css';
import TextInput from './components/TextInput/TextInput';
import styled from 'styled-components';
import Button from './components/Button/Button';


const App: React.FC = () => {
  const [inputText, setInputText] = useState<string>("");
  const [textAdded, setTextAdded] = useState<Array<String>>([]);
  const inputTextRef = useRef<HTMLInputElement>(null);

  const inputTextOnChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  }, []);

  const buttonOnClick = useCallback(() => {
    setTextAdded([...textAdded, inputText]);
    setInputText("");
    inputTextRef?.current?.focus();
  },[textAdded, inputText]);


  return (
    <div className="App">
      <H1>Testing Tutorial</H1>
      <TextInput
        value={inputText}
        onChange={inputTextOnChange}
        ref={inputTextRef}
      />
      <Button
        title="Click Me!"
        onClick={buttonOnClick}
      />
      <ul>
        {textAdded.map((item, i) => <li key={i} data-testid={"itemNumber" + i}>{item}</li>)}
      </ul>
    </div>
  );
}

const H1 = styled.h1`
`;

export default App;
