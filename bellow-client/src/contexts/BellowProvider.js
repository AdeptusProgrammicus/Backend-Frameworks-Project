import axios from "axios";
import { useEffect, useState } from "react";
import BellowContext from "./BellowContext";

export const BellowProvider = (props) => {
  const [bellow, setBellow] = useState([]);
  const baseUrl = "http://localhost:3000/api/bellow/";

  useEffect(() => {
    async function fetchData() {
      await getAllBellows();
    }
    fetchData();
  }, []);

  function getAllBellows() {
    return axios.get(baseUrl).then((response) => setBellow(response.data));
  }

  function getBellow(_id) {
    return axios.get(baseUrl + _id).then((response) => {
      getAllBellows();
      return new Promise((resolve) => resolve(response.data));
    });
  }

  function addBellow(bellow) {
    let myHeaders = {
      Authorization: `Bearer ${localStorage.getItem("myBellowToken")}`,
    };

    return axios
      .post(baseUrl, bellow, { headers: myHeaders })
      .then((response) => {
        getAllBellows();
        return new Promise((resolve) => resolve(response.data));
      });
  }

  function editBellow(bellow) {
    let myHeaders = {
      Authorization: `Bearer ${localStorage.getItem("myBellowToken")}`,
    };
    return axios
      .put(baseUrl + bellow._id, bellow, { headers: myHeaders })
      .then((response) => {
        getAllBellows();
        return new Promise((resolve) => resolve(response.data));
      });
  }

  function deleteBellow(_id) {
    let myHeaders = {
      Authorization: `Bearer ${localStorage.getItem("myBellowToken")}`,
    };
    return axios
      .delete(baseUrl + _id, { headers: myHeaders })
      .then((response) => {
        getAllBellows();
        return new Promise((resolve) => resolve(response.data));
      });
  }

  return (
    <BellowContext.Provider
      value={{
        bellow,
        getBellow,
        addBellow,
        editBellow,
        deleteBellow,
      }}
    >
      {props.children}
    </BellowContext.Provider>
  );
};
