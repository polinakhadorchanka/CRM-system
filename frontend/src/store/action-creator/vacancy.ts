import {Dispatch} from "react";
import {VACANCY_ACTION_TYPE, VacancyAction} from "@store/types/vacancy";
import {vacancies} from "@assets/json/vacancies";

export const fetchVacancy = (ID: number) => {
  return async (dispatch: Dispatch<VacancyAction>) => {
    try {
      // TODO: Запрос на сервер (вакансия по ID)
      const data = vacancies.filter(vacancy => vacancy.ID === ID);

      if(data.length > 0) {
        dispatch({
          type: VACANCY_ACTION_TYPE.GET_VACANCY,
          payload: data[0]
        })
      }
      else {
        dispatch({
          type: VACANCY_ACTION_TYPE.GET_ERROR,
          payload: {
            Code: 404,
            Value: 'Page not found'
          }
        })
      }
    }
    catch (error) {
      dispatch({
        type: VACANCY_ACTION_TYPE.GET_ERROR,
        payload: {
          Code: 1000,
          Value: 'Не удалось получить данные'
        }
      })
    }
  }
}