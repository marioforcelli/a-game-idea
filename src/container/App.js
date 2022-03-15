
import './App.css';
import {InputSearch} from '../components/InputSearch'
import {GetList} from '../services/GetList'
import { Card } from '../components/Card'
import { useEffect, useReducer, useState } from 'react';
import { GetListOrderingByMetacritic } from '../services/GetListOrderingByMetacritic';
import {ReactComponent as LoadingIco} from '../assets/loading.svg'
<<<<<<< HEAD
import {AutoComplete} from '../components/AutoComplete'
=======
import {useList} from '../hooks/useList'

>>>>>>> 8bb3931f3679b5e925fb79499a86fa0e8971ac15

function App() {
  const [inputValue, setInputValue] = useState('')
  const [isLoading, setIsLoading] = useState(undefined)
<<<<<<< HEAD
  const [isFocused, setIsFocused] = useState(undefined)
=======
  const [list, listDispatch ] = useList();
>>>>>>> 8bb3931f3679b5e925fb79499a86fa0e8971ac15

  useEffect(() =>{
    listDispatch({type: 'reset'})  
    if (inputValue !== ''){
      GetList(inputValue).then(list => {
        setIsLoading(false)
        listDispatch({type:'getInfos', payload: list})})
        setIsLoading(true)
    }

    if(inputValue === ''){
      GetListOrderingByMetacritic().then(list => {
        setIsLoading(false)
        listDispatch({type: 'reset'})
        listDispatch({type:'getInfos', payload: list})})
        setIsLoading(true)
    }
    console.log(list)


 
  }, [inputValue])
  
useEffect(() =>{
  console.log(isLoading)
  GetListOrderingByMetacritic().then(list => {
    listDispatch({type: 'reset'})
    setIsLoading(false)
    listDispatch({type:'getInfos', payload: list})})
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
        }
        onFocus={
          () => {
            setIsFocused(true)
            console.log(isFocused)
          }
        }

        onBlur = {
          () =>{
            setIsFocused(false)      
          }
        }
        autoCompStyle={
          () =>{
            if(isFocused && inputValue){
              return 'inline-block'
            }else{
              return 'none'
            }
          }
        }

        ></InputSearch>
      </header>
      <main className='main-content'>
        {console.log(list.list)}
        {list.list.length === 0  && isLoading?
        (<div style={{}}><LoadingIco></LoadingIco></div>)
        : list.list.length !== 0 && !isLoading ?
          list.list.map((i, index) => {
            console.log(i)
             return  (<Card key={index} 
              index={index}
              nome={i.name} 
              link={i.background_image} 
              nota={i.metacritic} 
              className={i.metacritic !== null ? 'bottom-right-meta' : null} 
          />
                )
              }    
            )
            : (null)
          }
      </main>

    </div>
  );
}

export default App;
