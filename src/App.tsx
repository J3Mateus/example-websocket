import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Page1 from './page1';
import Page3 from './page3';
import Page2 from './page2';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/page/alert" element={<Page1 />} />
        <Route path="/page/list/alert" element={<Page2 />} />
        <Route path="/page/new/alert" element={<Page3 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
