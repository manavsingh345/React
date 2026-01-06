import { useState } from 'react';
import { BrowserRouter, Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import Layout from './Layout.jsx';
import Class11Program from "./Class11Program.jsx";
import Class12Program from "./Class12Program.jsx";
import LandingPage from "./LandingPage.jsx";
import ErrorPage from "./ErrorPage.jsx";
import './App.css'

function App() {
  return (
    <div>

      <BrowserRouter>

        <Routes>
          <Route path="/neet" element={<Layout />}>
            <Route path="/neet/online-coaching-class-11" element={<Class11Program />} />
            <Route path="/neet/online-coaching-class-12" element={<Class12Program />} />
            <Route path="/neet" element={<LandingPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}



export default App
