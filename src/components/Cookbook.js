import React, { Component } from "react";

export default class Cookbook extends Component {
  render() {
    const { image_url, title, publisher, recipe_id } = this.props.recipe;

    const { handleDetails } = this.props;

    return (
      <React.Fragment>
        <div className="col-10 mx-auto col-md-6 col-lg-4 my-3">
          <div className="card">
            <img
              src={image_url}
              className="img-card-top"
              style={{ height: "12rem" }}
              alt="cookbook"
            />
            <div className="card-body text-capitalize">
              <h6>{title}</h6>
              <h6 className="text-info text-slanted">
                from <i>{publisher}</i>
              </h6>
            </div>
            <div className="card-footer">
              <button
                type="button"
                className="btn btn-danger text-capitalize"
                onClick={() => handleDetails(2, recipe_id)}
              >
                More Details <i class="fas fa-angle-double-right" />
              </button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
