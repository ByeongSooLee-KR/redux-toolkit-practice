import React from 'react';
import { Counter } from './features/counter/Counter';
import { Todos } from './features/todos/Todos';
import { Recipe } from './features/recipes/Recipe';

import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Redux Toolkit Practice</h1>
      <Counter />
      <Todos />
      <Recipe />
    </div>
  );
}

export default App;
