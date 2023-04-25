import {Dispatch} from "react"
import {VACANCIES_ACTION_TYPE, VacanciesAction} from "@store/types/vacancies";
import {vacancies} from "@assets/json/vacancies";
import {IVacancyShort} from "@store/types/vacancy";

;

export const fetchVacancies = (page = 1) => {
  return async (dispatch: Dispatch<VacanciesAction>) => {
    try {
      // TODO: Запрос на сервер (список вакансий)

      const COUNT = 10;
      const start = (page -1) * COUNT,
        end = start + COUNT;

      const data = vacancies.slice(start, end);
      const pageCount = Math.ceil(vacancies.length / COUNT);

      const result: IVacancyShort[] = data.map(vacancy => {
        return {
          ID: vacancy.ID,
          Name: vacancy.Name,
          Posted: vacancy.Posted,
          CompanyName: vacancy.Company.Name,
          CompanyLogo: vacancy.Company.Logo
        }
      })

      if (data) {
        dispatch({
          type: VACANCIES_ACTION_TYPE.GET_VACANCIES,
          payload: {
            vacancies: result,
            pageCount: pageCount
          }
        })
      } else {
        dispatch({
          type: VACANCIES_ACTION_TYPE.GET_ERROR,
          payload: {
            Code: 404,
            Value: 'Page not found'
          }
        })
      }
    } catch (error) {
      dispatch({
        type: VACANCIES_ACTION_TYPE.GET_ERROR,
        payload: {
          Code: 1000,
          Value: 'Не удалось получить данные'
        }
      })
    }
  }
}