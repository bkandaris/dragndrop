import './App.css';
import DragNDrop from './components/DragNDrop';

const data =  [
  {title: "group 1", items: ['1', '2', '3']},
  {title: "group 2", items: ['4', '5']},
]

function App(props) {
  return (
    <div className="App-header">
      <DragNDrop data={data} />
   </div>
  );
}

export default App;
