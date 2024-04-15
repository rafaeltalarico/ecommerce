import React from "react";

const Bemvindo = (props) => {
  return(
    <div>
      <h2>Bem-vindo(a) {props.nome} </h2>
    </div>
  );
}

function App(){
  return(
    <div>
      Teste
      <Bemvindo nome = "Rafael" />
      <h1>Hello, world</h1>
    </div>
  );
}

export default App;