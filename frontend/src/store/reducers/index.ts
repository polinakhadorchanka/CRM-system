import { combineReducers } from "redux";
import {vacancyReducer} from "@store/reducers/vacancyReducer";

export const rootReducer = combineReducers({
  vacancy: vacancyReducer
});

export type RootState = ReturnType<typeof rootReducer>;