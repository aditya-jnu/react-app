import { useState } from "react";
import './Card.css'

function Card(props){
   const[readmore,setReadmore]=useState(false);
   const description=readmore ? props.info : `${props.info.substring(0,200)}....`;
 
 return(
    <div className="cardContent">
         <div className="cont">
            <img src={props.image} className="image"></img>
            <div className="tourInfo">
               <p className="price">{props.price}</p>
               <p className="name">{props.name}</p>
            </div>
            <div className="desc">
               {description}
               <span onClick={()=>setReadmore(!readmore)} className="rm">
                  {readmore ? 'show less' : 'read more'}
               </span>
            </div>  
         </div>        
         <button onClick={()=>props.remHandler(props.id)} className="btn">
            Not Intrested
         </button>
      
    </div>
 )
}
export default Card;