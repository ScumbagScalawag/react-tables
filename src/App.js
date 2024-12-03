import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';

function App() {
  return (
    <>
      {/* <div className="App"> */}
      {/*   <header className="App-header"> */}
      {/*   </header> */}
      {/* </div> */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
