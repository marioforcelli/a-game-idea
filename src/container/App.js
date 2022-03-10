
import './App.css';
import {InputSearch} from '../components/InputSearch'
import {GetList} from '../services/GetList'
import { Card } from '../components/Card'
import { useEffect, useState } from 'react';
import { GetListOrderingByMetacritic } from '../services/GetListOrderingByMetacritic';
import {ReactComponent as LoadingIco} from '../assets/loading.svg'

function App() {
  const [list, setList] = useState([]);
  const [inputValue, setInputValue] = useState('')
  const [firstLoad, setFirstLoad] = useState(true)

  useEffect(() =>{
    console.log(list)
    setList([])

    if (inputValue !== ''){
      GetList(inputValue).then(list => setList(list))
    }

    if(inputValue === ''){
      GetListOrderingByMetacritic().then(list => {
        setList(list)})
    }
 
  }, [inputValue])
  
useEffect(() =>{
  GetListOrderingByMetacritic().then(list => {
    setList(list)})

}, [])
  
  return (
    
    <div className="App">
      <header className="header">
      <InputSearch 
      onClickDelete={()=>{
        setInputValue('')

        console.log(inputValue)
      }}
      value= {inputValue}
      
      onChange = {
        (e) => {
          setInputValue(e.target.value)

        }
        }></InputSearch>
      </header>
      <main className='main-content'>

        {list.length === 0? 
        (<div style={{}}><LoadingIco></LoadingIco></div>)
        :   
          list.map((i, index) => {
             return  (<Card key={index} platform={i.name} link={i.background_image}></Card>)
            
          })}
       
  

      </main>

    </div>
  );
}

export default App;
