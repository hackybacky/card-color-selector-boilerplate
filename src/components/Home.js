import React, { useEffect, useState } from "react";
import ColorSelector from "./ColorSelector";



const colorConfig = [
    
  {
    key: "blue",
    label: "primary",
    classname: "btn-blue",
    background: "blue",
  },
  {
    key: "orange",
    label:"info",
    classname: "btn-orange",
    background: "orange",
  },
  {
    key: "green",
    label: "success",
    classname: "btn-green",
    background: "green",
  },
  {
    key: "red",
    label: "danger",
    classname: "btn-green",
    background: "red",
  },
  {
    key: "secondary",
    label: "secondary",
    classname: "btn-grey",
    background: "grey",
  },
  {
    key: "warning",
    label: "warning",
    classname: "btn-waring",
    background: "yellow",
  },
  {
    key: "dark",
    label: "dark",
    classname: "btn-dark",
    background: "black",
  },
]
export const Home = () => {
  const [cardBackground,setCardBackground]=useState("no_color")
  const applyColor=(background)=>{
    
    setCardBackground()
    
  }

    return (
        <>  
          <div>
          {
                colorConfig.map((i)=>(
                  <ColorSelector applyColor={applyColor} object={i} />
                ))
              }
            <div style={{background:cardBackground,width:"700px",height:"20rem",border:"solid 2px black"}}>
                <h3>color of the card is {cardBackground}</h3>
            </div>

          </div>
          
           
            
            
      
      </>
    )
}