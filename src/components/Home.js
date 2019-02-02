import React from 'react';
import {Icon} from 'antd'

export default function Home(){
  return(
    <div className="container-fluid" style={{backgroundColor:"white",display:"flex",flexDirection:"column",alignItems:"flex-start"}} >
      <div style={{position:"relative",top:"30%"}}>
        <span style={{fontFamily:"Raleway",fontSize:50}}>Hi, it's Mangesh</span><br/>
        <span style={{fontFamily:"Anton",fontSize:70}}>I'm a full stack web developer</span>
      </div>
      <div style={{width:"100%",display:"flex"}}>
        <img src="/programmer.png" style={{height:"70vh"}}/>
        <div id="pulse-container">
          <div id="pulse" onClick={()=>document.querySelector("#poly").style.visibility="visible"}>
            <Icon style={{fontSize:50,color:"#ff5252",position:"relative",left:67,top:10}} type="arrow-right" />
          </div>
        </div>
        <div id="poly">
          <About/>
        </div>
      </div>
      <Footer/>
    </div>
  );
}





function About(){
  return(
    <div style={{padding:"5%",fontFamily:"Raleway",fontSize:20}}>
      <h2>Hello world!</h2>
      <p>
        I'm Mangesh Kumar, a second year student at <a href="https://aissmscoe.com/">AISSMS College OF Engineering</a>, studying Computer Science.
        I completed my higher secondary and secondary from <a href="http://apsdighi.com/index.php">Army Public School, Dighi</a>.
        I'm teaching fellow for Codigo Madrid Club at AISSMS,COE.I'm interested in Web Development, building cross platform mobile apps
        and education.I love Blogging and reading blogs and articles.I also have a YouTube channel <a href="https://www.youtube.com/channel/UCK11z-Op3tZZz0dU6YHFKDg">CS Pedia</a>, in which me and my friends provide
        quality content related to Computer Science and Technology.
      </p>
    </div>
  );
}
export function Footer(){
  return(
    <div className="container-fluid" style={{padding:"5%",fontFamily:"Raleway",fontSize:20}}>
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
    </div>
  );
}
