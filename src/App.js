import React, {Component} from 'react';
import './App.css';

class App extends Component {
  
  state = {
    largo: 0
  }

  longitud = (event) => {
    var texto = event.target.value;
    var textoArr = texto.split('');
    this.setState({
      largo: textoArr.length
    })
  }

  render(){
    return (
      <div className="App">
        <input type="text" onChange={this.longitud} />
        <p>{this.state.largo}</p>
      </div>
    );
  }
}

export default App;
