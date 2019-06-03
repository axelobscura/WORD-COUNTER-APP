import React from 'react';

const ValidationComponent = (props) => {

  let numero =  props.number;
  let message;
  if(numero <=5) {
    message = "Text to short"
  } else {
    message = "Text long enough"
  }
  return(
    <div>
      {message}
    </div>
  )
}
export default ValidationComponent;