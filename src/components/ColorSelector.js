import React from "react";

export default function ColorSelector(props) {
  
 const { applyColor, object } = props;
  return (
    <>
       
       <button data-testid={object.label} style={{background:object.background,width:"90px",height:"90px",color:"white"}}
         
         >
           <h3>{object.label}</h3>
         </button>
       
       

      
    </>
  );
}