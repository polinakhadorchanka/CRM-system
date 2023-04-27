import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {fetchVacancies} from "@store/action-creator/vacancies";
import {useTypedSelector} from "@hooks/useTypedSelector";
import Error from "@pages/error";
import PageLayout from "@layout/PageLayout";
import VacancyList from "@pages/vacancies/components/vacancyList";
import {useParams} from "react-router-dom";

const Vacancies = () => {
  const dispatch: any = useDispatch();

  const {page} = useParams();
  const {vacancies, pageCount, error} = useTypedSelector((state) => state.vacancies);

  useEffect(() => {
    dispatch(fetchVacancies(Number(page)));
  }, [dispatch, page]);

  return (
    <>
      {error
        ? <Error code={error.Code} value={error.Value}/>
        : vacancies &&
        <PageLayout>
          <div>
            <h1 className={'uppercase font-light text-gray-500 dark:text-gray-400 text-xl sm:text-2xl lg:text-3xl'}>
              Vacancies
            </h1>
            <div>
              <VacancyList />
            </div>
          </div>
        </PageLayout>
      }
    </>
  );
};

export default Vacancies;