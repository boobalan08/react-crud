import "./EditUser.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const EditUser = ({ formList, setFormList }) => {
  const [user, setUser] = useState(formList);
  const navigate = useNavigate();

  useEffect(() => {
    setUser(...formList);
    console.log(...formList);
  }, [formList]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
  };

  const addForm = (event) => {
    event.preventDefault();
    //   const newForm = {
    //     id:id,
    //     name:name,
    //    email:email,
    //     content:content,
    //   };
    //   setFormList([...formList, newForm]);
    navigate("/");
  };

  return (
    <>
      <form className="form-container">
        <h2 className="text-center my-5">Update Form</h2>
        <div className="container">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="Input"
              placeholder="Name"
              name="name"
              value={user.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              id="Input2"
              placeholder="Email"
              name="email"
              value={user.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <textarea
              className="form-control"
              id="Textarea"
              rows="3"
              placeholder="Write something about you..."
              name="content"
              value={user.content}
              onChange={handleInputChange}
            ></textarea>
          </div>
        </div>
        <div className="c-3">
          <button className="btn btn-primary create-btn" onClick={addForm}>
            Update
          </button>
        </div>
      </form>
    </>
  );
};

export default EditUser;
