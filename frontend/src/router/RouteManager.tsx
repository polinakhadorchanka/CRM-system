import React from 'react';
import { Route, Routes } from "react-router-dom";
import Vacancies from "@pages//vacancies/Vacancies";
import Vacancy from "@pages/vacancy/Vacancy";
import Error from "@pages/error";

const RouteManager = () => {
  return (
    <Routes>
      <Route path={'/'} element={<Vacancies />} />
      <Route path={'/vacancy/:id'} element={<Vacancy />} />
      <Route path="*" element={<Error  code={404} value={'Page not found'}/>} />
    </Routes>
  );
};

export default RouteManager;