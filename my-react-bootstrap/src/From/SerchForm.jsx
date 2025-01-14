import { useEffect, useState } from "react";
import { toast } from "react-toastify";

function SerchForm() {
  const [item, setItem] = useState("");
  const [arrItem, setArrItem] = useState([]);
  const [indexData, setIndexData] = useState(null);

  useEffect(() => {
    let loadDate = localStorage.getItem("items");
    if (loadDate) {
      setArrItem(JSON.parse(loadDate));
    }
  }, []);
  const handlerSubmit = (e) => {
    e.preventDefault();
    if (indexData != null) {
      let newData = arrItem.map((e,i) => i === indexData?item:e)
      localStorage.setItem("Items", JSON.stringify(newData));
      setItem("");
      setArrItem(newData);
      setIndexData(null);
      toast.success("Update Success!...",{
        position:"bottom-right",
        theme:"dark",
        draggable:true
      })
    }
    else{
      
    let newData = [...arrItem, item];
    localStorage.setItem("Items", JSON.stringify(newData));
    setArrItem(newData);
    setItem("");
    toast.success("Add Success!...",{
      position:"bottom-right",
      theme:"colored",
      draggable:true
    })
    }
  };

  const EditData = (i) => {
    setItem(arrItem[i]);
    setIndexData(i)
  };

  const DeleteData = (i) =>{
    let deleteData = arrItem.filter((_,index)=> i != index)
    localStorage.setItem('Items',JSON.stringify(deleteData))
    setArrItem(deleteData)
    toast.success("Delete Success!...",{
      position:"bottom-right",
      theme:"colored",
      draggable:true
    })

  }

  return (
    <div className="container-fluid d-flex justify-content-center ">
      <div
        className="conatiner shadow rounded-2 "
        style={{ width: "500px", height: "300px" }}
      >
        {/*  */}
        <h1 className="text-center fs-3 pt-2">Todo List</h1>
        <form
          onSubmit={handlerSubmit}
          className="text-center  d-flex justify-content-center"
        >
          <input
            onChange={(e) => setItem(e.target.value)}
            value={item}
            type="text"
            className="form-control w-75 shadow-none border-1"
            placeholder="add items to list"
          />
          <button className="btn border-0">
            <i className="bi bi-patch-plus"></i>
          </button>
        </form>
        <hr className="mx-4" />

        <div className="overflow-y-scroll " style={{ maxHeight: 150 }}>
          {arrItem.map((e, i) => {
            return (
              <div
                key={i}
                className="d-flex mx-5 mt-3 justify-content-between align-items-center border rounded-2"
              >
                <p className="m-2">{e}</p>
                <div className="">
                  <button
                    className="btn border-0 p-0"
                    onClick={() => {
                      EditData(i);
                    }}
                  >
                    <i className="bi bi-pencil-square"></i>
                  </button>
                  <button className="btn border-0 " onClick={()=>{DeleteData(i)}}>
                    <i className="bi bi-trash"></i>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default SerchForm;
