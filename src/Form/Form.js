import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Form.css";

const Form = ({formList,setFormList}) => {
  const [id]= useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");

const navigate =useNavigate();
  const addForm = (event) => {
  event.preventDefault();
    const newForm = {
      id:id,
      name:name,
     email:email,
      content:content,
    };
    setFormList([...formList, newForm]);
    navigate("/");
  };
  return (
    <>
    
      <form className="form-container">
      <h2 className="text-center my-5">Form</h2>
        <div className="container">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="Input"
              placeholder="Name"
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              id="Input2"
              placeholder="Email"
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className="form-group">
            <textarea className="form-control" id="Textarea" rows="3" placeholder="Write something about you..." onChange={(event) => setContent(event.target.value)}></textarea>
          </div>
        </div>
        <div className="c-3">
          <button className="btn btn-primary create-btn" onClick={addForm}>
            Submit
          </button>
        </div>
      </form>
    </>
   
  );
};

export default Form;
