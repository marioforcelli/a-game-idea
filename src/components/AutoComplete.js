import { Children } from 'react'
import './AutoComplete.css'

export function AutoComplete({style, children}){
    return(<div style={style} className="auto-complete">{children}</div>)
    
}