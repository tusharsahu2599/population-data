import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Home = ({ datas, deleteData }) => {
  return (
    <div className="container">
      <div className="row d-flex flex-column">
        <Link to="/add" className="btn btn-outline-dark my-5 ml-auto ">
          Add country data
        </Link>
        <div className="col-md-10 mx-auto my-4">
          <table className="table table-hover">
            <thead className="table-header bg-dark text-white">
              <tr>
                <th scope="col">S.No</th>
                <th scope="col">Country</th>
                <th scope="col">City</th>
                <th scope="col">Population</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {datas.length > 0 ? (
                datas.map((el, id) => (
                  <tr key={id}>
                    <td>{id + 1}</td>
                    <td>{el.country}</td>
                    <td>{el.city}</td>
                    <td>{el.population}</td>
                    <td>
                      <Link
                        to={`/edit/${el.id}`}
                        className="btn btn-sm btn-primary mr-1"
                      >
                        Edit
                      </Link>
                      <button
                        type="button"
                        onClick={() => deleteData(el.id)}
                        className="btn btn-sm btn-danger"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <th>No Country data found</th>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  datas: state,
});

const mapDispatchToProps = (dispatch) => ({
  deleteData: (id) => {
    dispatch({ type: "DELETE_DATA", payload: id });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
