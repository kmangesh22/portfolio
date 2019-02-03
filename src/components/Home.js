import React from 'react';
import {Icon} from 'antd'
import Footer from './Footer'
import About from './About'
import '../sass/Home.scss'
import programmer from "../Assets/programmer.png"

export default function Home(){
  return(
    <div className="container-fluid" style={{width:"100%",backgroundColor:"white",display:"flex",flexDirection:"column",alignItems:"flex-start"}} >
      <div style={{position:"relative",top:"30%"}}>
        <span style={{fontFamily:"Raleway",fontSize:50}}>Hi, it's Mangesh</span><br/>
        <span style={{fontFamily:"Anton",fontSize:70}}>I'm a full stack web developer</span>
      </div>
      <div style={{width:"100%",display:"flex"}}>
        <img src={programmer} alt="programmer" style={{height:"70vh"}}/>
        <div id="pulse-container">
          <div id="pulse" onClick={move}>
            <Icon style={{fontSize:50,color:"white"}} type="arrow-right" />
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

function move(){
  let poly=document.querySelector("#poly");
  poly.style.animationPlayState="running";
}
