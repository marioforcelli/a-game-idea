import './InputSearch.css'
import loupe from '../assets/loupe.png'
import { AutoComplete } from './AutoComplete'



export function InputSearch({children, onChange, onClickDelete, value, onFocus, onBlur, autoCompStyle}){
    return(
        <>
            <div className="input-search-div">
            <img src={loupe}></img>
            <input onFocus={onFocus} onBlur={onBlur} placeholder='Busque pelo jogo' onChange={onChange} value={value} className="input-search"></input>
            <div onClick={onClickDelete} className='delete-input'>X</div>
        </div>

        <AutoComplete style={{display: `${autoCompStyle()}`}}/>
        
        </>

        
    )

}