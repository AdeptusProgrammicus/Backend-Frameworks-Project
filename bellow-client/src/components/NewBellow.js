import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import BellowContext from "../contexts/BellowContext";
import "./NewBellow.css";

const NewBellow = () => {
  let [newBellow, setNewBellow] = useState({
    message: "",
  });

  let { addBellow } = useContext(BellowContext);
  let navigate = useNavigate();

  function handleChange(event) {
    setNewBellow((prevValue) => {
      return { ...prevValue, [event.target.name]: event.target.value };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    addBellow(newBellow)
      .then(() => {
        navigate("/bellow");
      })
      .catch((error) => {
        console.log(error);
        navigate("/signin");
      });
  }

  return (
    <form className="border" onSubmit={handleSubmit}>
      <h1>Bellow Feed</h1>
      <input
        placeholder="New bellow"
        type="textarea"
        name="message"
        value={newBellow.message}
        onChange={handleChange}
      />
      <br></br>
      <br></br>
      <button>Post!</button>
    </form>
  );
};

export default NewBellow;
