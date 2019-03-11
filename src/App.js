import React, { Component } from "react";
import "./App.css";
import { recipes } from "./tempList";

import CookbookDetails from "./components/CookbookDetails";
import CookbookList from "./components/CookbookList";

class App extends Component {
  state = {
    recipes: recipes,
    url:
      "https://www.food2fork.com/api/search?key=eecbc55cf3fad89f9130c071989edbc6",
    base_url:
      "https://www.food2fork.com/api/search?key=eecbc55cf3fad89f9130c071989edbc6",
    details_id: 35388,
    pageIndex: 1,
    search: "",
    query: "&q=",
    error: ""
  };

  async getRecipes() {
    try {
      const data = await fetch(this.state.url);
      const jsonData = await data.json();

      if (jsonData.recipes.length === 0) {
        this.setState(() => {
          return { error: "Sorry, no cookbooks founded." };
        });
      } else {
        this.setState(() => {
          return { recipes: jsonData.recipes };
        });
      }
    } catch (error) {
      console.log(error);
    }
  }

  componentDidMount() {
    this.getRecipes();
  }

  displayPage = index => {
    switch (index) {
      default:
      case 1:
        return (
          <CookbookList
            recipes={this.state.recipes}
            handleDetails={this.handleDetails}
            value={this.state.search}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            error={this.state.error}
          />
        );
      case 2:
        return (
          <CookbookDetails
            id={this.state.details_id}
            handleIndex={this.handleIndex}
          />
        );
    }
  };

  handleIndex = index => {
    this.setState({
      pageIndex: index
    });
  };

  handleDetails = (index, id) => {
    this.setState({
      pageIndex: index,
      details_id: id
    });
  };

  handleChange = e => {
    this.setState(
      {
        search: e.target.value
      },
      () => {
        console.log(this.state.search);
      }
    );
  };

  handleSubmit = e => {
    e.preventDefault();
    const { base_url, query, search } = this.state;
    this.setState(
      () => {
        return { url: `${base_url}${query}${search}`, search: "" };
      },
      () => {
        this.getRecipes();
      }
    );
  };

  render() {
    console.log(this.state.recipes);

    return (
      <React.Fragment>
        <div className="container text-center mx-auto mt-3">
          <img src="logo.png" style={{ height: "4rem" }} alt="logo" />
          <h4 className="text-slanted text-capitalize">straya cookbooks</h4>
        </div>
        {this.displayPage(this.state.pageIndex)}
      </React.Fragment>
    );
  }
}

export default App;
