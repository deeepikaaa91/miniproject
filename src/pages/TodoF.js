import React, { useState } from "react";

function TodoF() {
  const [list, setList] = useState([]);
  const [task, setTask] = useState("");
  const [indexe, setIndexe] = useState("");
  return (
    <div className="flex flex-col  h-[100vh] justify-center items-center">
      <div className=" h-[20vh] flex justify-center items-center gap-3">
        <div>{JSON.stringify(list)}</div>
        <div>{JSON.stringify(task)}</div>
        <input
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="h-[5vh] w-[70%] pl-[10px] border border-black"
          placeholder="enter the name"
        ></input>
        <button
          onClick={() => {
            setList([...list, task]);
            setTask("");
          }}
          className="h-[5vh] w-[40%] bg-black text-white"
        >
          Submit
        </button>
        <button
          onClick={() => {
            setList([...list.filter((i,index)=>index!=indexe),task])
          }}
          className="h-[5vh] w-[40%] bg-black text-white"
        >
          Updates
        </button>

        {/* <button onClick={()=>setList([...list.filter((i,index)=>index!=indexe),task])} className='h-[5vh] w-[40%] bg-black text-white'>Updates</button>  */}
      </div>
        <div>
        <table>
          <thead>
            <th>S no.</th>
            <th>name</th>
            <th>Delete</th>
            <th>Edit</th>
          </thead>
          <tbody>
            {list.map((i, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{i}</td>
                <td onClick={() => setList(list.filter((j) => i != j))}>
                  Delete
                </td>
                <td
                  onClick={() => {
                    setTask(i);
                    setIndexe(indexe);
                  }}
                >
                  Edit
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TodoF;
