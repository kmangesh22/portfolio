import React from 'react'
import "../sass/ArtGallery.scss"
export default function ArtGallery(){
    return(
        <div className="artgallery">
          <Painting name="ship"/>
          <Painting name="bird"/>
          <Painting name="angrybird"/>
          <Painting name="camel"/>
          <Painting name="penguin"/>
          <Painting name="ape"/>
          <Painting name="smallbird"/>
          <Painting name="wolf"/>
        </div>
    );
}


function Painting(props){
  return(
      <img className="painting" src={`/${props.name}.webp`} onClick={()=>window.location=`/${props.name}.webp`} alt={props.name} />
  );
}
