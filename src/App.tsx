import React, {useEffect, useState} from 'react';
import './App.css';

function App() {

  const [value, setValue] = useState(0)

  // отработает единожды. Данные из localStorage будут получены только в том случае, когда приложение загрузится
  useEffect(() => {
    let valueAsString = localStorage.getItem('counterValue')
    if (valueAsString) {
      let newValue = JSON.parse(valueAsString)
      setValue(newValue)
    }
  }, [])

  // пападу каждый раз когда изменяется value. Будет устанавливаться новое значение в localStorage
  useEffect(() => {
    localStorage.setItem('counterValue', JSON.stringify(value))
  }, [value])

  const incHandler = () => {
    setValue(value + 1)
  }

  return (
    <div className="App">
      <h1>{value}</h1>
      <button onClick={incHandler}>inc</button>

    </div>
  );
}

export default App;
