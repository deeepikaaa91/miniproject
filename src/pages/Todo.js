import axios from "axios";
import React, { useEffect, useState } from "react";

function Todo() {
  useEffect(() => {
    getData();
  }, []);
  const [StudentObj, setStudentObj] = useState("");
  const [stuList, setStuList] = useState([]);
  const postdata = () => {
    axios.post("http://localhost:5001/api/todo", StudentObj).then((res) => {
      alert("successfullty");
      setStudentObj({ name: "", gender: "", mobile: "" });
    });
  };
  const getData = () => {
    axios
      .get("http://localhost:5001/api/todo")
      .then((res) => setStuList(res.data.data));
    setStudentObj({ name: "", gender: "", mobile: "" });
  };

  const deleteFn = (id) => {
    axios.delete("http://localhost:5001/api/todo/" + "66601dae5751d58ee19a855c").then(() => {
      alert("succssefully deleted");
      getData();
    });
  };

  const editFn = ()=>{
    axios.putForm("http://localhost:5001/api/todo/" +"id",StudentObj).then(()=>{
      alert("successfully Edit");getData();})
  }

  return (
    <div className="h-[100vh] w-[100%] flex flex-col  gap-1 justify-center items-center border ">
      <div className="h-[20vh] w-[100%] flex  gap-1 items-center justify-center ">
        {JSON.stringify(StudentObj)}
        <input
          value={StudentObj.name}
          onChange={(e) =>
            setStudentObj({ ...StudentObj, name: e.target.value })
          }
          placeholder="Name"
          className="h-[5vh] w-[20%] border border-black pl-[10px]"
        ></input>
        <input
          value={StudentObj.gender}
          name="gender"
          onChange={() => setStudentObj({ ...StudentObj, gender: "male" })}
          type="radio"
          className="h-[3vh] w-[5%] border border-black"
        ></input>
        <label>male</label>
        <input
          value={StudentObj.gender}
          name="gender"
          onChange={() => setStudentObj({ ...StudentObj, gender: "female" })}
          type="radio"
          className="h-[3vh] w-[5%] border border-black "
        ></input>
        <label>female</label>
        <input
          value={StudentObj.mobile}
          onChange={(e) =>
            setStudentObj({ ...StudentObj, mobile: e.target.value })
          }
          placeholder="Mobile"
          className="h-[5vh] w-[20%] border border-black pl-[10px]"
        ></input>
        <button
          onClick={() => postdata()}
          className="h-[5vh] w-[10%] border border-black"
        >
          Submit
        </button>
      </div>
      <div className="w-[50%] flex items-center justify-cen">
        <table >
          <thead >
            <th>S no.</th>
            <th>name.</th>
            <th>gender</th>
            <th>mobile</th>
            <th>Action</th>
          </thead>
          <tbody>
            {stuList.map((i, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{i.name}</td>
                <td>{i.gender}</td>
                <td>{i.mobile}</td>
                <td className=" h-[5vh] w-[100%] flex items-center gap-3">
                  <button onClick={()=>editFn(i._id)} className="w-[100%] h-[4vh] bg-black text-white">
                    Edit
                  </button>
                  <button
                    onClick={() => deleteFn(i._id)}
                    className="w-[100%] h-[4vh] bg-black text-white"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Todo;
