import {IVacancyShort} from "@store/types/vacancy";
import {IError} from "@store/types/error";

export interface VacanciesState {
  vacancies: IVacancyShort[] | null;
  pageCount: number | null;
  error: IError | null;
}

export enum VACANCIES_ACTION_TYPE {
  GET_VACANCIES = 'GET_VACANCIES',
  GET_ERROR = 'GET_VACANCIES_ERROR',
  CLEAN_VACANCIES_STATE = 'CLEAN_VACANCIES_STATE'
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

interface CleanStateAction {
  type: VACANCIES_ACTION_TYPE.CLEAN_VACANCIES_STATE
}

export type VacanciesAction =
  | GetVacanciesAction
  | GetErrorAction
  | CleanStateAction;