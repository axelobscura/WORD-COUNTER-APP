import React from 'react';
import './CharComponent.css';

const CharComponent = (props)=>{
  return(
    <div>
      <h2 className="vc">{props.letra}</h2>
    </div>
  );
}

export default CharComponent;