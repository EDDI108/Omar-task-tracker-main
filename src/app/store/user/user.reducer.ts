import { User } from "../../models/user.model";
import { createReducer, on, Action } from "@ngrx/store";
import { UserActions } from "./user.actions";

export const initialState: User[] = [];  //Определение начального состояния хранилища для пользователей:

const userReducerFn = createReducer(
  initialState,
  on(UserActions.removeUser, (state, { userId }) =>       //- Удаление пользователя из состояния по userId
    state.filter((item) => item.userId !== userId)         //- Добавление нового пользователя с указанным именем и уникальным userId, сгенерированным с помощью Date.now()
  ),                                                        //- Замена текущего состояния пользователей на новый массив данных
                                                              
  on(UserActions.addUser, (state, { name }) => [
    ...state,
    {
      name: name,
      userId: Date.now()
    }
  ]),
  
  on(UserActions.loadData, (_, { data }) => [...data])
);

export function userReducer(state: User[] | undefined, action: Action) {       
  return userReducerFn(state, action); //Функция userReducer, которая принимает состояние хранилища пользователей и действие
}
