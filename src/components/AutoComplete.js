import { Children, useCallback, useEffect, useState } from 'react'
import './AutoComplete.css'

export function AutoComplete({style, children, autoList, dataToParent, onClick, onBlur}){
    const [listAutoComplete, setListAutoComplete] = useState([])

    




    useEffect(()=>{
        setListAutoComplete(autoList)
    }, [autoList])

    return(<div style={style} autoList={autoList} onBlur={onBlur}className="auto-complete">
        {<ul>
        {listAutoComplete.map((i, index) => <li value={i} onClick={(e)=>{
            dataToParent(i)
            e.preventDefault();
            console.log(i)}}  key={index}>{i}</li>)} 
        </ul> }
    
        </div>)
    
} 