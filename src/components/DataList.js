import React from 'react';
import { Link } from 'react-router-dom';

const DataList = ({ datalist }) => {

  return (
    <div className="container mt-4">
     <table className="table table-striped table-dark">
        <thead>
          <tr>
          <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Status</th>
            <th scope="col">Image</th>
          </tr>
        </thead>
          {datalist.map((item, index) => (
            <tbody>
              <tr>
              <th >{item.id}</th>
                <th >{item.name}</th>
                <td >{item.status}</td>
                <td colspan="2"> <Link to={`/detalle/${item.id}`}><img  src={item.image} width="60" height="60" /> </Link></td>
              </tr>
            </tbody>
          ))}
      </table>
    </div>
  );
};
export default DataList;