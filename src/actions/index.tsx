// export const addaction = () => {
//     return {
//         type:タイプ名
//     }
// }

// 1: Action Types を定義
export const ADDTODO = 'addTodo';
export const DELETETODO = 'deleteTodo';

// 2: Action Creatorsを定義
export const addTodo = (text: string) => {
  return {
    type: ADDTODO,
    text: text
  };
};
export const deleteTodo= (index: number) => {
  return {
    type: DELETETODO,
    index: index
  };
};
