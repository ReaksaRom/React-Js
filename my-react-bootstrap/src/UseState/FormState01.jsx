import React, { useState } from "react";

function FormState01() {
  // input task and setTask
  const [task, setTask] = useState("");

  //input image and setImage
  const [image, setImage] = useState("");

  // input description and setDescription
  const [description, setDescription] = useState("");

  // input price and setPrice
  const [price, setPrice] = useState("");

  // input data into array and setArray
  const [arr, setArr] = useState([]);

  // check message when we want to edit
  const [isEditing, setIsEditing] = useState(false);

  // use to update data
  const [editIndex, setEditIndex] = useState(null);


  // ========================================================
  const submitDate = (e) => {
    e.preventDefault();
    const newItem = { task, image, description, price };
    
    if (isEditing) {
      const updatedTasks = arr.map((item, index) => (index === editIndex ? newItem : item));
      setArr(updatedTasks);
      setIsEditing(false);
      setEditIndex(null);
    } else {
        setArr([...arr, newItem]);
    
      
    }

    setTask("");
    setImage("");
    setDescription("");
    setPrice("");
  };
// ================================================================

  const btnEdite = (index) => {
    const item = arr[index];
    setTask(item.task);
    setImage(item.image);
    setDescription(item.description);
    setPrice(item.price);
    setIsEditing(true);
    setEditIndex(index);
  };
// ================================================================
  const btnDelete = (index) => {
    const filteredArr = arr.filter((_, i) => i !== index);
    setArr(filteredArr);
  };
// =================================================================
  return (
    <div>
      {/* form input */}
      <form onSubmit={submitDate} className="d-flex flex-column" style={{ gap: "10px" }}>
        {/* input  task */}
        <input
          type="text"
          className="form-control"
          onChange={(e) => setTask(e.target.value)}
          value={task}
          placeholder={isEditing ? "Edit task" : "Enter task"}
        />
        {/* input image url */}
        <input
          type="text"
          className="form-control"
          onChange={(e) => setImage(e.target.value)}
          value={image}
          placeholder="Enter image URL"
        />
        {/* input description */}
        <textarea
          className="form-control"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          placeholder="Enter description"
        ></textarea>
        {/* input price */}
        <input
          type="number"
          className="form-control"
          onChange={(e) => setPrice(e.target.value)}
          value={price}
          placeholder="Enter price"
        />
        <button className="btn btn-primary">{isEditing ? "Update" : "Submit"}</button>
      </form>

      {/* form submit data*/}
      <br />
      <div className="card-container">
        {arr.map((item, index) => {
          return (
            <div key={index} className="card" style={{ margin: "10px", padding: "10px", border: "1px solid #ccc", borderRadius: "5px" }}>
              <div><strong>Task:</strong> {item.task}</div>
              {item.image && <img src={item.image} alt="Task" style={{ maxWidth: "100px", display: "block", margin: "10px 0" }} />}
              <div><strong>Description:</strong> {item.description}</div>
              <div><strong>Price:</strong> ${item.price}</div>
              <div style={{ marginTop: "10px" }}>
                <button onClick={() => btnEdite(index)} style={{ marginRight: "5px" }} className="btn btn-secondary">Edit</button>
                <button onClick={() => btnDelete(index)} className="btn btn-danger">Delete</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FormState01;
