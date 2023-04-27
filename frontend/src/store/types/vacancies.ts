import {IVacancyShort} from "@store/types/vacancy";
import {IError} from "@store/types/error";

export interface VacanciesState {
  vacancies: IVacancyShort[] | null;
  pageCount: number | null;
  error: IError | null;
}

export enum VACANCIES_ACTION_TYPE {
  GET_VACANCIES = 'GET_VACANCIES',
  SET_CURRENT_PAGE = 'SET_CURRENT_PAGE',
  GET_ERROR = 'GET_VACANCIES_ERROR'
}

interface GetVacanciesAction {
  type: VACANCIES_ACTION_TYPE.GET_VACANCIES,
  payload: {
    vacancies: IVacancyShort[],
    pageCount: number
  }
}

interface GetErrorAction {
  type: VACANCIES_ACTION_TYPE.GET_ERROR,
  payload: IError
}

export type VacanciesAction =
  | GetVacanciesAction
  | GetErrorAction;