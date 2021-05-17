import { useRef, useState } from "react";
import "./App.css";
import MyNode from "./MyNode";

function App() {
  const nodesRef = useRef([]);
  const [nodes, setNodes] = useState([]);
  const addNode = () => {
    setNodes([
      ...nodes,
      <MyNode
        key={nodes.length}
        inputRef={(elem) => (nodesRef.current[nodes.length] = elem)}
      />,
    ]);
  };
  return (
    <div className="App">
      <div className="App-wrapper">
        <button className="create-node" onClick={addNode}>
          Create Node
        </button>
        <div className="nodes-wrapper">{nodes}</div>
      </div>
    </div>
  );
}

export default App;
