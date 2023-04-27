import React from 'react';
import {useTypedSelector} from "@hooks/useTypedSelector";
import VacancyElement from "@pages/vacancies/components/vacancyList/VacancyElement";
import PageManager from "@pages/vacancies/components/pageManager";

const VacancyList = () => {
  const {vacancies} = useTypedSelector((state) => state.vacancies);

  return (
    <>
      {
        vacancies && vacancies.length === 0
          ? <div className={'mt-1 md:mt-2 font-light'}>No vacancies found.</div>
          : <>
            <div className={'mt-1 md:mt-2 grid grid-cols-1 gap-2'}>
              {
                vacancies && vacancies.map((vacancy, index) => {
                  return <VacancyElement
                    key={vacancy.ID}
                    vacancy={vacancy}
                    divide={index + 1 !== vacancies.length}/>
                })
              }
            </div>
            <div className={'mt-8 mb-4'}>
              <PageManager />
            </div>
          </>
      }
    </>
  );
};

export default VacancyList;