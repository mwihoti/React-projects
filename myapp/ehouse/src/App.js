import React from 'react';
import {FunctionalComp, Fun1} from './components/FunctionalComp';
import Click from './components/Click';
import ClasscComp from './components/ClassComp';
import Counter from './components/Counter';
import ParentComp from './components/Parentcomp';
import Classprops from './Classprops';
import FunctionApp from './FunctionApp';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <p style={{fontSize:'10',color: 'blue', }}>GM house limited</p>
        <FunctionalComp />
        <ClasscComp />
        <Fun1 />
        <Click />
        <Counter />
        <ParentComp />
        
        
      </header>
      <div>
      <Classprops name="learner " place="pace"/>
      <FunctionApp name="props" />
      </div>
    </div>
  );
}

export default App;