import React from 'react';
import { Route, Routes } from "react-router-dom";
import Vacancies from "../pages/vacancies/Vacancies";
import Vacancy from "../pages/vacancy/Vacancy";

const RouteManager = () => {
  return (
    <Routes>
      <Route path={'/'} element={<Vacancies />} />
      <Route path={'/vacancy/:id'} element={<Vacancy />} />
    </Routes>
  );
};

export default RouteManager;