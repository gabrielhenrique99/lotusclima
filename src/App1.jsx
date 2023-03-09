
//import './App.css';
/*import axios from "axios";
import { useState } from "react";

function App() {

  const [city, setCity] = useState("");
  const [weatherForecast, setWeatherForecast] = useState(null);

  const handleChange = (e) => {
    setCity(e.target.value)
  }

  const handleSearch = () => {
    //Nativo do JS, permite fazer a requisição para a API
    axios.get(`http://api.weatherapi.com/v1/current.json?key=a681847ac0064af5a09234043231602&q=${city}&lang=pt`)
    .then((response) => {
      if(response.status === 200){
        return response.json()
      }
    })
    .then((data) => {
      console.log(data)
      setWeatherForecast(data)
    });
  };

  return (
    <div>
     <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
      <a className="navbar-brand text-white" href="#top">Lótus Clima</a>
     </nav>

     <main className="container">
      <div className="jumbotron">
        <h1>
          Verifique agora a previsão do tempo da sua cidade!
        </h1>
        <p className="lead">
          Digite o nome da sua cidade no campo abaixo e em seguida clique em pesquisar
        </p>
        <div className="row mb-4">
          <div className="col-md-6">
            <input 
            //Toda vez que o usuário digitar ela irá chamar a função
            onChange={handleChange}
            className="form-control" type="text" value={city}/>
          </div>
        </div>
        <button onClick={handleSearch} className="btn btn-primary btn-lg">
          Pesquisar
        </button>
        
        {
          weatherForecast ? (
            <div>
              <div className="mt-4 d-flex align-items-center">
                <div>
                  <img src={weatherForecast.current.condition.icon} />
                </div>
                <div>
                  <h3>Hoje o dia está: {weatherForecast.current.condition.text}</h3>
                  <p className="lead">
                    Temperatura: {weatherForecast.current.temp_c}
                  </p>
                  <p className="lead">
                    Umidade: {weatherForecast.current.humidity}
                  </p>
                  <p className="lead">
                    Sensação Térmica: {weatherForecast.current.feelslike_c}
                  </p>
                </div>
              </div>
            </div>
          ) : null
        }

      </div>
     </main>
    </div>
  );
}

export default App;*/
