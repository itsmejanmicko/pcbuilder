import React from 'react';
import { ROUTES } from './config/configRoutes';
import { Route, Routes } from 'react-router-dom';

 const App: React.FC = () => {
  return (
   <Routes>
      {Object.values(ROUTES).map((route)=>(
        <Route key = {route.id} path = {route.path} element = {<route.component/>} />
      ))}
   </Routes>
  );
}
export default App;