import React, { useContext } from "react";
import BellowContext from "../contexts/BellowContext";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./BellowList.css";

const BellowList = () => {
  let navigate = useNavigate();
  let { deleteBellow } = useContext(BellowContext);
  function handleDelete(_id) {
    deleteBellow(_id)
      .then(() => {
        navigate("/bellow");
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
            <h1>Bellow Feed</h1>
            <Link to="/bellow/new">Add New Bellow</Link>
            {console.log(bellow)}
            <div>
              {bellow.map((b) => {
                return (
                  <div className="postBorder" key={b.id}>
                    <strong>
                      <p>{b.message}</p>
                    </strong>
                    <p>
                      {b.firstName} {b.lastName}, {b.createdAt}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        );
      }}
    </BellowContext.Consumer>
  );
};

export default BellowList;
