import React, { useContext, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BellowContext from "../contexts/BellowContext";

const EditBellow = () => {
  let params = useParams();
  let navigate = useNavigate();

  let [bellow, setBellow] = useState({
    _id: params.id,
    firstName: "",
    lastName: "",
    message: "",
    city: "",
    state: "",
  });

  let { getBellow, editBellow } = useContext(BellowContext);
  let { _id, message, firstName, lastName, city, state } = bellow;

  useEffect(() => {
    if (_id === undefined) return;
    async function fetch() {
      await getBellow(_id).then((bellow) => setBellow(bellow));
    }
    fetch();
  }, []);

  function handleChange(event) {
    setBellow((prevValue) => {
      return { ...prevValue, [event.target.name]: event.target.value };
    });
  }

  function handleEdit() {
    return editBellow(bellow);
  }

  function handleSubmit(event) {
    event.preventDefault();
    handleEdit(bellow)
      .then(() => {
        if (!bellow.ok) {
          alert(`${bellow.name} is updated!`);
          navigate("/bellow");
        }
        if (!bellow.ok) {
          alert(`${bellow.message} is updated!`);
          navigate("/bellow");
        }
      })
      .catch((error) => {
        console.error("There was an error!", error);
        alert("You are not allowed to perform this operation.");
        navigate("/signIn");
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Edit Bellow</h1>
      <span>First Name </span>
      <input
        placeholder="Enter First Name"
        type="text"
        name="firstName"
        value={firstName}
        onChange={handleChange}
      />
      <br></br>
      <br></br>
      <span>Last Name </span>
      <input
        placeholder="Enter First Name"
        type="text"
        name="lastName"
        value={lastName}
        onChange={handleChange}
      />
      <br></br>
      <br></br>
      <span>Bellows </span>
      <input
        placeholder="Enter bellow"
        type="text"
        name="message"
        value={message}
        onChange={handleChange}
      />
      <br></br>
      <br></br>
      <span>City </span>
      <input
        placeholder="Enter City"
        type="text"
        name="city"
        value={city}
        onChange={handleChange}
      />
      <br></br>
      <br></br>
      <span>State </span>
      <input
        placeholder="Enter State"
        type="text"
        name="state"
        value={state}
        onChange={handleChange}
      />
      <br></br>
      <br></br>
      <button>Update</button>
    </form>
  );
};

export default EditBellow;
