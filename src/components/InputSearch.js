import './InputSearch.css'
import loupe from '../assets/loupe.png'



export function InputSearch({children, onChange, onClickDelete, value}){
    return(
        <div className="input-search-div">
            <img src={loupe}></img>
            <input placeholder='Busque pelo jogo' onChange={onChange} value={value} className="input-search"></input>
            <div onClick={onClickDelete} className='delete-input'>X</div>
        </div>
        
    )

}