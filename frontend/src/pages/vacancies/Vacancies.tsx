import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {fetchVacancies} from "@store/action-creator/vacancies";
import {useTypedSelector} from "@hooks/useTypedSelector";
import Error from "@pages/error";

const Vacancies = () => {
  const dispatch: any = useDispatch();
  const {vacancies, pageCount, error} = useTypedSelector((state) => state.vacancies);

  useEffect(() => {
    dispatch(fetchVacancies(1));
  }, [dispatch]);

  return (
    <>
      {error
        ? <Error code={error.Code} value={error.Value}/>
        :
        <div>
          <div>{JSON.stringify(vacancies)}</div>
          <div>{pageCount}</div>
        </div>
      }
    </>
  );
};

export default Vacancies;