
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
  const [isLoading, setIsLoading] = useState(undefined)

  useEffect(() =>{
    setList([])
   
    console.log('useEffect inputValue', isLoading)
    if (inputValue !== ''){
      GetList(inputValue).then(list => {
        setIsLoading(false)
        setList(list)})
        setIsLoading(true)
    }

    console.log(list)

    if(inputValue === ''){
      GetListOrderingByMetacritic().then(list => {
        setIsLoading(false)
        setList(list)})
        setIsLoading(true)
    }
 
  }, [inputValue])
  
useEffect(() =>{
  console.log(isLoading)
  GetListOrderingByMetacritic().then(list => {
    setIsLoading(false)
    setList(list)})
    setIsLoading(true)
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

        {list.length === 0  && isLoading?
        (<div style={{}}><LoadingIco></LoadingIco></div>)
        : list.length !== 0 && !isLoading ?
          list.map((i, index) => {
             return  (<Card key={index} platform={i.name} link={i.background_image}></Card>)
            
          } 
          
          )
          : (null)
          }

      </main>

    </div>
  );
}

export default App;
