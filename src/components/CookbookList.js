import React, { Component } from "react";
import Cookbook from "./Cookbook";
import CookbookSearch from "./CookbookSearch";

export default class CookbookList extends Component {
  render() {
    const {
      recipes,
      handleDetails,
      value,
      handleSubmit,
      handleChange,
      error
    } = this.props;

    return (
      <React.Fragment>
        <CookbookSearch
          value={value}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
        <div className="container my-5">
          <div className="row">
            <div className="col-10 mx-auto col-md-6 text-center text-capitalize mb-1">
              <h6 className="text-slanted">cookbook list</h6>
            </div>
          </div>

          <div className="row">
            {error ? (
              <h6 className="text-danger mx-auto text-center">
                <i class="fas fa-exclamation-triangle" /> {error}
              </h6>
            ) : (
              recipes.map(recipe => {
                return (
                  <Cookbook
                    key={recipe.recipe_id}
                    recipe={recipe}
                    handleDetails={handleDetails}
                  />
                );
              })
            )}
          </div>
        </div>
      </React.Fragment>
    );
  }
}
