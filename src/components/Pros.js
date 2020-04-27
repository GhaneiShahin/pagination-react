import React from "react";

const Pros = ({ archive }) => {
  return (
    <React.Fragment>
      {archive.map((product) => (
        <div className="d-flex m-3 justify-content-center" key={product.id}>
          <div className="col-sm-4" >
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">${product.price}</p>
                <button className="btn btn-primary">Go somewhere</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </React.Fragment>
  );
};

export default Pros;
