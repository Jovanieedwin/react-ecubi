
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Data = () => {
  const { id } = useParams();
  console.log("sdas" + id)
  const url = `https://rickandmortyapi.com/api/character/${id}`;
  const [data, setTodos] = useState([]);
  const fetchApi = async () => {
    const response = await fetch(url)
    const responseJson = await response.json()
    setTodos(responseJson)
  }
  useEffect(() => {
    fetchApi()
  }, []);
  return (

    <div className="container mt-3">
      <div className="card">
        <h5 className="card-header">Rick And Morty Characters</h5>
        <div className="card-body">
          <div className="row">
            <div className="col-sm-3">
              <div className="card">
                <img className="card-img-top" src={data.image} alt="Card image cap" />
                <div className="card-body">
                  <table className="table table-striped">
                    <tbody>
                      <tr>
                        <th scope="row">Id</th>
                        <td>{data.id}</td>
                      </tr>
                      <tr>
                        <th scope="row">Name</th>
                        <td>{data.name}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="col-sm-9">
              <div className="card">
                <div className="card-body">
                  <table className="table table-striped">
                    <tbody>
                    <tr>
                        <th scope="row">Status</th>
                        <td>{data.status}</td>
                      </tr>
                      <tr>
                        <th scope="row">Species</th>
                        <td>{data.species}</td>
                      </tr>
                      <tr>
                        <th scope="row">Type</th>
                        <td>{data.type}</td>
                      </tr>
                      <tr>
                        <th scope="row">Gender</th>
                        <td>{data.gender}</td>
                      </tr>
                      <tr>
                        <th scope="row">Origin</th>
                        <td></td>
                      </tr>
                      <tr>
                        <th scope="row">Location</th>
                        <td>{}</td>
                      </tr>
                      <tr>
                        <th scope="row">URL</th>
                        <td>{data.url}</td>
                      </tr>
                      <tr>
                        <th scope="row">Created</th>
                        <td>{data.created}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <Link to='/'><button className="btn btn-primary mt-3">Back</button></Link>
        </div>
      </div>

    </div>
  );
};
export default Data;