import  React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo } from "../actions";



type textType = any;
const todosSelector = (state:any) => {
  console.log(state.StoreState);
  return state.StoreState;
}

//関数コンポーネントの型定義にはReact.VFCという型を用います。
// VFCはVoid Function Componentの略です。
export const App: React.VFC = () => {

  const dispatch = useDispatch ()
  const todoList = useSelector ( todosSelector )
  console.log(todoList);
  

  // 一つのtodo
  const [text, setText] = useState<textType>("");
  // const [todo, setTodo] = useState<textType>("");

  // todoリスト
  const [todoL, setTodoL] = useState<textType>(todoList);
  // const [todoList, setTodoList] = useState<textType>(todoList);
  console.log(todoL);
  

   //入力したイベントの値を取ってくる (event)
   const inputText = (e:any) => {
    setText(e.target.value);
    console.log(e.target.value);
  };

  // const inputTodoL = () => {
  //   setTodoL((todoL:any) => [...todoL, {text:text}]);
  //   console.log (todoL);
  // };


    //送信した時の処理 (event)
    const addAction = () => {
      // 入力が空だったら何もしない
      if (text === "") return;

      setTodoL((todoL:any) => [...todoL, {text:text}]);
      console.log (todoL);
  
      //dispatch actionオブジェクト
      dispatch(addTodo(text))
      console.log(text);      
      console.log(todoList);
      

      //入力後　からにする
      setText("");
    };

  const deleteAction = (index:any) => {
    dispatch(deleteTodo(index))
  };



    const setTodo = todoL.map(( todo:any, index:any ) => {
    return (
      <div key={index}>
        <span>{todo.text}</span>

        <span>
          <button onClick={() => deleteAction(index)}>削除</button>
        </span>
      </div>
    );
  });


    return (
      <div>
         <h1>Todoリスト</h1>
         
         <div>{setTodo}</div>

         <div>
        <label htmlFor="comment">コメント : </label>
        <input
          onChange={inputText}
          value={text}
          type="text"
          id="comment"
          placeholder="ToDoの入力"
        ></input>
        <button onClick={ addAction }>追加</button>
        <div>{text}</div>
      </div>
      </div>

      
    )
};

