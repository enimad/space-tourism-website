import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PublicRouteur from './Pages/PublicRouter';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<PublicRouteur />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;