import React, { useState } from 'react'
import './Copybtn.css'
const Copybtn = (props) => {
    let uri = "https://cdn-icons-png.flaticon.com/128/54/54702.png";
    const [url,setUrl]= useState(uri);
   
    
  let successUrl = "https://cdn-icons-png.flaticon.com/128/6974/6974447.png";

  const copyHandler = ()=>{
    setUrl(successUrl);
    if(props.isResult)
      navigator.clipboard.writeText(props.isResult);
    setTimeout(()=>setUrl(uri),1000);
  }

  if(props.isResult){
    return (
   
        <button onClick={copyHandler}  className="copy-btn"> <img src={url} alt=''/></button>
     
   )
  }
  else{
    return <></>
  }

  
}

export default Copybtn
