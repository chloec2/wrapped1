import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Wrapped from './components/Wrapped';
import { useState } from 'react';
import Login from './components/Login';

function App() {
  const [categories, setCategories] = useState(["Home", "Food"]);
  const addCategory = (c) => { 
    setCategories(c)
  }
  
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<Login />}></Route>
          <Route path="/dashboard" element={<Dashboard categories={categories} onCategoryAdded={addCategory} />}></Route>
          <Route path="/wrapped" element={<Wrapped/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;