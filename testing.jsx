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
    alert("testing");
    setOutputValue(b);
  }

  function CosDegree(e) 
  {
    e.preventDefault();
    var a = inputValue;
    var b = Math.cos(a * Math.PI / 180);
    alert("testing");
    setOutputValue(b);
  }

  function TanDegree(e) 
  {
    e.preventDefault();
    var a = inputValue;
    var b = Math.tan(a * Math.PI / 180);
    alert("testing");
    setOutputValue(b);
  }

  function TanRadian(e)
  {
    e.preventDefault();
    var a = inputValue;
    var b = Math.tan(a);
    alert("testing");
    setOutputValue(b);
  }

  function CosRadian(e)
  {
    e.preventDefault();
    var a = inputValue;
    var b = Math.cos(a);
    alert("testing");
    setOutputValue(b);
  }

  function SinRadian(e)
  {
    e.preventDefault();
    var a = inputValue;
    var b = Math.sin(a);
    alert("testing");
    setOutputValue(b);
  }

  function Square(e)
  {
    e.preventDefault()
    var a = inputValue;
    var b = a * a;
    alert("testing");
    setOutputValue(b);
  }

  function Cubic(e)
  {
    e.preventDefault()
    var a = inputValue;
    var b = a * a * a;
    alert("testing");
    setOutputValue(b);
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
              name=""
              id="ip"
              className="ibox"
            />

            <div className="imp">
              <button className="equalTo" id="equal">=</button>
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
              <button className="btn" id='one'>1</button>
              <button className="btn" id='two'>2</button>
              <button className="btn" id='three'>3</button>
              <button className="btn" id='add'>+</button>
              <button className="btn" id='openBracket'>(</button>
            </div>

            <div className="num1">
              <button className="btn" id='four'>4</button>
              <button className="btn" id='five'>5</button>
              <button className="btn" id='six'>6</button>
              <button className="btn" id='minus'>-</button>
              <button className="btn" id='closeBracket'>)</button>
            </div>

            <div className="num1">
              <button className="btn" id='seven'>7</button>
              <button className="btn" id='eight'>8</button>
              <button className="btn" id='nine'>9</button>
              <button className="btn" id='mul'>*</button>
              <button className="btn" onClick={Square}>x<sup>2</sup></button>
            </div>

            <div className="num1">
              <button className="btn" id='dot'>.</button>
              <button className="btn" id='zero'>0</button>
              <button className="btn" id='modulo'>%</button>
              <button className="btn" id='div'>/</button>
              <button className="btn" onClick={Cubic}>x<sup>3</sup></button>
            </div>
          </div>

          <div className="trignometry">
            <div className="trig" id="degree1">
              <p className="degree">Degree</p>
              <button className="teeta" id='sinD' onClick={SinDegree}>sin Ꝋ</button>
              <button className="teeta" id='cosD' onClick={CosDegree}>cos Ꝋ</button>
              <button className="teeta" id='tanD' onClick={TanDegree}>tan Ꝋ</button>
              <button className="teeta1" id='clear'>Clear By</button>
            </div>

            <div className="trig" id="radian1">
              <p className="radian">Radian</p>
              <button className="teeta" id='sinR' onClick={SinRadian}>sin Ꝋ</button>
              <button className="teeta" id='cosR' onClick={CosRadian}>cos Ꝋ</button>
              <button className="teeta" id='tanR' onClick={TanRadian}>tan Ꝋ</button>
              <button className="teeta1" id='ac'>All Clear</button>
            </div>
          </div>

        </div>
      </div>

      <p className="note">NOTE :- If you want to find Square, Cubic or Trigonometric values just click on the respective buttons provided rathar than "=" button</p>
    </div>
  );
}

export default App;
