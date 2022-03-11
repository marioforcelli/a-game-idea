
import  './Card.css'
export function Card({link, nome, nota, className, onMouseOver, onMouseOut, index}){
    return(
        <div onMouseOut={onMouseOut} onMouseOver={onMouseOver} className='card' >
             <div className="card-top" style={{backgroundImage: `url(${link})`}}>

                </div>
            <div className="card-bottom">
                <div className='bottom-left-infos'>{nome}</div>
                <div className='bottom-right-infos'>
                    <div className={className}>
                        {console.log(className)}
                        <span>{nota}</span></div>
                    
                </div>
                
    
        </div>

        </div>
       
    )
}