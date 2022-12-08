import './App.css';
import data from './data.json';
import Pokemon from './pokemon';

function App() {
  const pokemons = data.map(p => {
    return (
    <Pokemon 
      weight={ p.weight } 
      height={ p.height }
      name={ p.name }
      key={ p.number }
      number={ p.number }
      image={ p.image }/>
    );
  });

  console.log(pokemons);
  console.count('App');
  return <div className='pokemons'>{ pokemons }</div>;
}

export default App;
