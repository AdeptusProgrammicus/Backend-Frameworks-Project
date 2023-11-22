import React, { useContext } from "react";
import BellowContext from "../contexts/BellowContext";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./UserProfile.css";

const UserProfile = () => {
  let navigate = useNavigate();
  let { deleteBellow } = useContext(BellowContext);
  function handleDelete(_id) {
    deleteBellow(_id)
      .then(() => {
        navigate("/profile");
      })
      .catch((error) => {
        console.log(error);
        window.alert("You are not authorized to perform this operation.");
        navigate("/signin");
      });
  }
  return (
    <BellowContext.Consumer>
      {({ bellow }) => {
        return (
          <div>
            <h1>User Profile:</h1>
            {bellow.map((b) => {
              return (
                <div key={b.id}>
                  <strong>
                    Name: {b.firstName} {b.lastName}
                  </strong>
                  <br></br>
                  <br></br>
                  <strong>
                    Location: {b.city}, {b.state}
                  </strong>
                  <br></br>
                  <br></br>
                  <strong>Profile Created: {b.updatedAt}</strong>
                  <br></br>
                  <br></br>
                  <h3>Bellows</h3>
                  <br></br>
                  <p className="post">
                    {b.message}
                    <br></br>
                    <p>
                      {b.firstName} {b.lastName}, {b.updatedAt}
                    </p>
                    <Link to={`/bellow/edit/${b._id}`}>Edit</Link>
                    <br></br>
                    <Link
                      to={"/bellow"}
                      onClick={handleDelete.bind(this, b._id)}
                    >
                      Delete
                    </Link>
                  </p>
                </div>
              );
            })}
          </div>
        );
      }}
    </BellowContext.Consumer>
  );
};

export default UserProfile;
