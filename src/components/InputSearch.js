import './InputSearch.css'
import loupe from '../assets/loupe.png'
import { AutoComplete } from './AutoComplete'
import { Children, useEffect, useState } from 'react';




export function InputSearch({autoList, onChange, onClickDelete, value, onFocus, onBlur, inputToParent}){ 
    const [data, setData] = useState(''); 
    const [isFocused, setIsFocused] = useState(undefined)
    const [inputValue, setInputValue] = useState('')

    const childToParent = (childdata) => {
        setData(childdata);
      }


      useEffect(()=>{
          if(data || data !== inputValue){
            setInputValue(data)
            setIsFocused(false)

          }


      },[data])

    return(
    
            <div className="input-search-div" >
            <img src={loupe}></img>
            <input 
            
            onFocus={() => setIsFocused(true)} 

            

                placeholder='Busque pelo jogo' 
                onChange={ (e) => setInputValue(e.target.value)

                } value={inputValue} className="input-search">{inputToParent(inputValue)}</input>
                <div onClick={()=> {setInputValue('')


            }} className='delete-input'>X</div>
            <AutoComplete onBlur={() =>setIsFocused(false)} style={{display: `${isFocused && autoList.length > 0 ? 'inline-block': 'none'}`}} autoList={()=> autoList} dataToParent={childToParent}/>
        </div>


        
    )

}