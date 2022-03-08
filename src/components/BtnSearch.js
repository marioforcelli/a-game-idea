import './BtnSearch.css'

export function BtnSearch({children, onClick}){
    return(
        <button onClick={onClick} className="btn-search">{children}</button>
    )
}