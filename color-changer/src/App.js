import Square from './Square'
import Input from './Input'
import Title from './Title'
import { useState} from 'react'
function App() {
  const [colorValue,setColorValue] = useState('')
  const [hexValue, setHexValue] = useState('')
  const [isDarkText, setIsDarkText] = useState(true)
  return (
    <div className="App">
      <Title />
      <Square  
        colorValue={colorValue}
        setColorValue={setColorValue}
        hexValue={hexValue}
        setHexValue={setHexValue}
        isDarkText={isDarkText}
        setIsDarkText={setIsDarkText}
      />
      <Input 
        colorValue={colorValue}
        hexValue={hexValue}
        setHexValue={setHexValue}
        setColorValue={setColorValue}
        setIsDarkText={setIsDarkText}
        isDarkText={isDarkText}
        />
    </div>
  );
}

export default App;
