
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Route1Container, Route2Container } from './Router';

function App() {
    return (
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Route1Container/>} exact />
        <Route path="/we" element={<Route2Container/>} exact />
        </Routes>
      </BrowserRouter>
    );
}

export default App;
