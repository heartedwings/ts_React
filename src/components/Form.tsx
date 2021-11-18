import React, { useState } from "react";

export const Form: React.VFC = () => {
  const
  [title, setTitle] = useState(""),
  [details, setDetails] = useState("");

  // Titleフォームの状態の制御
  const inputTitle = (e: any) => {
    setTitle(e.target.value);
  };
  // Detailsフォームの状態の制御
  const inputDetails = (e: any) => {
    setDetails(e.target.value);
  };


  const addTodo = (e: any) => {
    e.preventDefault();
    console.log(title);
    console.log(details);
  };

  return (
    <div>
      <div>
        <div>
          <span>Title</span>
        </div>
        <input
          type="text"
          onChange={inputTitle}
          value={title}
        />
      </div>
      <div>
        <div>
          <span>Detail</span>
        </div>
        <textarea
          onChange={inputDetails}
          value={details}
        ></textarea>
      </div>
      <div>
        <button onClick={addTodo}>
          ADD
        </button>
      </div>

      {/* <div>{setTodos}</div> */}
    </div>
  );
};
