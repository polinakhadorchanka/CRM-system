import { combineReducers } from "redux";
import {vacancyReducer} from "@store/reducers/vacancyReducer";
import {vacanciesReducer} from "@store/reducers/vacanciesReducer";

export const rootReducer = combineReducers({
  vacancy: vacancyReducer,
  vacancies: vacanciesReducer
});

export type RootState = ReturnType<typeof rootReducer>;