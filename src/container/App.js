
import './App.css';
import {InputSearch} from '../components/InputSearch'
import {BtnSearch} from '../components/BtnSearch'
import {GetList} from '../services/GetList'
import { useEffect, useState } from 'react';

function App() {
  const [list, setList] = useState([]);
  const [inputValue, setInputValue] = useState('')

  useEffect(() =>{
    GetList(inputValue).then(list =>console.log(list.results))
    console.log(list)
  }, [inputValue])
  
  
  return (
    
    <div className="App">
      <header className="header">
      <InputSearch onChange = {
        (e) => setInputValue(e.target.value)}></InputSearch>
      <BtnSearch onClick={() => console.log('oloko bixo')}>Procurar</BtnSearch>

      </header>

    </div>
  );
}

export default App;
