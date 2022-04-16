import axios from "axios";
import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router";
import { toast } from "react-toastify";

const AddPost = ({ datas, addData }) => {
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [population, setPopulation] = useState("");

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!city || !country || !population) {
      return toast.warning("Please fill in all fields!!");
    }

    const data = {
      id: datas.length > 0 ? datas[datas.length - 1].id + 1 : 0,
      city,
      country,
      population,
    };

    axios.post("http://localhost:8080/datas", data);
    addData(data);
    history.push("/");
  };

  return (
    <div className="container-fluid">
      <h1 className="text-center text-dark py-3 display-2">Add Data From here</h1>
      <div className="row">
        <div className="col-md-6 p-5 mx-auto shadow">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                placeholder="Enter Country Name"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                placeholder="City"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="number"
                placeholder="Population"
                value={population}
                onChange={(e) => setPopulation(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                className="btn btn-block btn-dark"
                type="submit"
                value="Add Country Data"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  datas: state,
});
const mapDispatchToProps = (dispatch) => ({
  addData: (data) => {
    dispatch({ type: "ADD_DATA", payload: data });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AddPost);
