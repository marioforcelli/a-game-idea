
import  './Card.css'
export function Card({link, platform}){
    return(
        <div className="card">
             <div className="card-top" style={{backgroundImage: `url(${link})`}}>

                </div>
            <div className="card-bottom">
                {platform}
    
        </div>

        </div>
       
    )
}