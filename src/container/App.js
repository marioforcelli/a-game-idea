
import './App.css';
import {InputSearch} from '../components/InputSearch'
import {GetList} from '../services/GetList'
import { Card } from '../components/Card'
import { useEffect, useReducer, useState } from 'react';
import { GetListOrderingByMetacritic } from '../services/GetListOrderingByMetacritic';
import {ReactComponent as LoadingIco} from '../assets/loading.svg'
import {AutoComplete} from '../components/AutoComplete'
import {useList} from '../hooks/useList'


function App() {
  const [isLoading, setIsLoading] = useState(undefined)
  const [data, setData] = useState('')
  const [list, listDispatch ] = useList();

  const childToParent = (childdata) => {
    setData(childdata);
  }

  useEffect(() =>{
    listDispatch({type: 'reset'})  
      GetList(data).then(list => {
        setIsLoading(false)
        listDispatch({type:'getInfos', payload: list})})
        setIsLoading(true)



 
  }, [data])
  
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

      inputToParent={childToParent}
      // onClickDelete={()=>{
      //   setInputValue('')

      //   console.log(inputValue)
      // }}
      // value= {inputValue}
      // onChange = {
      //   (e) => {
      //    setInputValue(e.target.value)

      //   }
      //   }
      //   onFocus={
      //     () => {
      //       setIsFocused(true)
      //       console.log(isFocused)
      //     }
      //   }

      //   onBlur = {
      //     () =>{
      //       setIsFocused(false)      
      //     }
      //   }
      //   autoCompStyle={
      //     () =>{
      //       if(isFocused && inputValue){
      //         return 'inline-block'
      //       }else{
      //         // return 'none'
      //       }
      //     }
      //   }
        autoList={
        list.list.filter(
          (item, index ) =>{
             const reg = new RegExp(`^${data}`, "gi")
             return item.name.match(reg) && index < 10 && index > 0 }).map((item, i)=> item.name
          )
         }

        

        ></InputSearch>
      </header>
      <main className='main-content'>
        {list.list.length === 0  && isLoading?
        (<div style={{}}><LoadingIco></LoadingIco></div>)
        : list.list.length !== 0 && !isLoading ?
          list.list.map((i, index) => {
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
