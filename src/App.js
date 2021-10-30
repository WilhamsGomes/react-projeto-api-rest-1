import './App.css';
import api from './services/api';
import React, {useEffect, useState} from 'react';


function App() {

  const [Pessoas, setPessoas] = useState([]);
  const [botao, setBotao] = useState(true);

  var infos = [];
 

  useEffect(()=>{
    api.get().then((response)=>

    setPessoas(response.data.results))

    .catch((error) =>{

      console.log(error)
      
    })
  },[botao])

  infos = Pessoas.slice(0,10);

  return (
    <div className="App">
      
        <div className="conteiner">
            <h3>Pessoas cadastradas</h3>
            <button onClick={()=>botao ? setBotao(false) : setBotao(true)}>Pesquisar pessoas</button>

            <div className="conteiner-dados">
                 {infos.map((response)=>{
                    return <div className="card">

                        <img src={response.picture.large} alt="" />
                        <p> <span>Nome: </span> {response.name.first} {response.name.last} </p>
                        
                        <p> <span>Idade: </span>{response.dob.age} </p>

                        <p> <span>Localização: </span>{response.location.state}, {response.location.country} </p>
                                                        
                      </div>
                    })}
            </div>

        </div>

    </div>
  );
}

export default App;
