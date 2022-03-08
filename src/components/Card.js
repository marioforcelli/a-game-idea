
import  './Card.css'
export function Card({link, platform}){
    return(
        <div className="card">
            {console.log(link)}
             <div className="card-top" style={{backgroundImage: `url(${link})`}}>

                </div>
            <div className="card-bottom">
                {platform}
    
        </div>

        </div>
       
    )
}