import { useState } from 'react';
import './App.css';

function App() {
  const [value, setValue] = useState('');

  const handleButtonClick = (val) => {
    setValue((prev) => prev + val);
  };

  const calculateResult = () => {
    try {
      setValue(eval(value).toString()); // Using eval to compute the result
    } catch (error) {
      setValue('Error');
    }
  };

  const clearInput = () => {
    setValue('');
  };

  const deleteLast = () => {
   setValue((prev) => prev.slice(0, -1 ));
  };

  return (
    <div className='container'>
      <div className="calculator">
        <form action="">
          <div>
            <div className='display'></div>
            <input type="text" value={value} readOnly />
          </div>
          <div>
            <input type="button" value="AC" onClick={clearInput} />
            <input type="button" value="DE" onClick={deleteLast} />
            <input type="button" value="." onClick={() => handleButtonClick('.')} />
            <input type="button" value="/" onClick={() => handleButtonClick('/')} />
          </div>
          <div>
            <input type="button" value="7" onClick={() => handleButtonClick('7')} />
            <input type="button" value="8" onClick={() => handleButtonClick('8')} />
            <input type="button" value="9" onClick={() => handleButtonClick('9')} />
            <input type="button" value="*" onClick={() => handleButtonClick('*')} />
          </div>
          <div>
            <input type="button" value="4" onClick={() => handleButtonClick('4')} />
            <input type="button" value="5" onClick={() => handleButtonClick('5')} />
            <input type="button" value="6" onClick={() => handleButtonClick('6')} />
            <input type="button" value="+" onClick={() => handleButtonClick('+')} />
          </div>
          <div>
            <input type="button" value="1" onClick={() => handleButtonClick('1')} />
            <input type="button" value="2" onClick={() => handleButtonClick('2')} />
            <input type="button" value="3" onClick={() => handleButtonClick('3')} />
            <input type="button" value="-" onClick={() => handleButtonClick('-')} />
          </div>
          <div>
            <input type="button" value="00" onClick={() => handleButtonClick('00')} />
            <input type="button" value="0" onClick={() => handleButtonClick('0')} />
            <input type="button" value="=" onClick={calculateResult} />
            <h1>welcom liiban</h1>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
