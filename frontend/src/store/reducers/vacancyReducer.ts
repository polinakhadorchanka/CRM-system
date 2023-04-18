import {VACANCY_ACTION_TYPE, VacancyAction, VacancyState} from "@store/types/vacancy";

const initialState: VacancyState = {
  vacancy: null,
  error: null
}

export const vacancyReducer = (state = initialState, action: VacancyAction):VacancyState => {
  switch (action.type) {
    case VACANCY_ACTION_TYPE.GET_VACANCY:
      return {
        ...state,
        vacancy: action.payload,
        error: null
      }
    case VACANCY_ACTION_TYPE.GET_ERROR:
      return {
        ...state,
        error: action.payload
      }
    default:
      return state;
  }
}