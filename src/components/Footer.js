import React from 'react'
import {Icon} from 'antd'

export default function Footer(){
  return(
    <div className="container-fluid" style={{width:"100%",padding:"5%",fontFamily:"Raleway",fontSize:20}}>
      <h1>Contact me</h1>
      <ul>
        <li>
          For general communication, contact<br></br>
          &emsp;&emsp; <a href="mailto:kumarmangesh55@gmail.com">kumarmangesh55@gmail.com</a>
        </li>
        <li>
          For CS pedia related communication, contact <br></br>
          &emsp;&emsp;<a href="mailto:infocspedia@gmail.com">infocspedia@gmail.com</a>
        </li>
      </ul>
      <div style={{display:"flex",justifyContent:"space-around"}}>
        <Icon style={{fontSize:"40px",color:"red"}} type="youtube" />
        <Icon style={{fontSize:"40px",color:"black"}} type="instagram" />
        <Icon style={{fontSize:"40px",color:"#3b5998"}} type="facebook" />
      </div>
    </div>
  );
}
