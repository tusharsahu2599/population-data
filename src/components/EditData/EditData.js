import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useHistory, useParams } from "react-router";
import { toast } from "react-toastify";

const EditData = ({ datas, updateData }) => {
  const { id } = useParams();
  const history = useHistory();
  const currentData = datas.find(
    (data) => data.id === parseInt(id)
  );

  useEffect(() => {
    setCountry(currentData.country);
    setCity(currentData.city);
    setPopulation(currentData.population);
  }, [currentData]);

  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [population, setPopulation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  

    if (!country || !city || !population) {
      return toast.warning("Please fill in all fields!!");
    }

    const data = {
      id: currentData.id,
      country,
      city,
      population,
    };

    updateData(data);
    history.push("/");
  };

  return (
    <div className="container">
      <div className="row d-flex flex-column">
        <button
          className="btn btn-dark ml-auto my-5"
          onClick={() => history.push("/")}
        >
          Go back
        </button>
        <div className="col-md-6 mx-auto shadow p-5">
          {currentData ? (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  className="form-control"
                  value={country}
                  placeholder={"Country"}
                  onChange={(e) => setCountry(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  value={city}
                  placeholder={"City"}
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  value={population}
                  placeholder={"Population"}
                  onChange={(e) => setPopulation(e.target.value)}
                />
              </div>
              <div className="form-group d-flex align-items-center justify-content-between my-2">
                <button type="submit" className="btn btn-primary">
                  Update Data
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => history.push("/")}
                >
                  cancel
                </button>
              </div>
            </form>
          ) : (
            <h1 className="text-center">No Country data Found</h1>
          )}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  datas: state,
});
const mapDispatchToProps = (dispatch) => ({
  updateData: (data) => {
    dispatch({ type: "UPDATE_DATA", payload: data });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(EditData);
