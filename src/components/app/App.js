import "./App.css";
import stoneGenerator from "../../functions/stone-generator";
import Stone from '../stone/Stone';
import {useState} from 'react';
import { NUMBER_MAXIMUM_ELEMENTS } from '../../settings';

function App() {
  const [elements, setElements] = useState([]);

  const onStartClick = () => {
    const elems = [];

    for(let i = 0; i < NUMBER_MAXIMUM_ELEMENTS; i += 1){
      elems.push(stoneGenerator(i));
    }
    setElements(elems);
  };

  const move = (selectedElements) => {
    const [first, second] = selectedElements;
    first.isSelected = false;
    second.isSelected = false;
    
    if(Math.abs(first.x - second.x) > 1 || Math.abs(first.y - second.y) > 1){
      console.error('ERROR. THEY ARE TOO FAR FROM EACH OTHER');
    }else{
      [first.classN, second.classN] = [second.classN, first.classN];
    }
  }

  const onSelect = (id) => {
    const stone = elements.find(el => el.id == id);
    stone.isSelected = !stone.isSelected;

    const selectedElements = elements.filter(el => el.isSelected);
    
    if(selectedElements.length == 2){
        move(selectedElements);
    }

    setElements([...elements]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>Hello</p>
      </header>
      <button id="startBtn" onClick={() => onStartClick()}>
        START
      </button>
      <div id="container">
        { elements.map((stoneInfo) => <Stone data={stoneInfo} key={stoneInfo.id} onSelect={onSelect} />) }
      </div>
    </div>
  );
}

export default App;
