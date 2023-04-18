import React from 'react';
import { Route, Routes } from "react-router-dom";
import Vacancies from "@pages//vacancies/Vacancies";
import Vacancy from "@pages/vacancy/Vacancy";
import NotFound from "@pages/404";

const RouteManager = () => {
  return (
    <Routes>
      <Route path={'/'} element={<Vacancies />} />
      <Route path={'/vacancy/:id'} element={<Vacancy />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default RouteManager;