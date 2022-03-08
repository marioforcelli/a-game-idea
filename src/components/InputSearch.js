import './InputSearch.css'

export function InputSearch({children, onChange}){
    return(
        <input onChange={onChange} className="input-search">{children}</input>
    )

}