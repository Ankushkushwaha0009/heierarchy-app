import React, { useState } from 'react';
import "./App.css";

function App() {

  const [selectedNodeType, setSelectedNodeType] = useState("singleNode");
  const [data , newdata]  = useState("") ; 

  const handleNodeTypeChange = (event) => {
    setSelectedNodeType(event.target.value);
  };

  return (
    <div className="container">
      <h1>{data}</h1>
      <label htmlFor="nodetype"> Node Type </label>
      <select name="nodetype" id="nodetype" onChange={handleNodeTypeChange} value={selectedNodeType}>
        <option value="singleNode">SingleNode</option>
        <option value="ParentNode">ParentNode</option>
        <option value="ChildNode">ChildNode</option>
      </select>

      <label> Selected Node </label>
      <input type="text" placeholder="Node Name" onChange={e => newdata(e.target.value)} value={data}/>
      <button> Update </button>
      <button> Delete </button>

      <h2> Node value</h2>
      <input type="text" placeholder="write node value here " />
      <button> Add Node </button>
    </div>
  );
}

export default App;
