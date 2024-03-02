import React, { useState } from 'react';
import './App.css';

function App() 
{
  const [inputValue, setInputValue] = useState('');
  const [outputValue, setOutputValue] = useState('');

  function SinDegree(e) 
  {
    e.preventDefault();
    var a = inputValue;
    var b = Math.sin(a * Math.PI / 180);
    alert("You can see the value of Sin in Degree but you cannot perform arithmetic operations with multiple Sin value so, am working on it");
    setOutputValue(b);
  }

  function CosDegree(e) 
  {
    e.preventDefault();
    var a = inputValue;
    var b = Math.cos(a * Math.PI / 180);
    alert("You can see the value of Cos in Degree but you cannot perform arithmetic operations with multiple Cos value so, am working on it");
    setOutputValue(b);
  }

  function TanDegree(e) 
  {
    e.preventDefault();
    var a = inputValue;
    var b = Math.tan(a * Math.PI / 180);
    alert("You can see the value of Tan in Degree but you cannot perform arithmetic operations with multiple Tan value so, am working on it");
    setOutputValue(b);
  }

  function TanRadian(e)
  {
    e.preventDefault();
    var a = inputValue;
    var b = Math.tan(a);
    alert("You can see the value of Tan in Radian but you cannot perform arithmetic operations with multiple Tan value so, am working on it");
    setOutputValue(b);
  }

  function CosRadian(e)
  {
    e.preventDefault();
    var a = inputValue;
    var b = Math.cos(a);
    alert("You can see the value of Cos in Radian but you cannot perform arithmetic operations with multiple Cos value so, am working on it");
    setOutputValue(b);
  }

  function SinRadian(e)
  {
    e.preventDefault();
    var a = inputValue;
    var b = Math.sin(a);
    alert("You can see the value of Sin in Radian but you cannot perform arithmetic operations with multiple Sin value so, am working on it");
    setOutputValue(b);
  }

  function Square(e)
  {
    e.preventDefault()
    var a = inputValue;
    var b = a * a;
    alert("You can get square value of " + a + " but you can't perform arithmetic operations so, am working on it");
    setOutputValue(b);
  }

  function Cubic(e)
  {
    e.preventDefault()
    var a = inputValue;
    var b = a * a * a;
    alert("You can get cube value of " + a + " but you can't perform arithmetic operations so, am working on it");
    setOutputValue(b);
  }

  function handleNumberClick(number) 
  {
    setInputValue(inputValue + number);
  }

  function handleOperatorClick(operator) 
  {
    setInputValue(inputValue + operator);
  }

  function handleEqualClick() 
  {
    try
    {
      const result = eval(inputValue);
      setOutputValue(result);
    }
    catch(err)
    {
      alert(" try to provide valid inputs");
      setInputValue('');
      setOutputValue('');
    }
  }
  
  function Clear()
  {
    setInputValue(inputValue.slice(0, -1));
  }
  function AllClear()
  {
    setInputValue('');
    setOutputValue('');
  }

  function handleKeyPress(event)  // if ans is not displayed then comment this fun()
  {
    if (event.key === 'Enter') {
      handleEqualClick();
    }
  }

  return (
    <div className="app">
      <h1 className="title">BASIC SCIENTIFIC CALCULATOR</h1>
      <div className="main">
        <div className="calc">
          <div className="output">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress} // if ans is not displayed then remove this property
              name=""
              id="ip"
              className="ibox"
            />

            <div className="imp">
              <button className="equalTo" id="equal" onClick={handleEqualClick}>=</button>
            </div>

            <input
              type="text"
              value={outputValue}
              name=""
              id="op"
              className="ibox"
              readOnly
            />
          </div>

          <div className="numbers">
            <div className="num1">
              <button className="btn" id='one'         onClick={() => handleNumberClick('1')}>1</button>
              <button className="btn" id='two'         onClick={() => handleNumberClick('2')}>2</button>
              <button className="btn" id='three'       onClick={() => handleNumberClick('3')}>3</button>
              <button className="btn" id='add'         onClick={() => handleOperatorClick('+')}>+</button>
              <button className="btn" id='openBracket' onClick={() => handleOperatorClick('(')}>(</button>
            </div>

            <div className="num1">
              <button className="btn" id='four'         onClick={() => handleNumberClick('4')}>4</button>
              <button className="btn" id='five'         onClick={() => handleNumberClick('5')}>5</button>
              <button className="btn" id='six'          onClick={() => handleNumberClick('6')}>6</button>
              <button className="btn" id='minus'        onClick={() => handleOperatorClick('-')}>-</button>
              <button className="btn" id='closeBracket' onClick={() => handleOperatorClick(')')}>)</button>
            </div>

            <div className="num1">
              <button className="btn" id='seven'        onClick={() => handleNumberClick('7')}>7</button>
              <button className="btn" id='eight'        onClick={() => handleNumberClick('8')}>8</button>
              <button className="btn" id='nine'         onClick={() => handleNumberClick('9')}>9</button>
              <button className="btn" id='mul'          onClick={() => handleOperatorClick('*')}>*</button>
              <button className="btn" id='square'       onClick={Square}>x<sup>2</sup></button>
            </div>

            <div className="num1">
              <button className="btn" id='dot'          onClick={() => handleOperatorClick('.')}>.</button>
              <button className="btn" id='zero'         onClick={() => handleNumberClick('0')}>0</button>
              <button className="btn" id='modulo'       onClick={() => handleOperatorClick('%')}>%</button>
              <button className="btn" id='div'          onClick={() => handleOperatorClick('/')}>/</button>
              <button className="btn" id='cube'         onClick={Cubic}>x<sup>3</sup></button>
            </div>
          </div>

          <div className="trignometry">
            <div className="trig" id="degree1">
              <p className="degree">Degree</p>
              <button className="teeta" id='sinD'      onClick={SinDegree}>sin Ꝋ</button>
              <button className="teeta" id='cosD'      onClick={CosDegree}>cos Ꝋ</button>
              <button className="teeta" id='tanD'      onClick={TanDegree}>tan Ꝋ</button>
              <button className="teeta1" id='clear'    onClick={Clear}>Clear By</button>
            </div>

            <div className="trig" id="radian1">
              <p className="radian">Radian</p>
              <button className="teeta" id='sinR'      onClick={SinRadian}>sin Ꝋ</button>
              <button className="teeta" id='cosR'      onClick={CosRadian}>cos Ꝋ</button>
              <button className="teeta" id='tanR'      onClick={TanRadian}>tan Ꝋ</button>
              <button className="teeta1" id='ac'       onClick={AllClear}>All Clear</button>
            </div>
          </div>

        </div>
      </div>

      <p className="note">NOTE :- If you want to find Square, Cubic or Trigonometric values just click on the respective buttons provided rathar than "=" button</p>
    </div>
  );
}

export default App;
