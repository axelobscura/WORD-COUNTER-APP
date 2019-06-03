import React, {Component} from 'react';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';
import './App.css';

class App extends Component {
  
  state = {
    largo: 0,
    letra: ""
  }

  longitud = (event) => {
    var texto = event.target.value;
    var textoArr = texto.split('');
    this.setState({
      largo: textoArr.length,
      letra: textoArr[textoArr.length - 1]
    })
  }

  render(){
    return (
      <div className="App">
        <input type="text" onChange={this.longitud} />
        <p>{this.state.largo}</p>
        <ValidationComponent number={this.state.largo} />
        <CharComponent letra={this.state.letra} />
      </div>
    );
  }
}

export default App;
