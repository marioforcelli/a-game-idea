
import  './Card.css'
export function Card({link, nome, nota, className, onMouseOver, onMouseOut, index}){

    
    const handleClick = (e) => {return e}

    return(
        <div onMouseOut={onMouseOut} onMouseOver={onMouseOver} className='card' onClick={(e) => {console.log(e.target)}}>
             <div className="card-top" style={{backgroundImage: `url(${link})`}}>

                </div>
            <div className="card-bottom">
                <div className='bottom-left-infos'>{nome}</div>
                <div className='bottom-right-infos'>
                    <div className={className}>
                        <span>{nota}</span></div>
                    
                </div>
                
    
        </div>

        </div>
       
    )
}