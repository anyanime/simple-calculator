import './index.css';
import Frame from './components/Frame';
import Output from './components/Output';
import Button from './components/Button'
import {useState} from 'react';


function App() {
  //Add state and functionality to the App
  const [result, setResult] = useState("");
  const handleClick = (e) => {
    console.log(e)
    const value = e;

    if(e === "="){
              calculate()
          }       
          else if(e === "C"){
              reset()
          }
          else if(e === "del"){
              backspace()
          }
      
          else {
              setResult(result + value)
          }
  }

  const calculate = () => {
        try {
            setResult(
                // eslint-disable-next-line
                eval(result))
        } catch (error) {
            setResult({
                result: error.name
            })
    
        }
    };
    
    const reset = () => {
        setResult("")
    };
    
    const backspace = () => {
      setResult(result.slice(0, -1))
    };
  
  return (
    <Frame>
      <Output result={result}/>
      <Button onClick={handleClick}/>
    </Frame>
    
  )
}

export default App;
