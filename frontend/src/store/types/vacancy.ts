import {IError} from "@store/types/error";

export interface IVacancyShort {
  ID: number;
  Name: string;
  Posted: string | null;
  CompanyName: string;
}

export interface IVacancy {
  ID: number;
  Name: string;
  URL: string;
  Location: string | null;
  Salary: string | null;
  Description: string | null;
  Posted: string | null;
  Company: ICompany;
}

export interface ICompany {
  ID: number;
  Name: string;
  URL: string;
  Logo: string | null;
  LinkedIn: string | null;
}

export interface VacancyState {
  vacancy: IVacancy | null;
  error: IError | null;
}

export enum VACANCY_ACTION_TYPE {
  GET_VACANCY = 'GET_VACANCY',
  GET_ERROR = 'GET_VACANCY_ERROR'
}

interface GetVacancyAction {
  type: VACANCY_ACTION_TYPE.GET_VACANCY;
  payload: IVacancy;
}

interface GetErrorAction {
  type: VACANCY_ACTION_TYPE.GET_ERROR;
  payload: IError;
}

export type VacancyAction =
  | GetVacancyAction
  | GetErrorAction;