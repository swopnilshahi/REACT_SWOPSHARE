import React from 'react'
import {Routes,Route, useNavigate} from 'react-router-dom';

import Login from '../../swop_frontend/src/components/Login';
import Home from '../../swop_frontend/src/container/Home';

function App() {
  return (
   <Routes>
    <Route path='login' element={<Login />}/>
    <Route path='/*' element={<Home />}/>

   </Routes>
  );
}

export default App;
