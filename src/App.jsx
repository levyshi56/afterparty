import './App.css'
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BeRealPage from './modules/beReal.jsx';
import EventPage from './modules/eventPage.jsx';
import HomePage from './modules/homePage.jsx';

export default function App() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/event/:eventId/person/:personId" element={<BeRealPage />} />
          <Route path="/event/:eventId" element={<EventPage />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}