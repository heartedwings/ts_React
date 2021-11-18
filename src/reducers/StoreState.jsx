// Stateを管理するStore => Actionsを受け取ったStateの変更処理をする部門を内部に持っている。
// StateとStateの更新処理 => ファイル単位のuseStateのようなもの。

import { ADDTODO, DELETETODO } from '../actions';

// 3: Reducersを定義
const initialState = [{
  text:'aaa'
}]

export const StoreState = (state = initialState, action) => {

  switch (action.type) {
    case ADDTODO:
      return {
        state,
        // text: action.text
      };

    case DELETETODO:
      const newTodos = [...state];
      newTodos.splice(action.index, 1);
      return newTodos;

    default:
      return state;
  }
}
