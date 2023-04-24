import React from 'react';
import {useTypedSelector} from "@hooks/useTypedSelector";
import VacancyElement from "@pages/vacancies/components/vacancyList/VacancyElement";

const VacancyList = () => {
  const {vacancies, pageCount, error} = useTypedSelector((state) => state.vacancies);

  return (
    <>
      {
        vacancies?.length === 0
          ? <div className={'font-light'}>No vacancies found.</div>
          : <div className={'mt-1 md:mt-2 grid grid-cols-1 gap-2'}>
            {
              vacancies && vacancies.map((vacancy, index) => {
                return <VacancyElement
                  key={vacancy.ID}
                  vacancy={vacancy}
                  divide={index + 1 !== vacancies.length}/>
              })
            }
          </div>
      }
    </>
  );
};

export default VacancyList;