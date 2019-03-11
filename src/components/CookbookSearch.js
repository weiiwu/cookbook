import React, { Component } from "react";

export default class CookbookSearch extends Component {
  render() {
    const { value, handleSubmit, handleChange } = this.props;
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-md-8 mt-2 text-center">
              <form className="mt-4" onSubmit={handleSubmit}>
                <label htmlFor="search" className="text-capitalize">
                  looking for your cookbook
                </label>
                <div className="input-group">
                  <input
                    type="text"
                    name="search"
                    className="form-control"
                    value={value}
                    onChange={handleChange}
                  />
                  <div className="input-group-append">
                    <button
                      type="submit"
                      className="btn btn-danger text-capitalize"
                    >
                      <i className="fas fa-search" />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
