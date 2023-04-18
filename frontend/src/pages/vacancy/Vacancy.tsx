import React, {useEffect} from 'react';
import {useTypedSelector} from "@hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import {fetchVacancy} from "@store/action-creator/vacancy";
import {useParams} from "react-router-dom";
import Error from "@pages/error";

const Vacancy = () => {
  const dispatch: any = useDispatch();
  const {id} = useParams();
  const {vacancy, error} = useTypedSelector((state) => state.vacancy);

  useEffect(() => {
    if (id && !isNaN(Number(id))) dispatch(fetchVacancy(Number(id)));
  }, []);

  return (
    <>
      {error
        ? <Error code={error.Code} value={error.Value}/>
        : <div>{JSON.stringify(vacancy)}</div>
      }
    </>
  );
};

export default Vacancy;