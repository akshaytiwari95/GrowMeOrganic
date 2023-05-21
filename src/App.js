import './App.css';
import { Routes, Route } from 'react-router-dom';
import Userlogin from './components/Userlogin';
import Page from './components/page2';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Userlogin />} />
      <Route path="page" element={<Page />} />
    </Routes>
  );
}

export default App;
