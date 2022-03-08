
import './App.css';
import {InputSearch} from '../components/InputSearch'
import {BtnSearch} from '../components/BtnSearch'
import {GetList} from '../services/GetList'
import { Card } from '../components/Card'
import { useEffect, useState } from 'react';

function App() {
  const [list, setList] = useState([]);
  const [inputValue, setInputValue] = useState('')

  let rand = list.map(function (i, index){
    return i.name
  })

  useEffect(() =>{
    GetList(inputValue).then(list => setList(list))
    console.log(list)
    console.log(rand)
  }, [inputValue])
  
  
  return (
    
    <div className="App">
      <header className="header">
      <InputSearch onChange = {
        (e) => setInputValue(e.target.value)}></InputSearch>
      <BtnSearch onClick={() => console.log('oloko bixo')}>Procurar</BtnSearch>
      </header>
      <main className='main-content'>
        {list.map((i, index)=> {
          console.log()
          return(
            <Card platform={i.name} link={i.background_image}></Card>
          )
  
        })}

      </main>

    </div>
  );
}

export default App;
