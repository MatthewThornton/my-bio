import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Home from "./components/Home";
import Header from "./components/Header";
import TicTacToe from './components/TicTacToe';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="tick-tac-toe" element={<TicTacToe/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
