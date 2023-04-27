import {VACANCIES_ACTION_TYPE, VacanciesAction, VacanciesState} from "@store/types/vacancies";

const initialState: VacanciesState = {
  vacancies: null,
  pageCount: null,
  error: null
}

export const vacanciesReducer = (state = initialState, action: VacanciesAction) => {
  switch (action.type) {
    case VACANCIES_ACTION_TYPE.GET_VACANCIES:
      return {
        ...state,
        vacancies: action.payload.vacancies,
        pageCount: action.payload.pageCount,
        error: null
      }
    case VACANCIES_ACTION_TYPE.GET_ERROR:
      return {
        ...state,
        error: action.payload
      }
    case VACANCIES_ACTION_TYPE.CLEAN_VACANCIES_STATE:
      return initialState;
    default:
      return state;
  }
}