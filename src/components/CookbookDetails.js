import React, { Component } from "react";
import { recipe } from "../tempDetails";

export default class CookbookDetails extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     recipe: recipe,
  //     url: `https://www.food2fork.com/api/get?key=eecbc55cf3fad89f9130c071989edbc6&rId=${
  //       this.props.id
  //     }`
  //   };
  // }

  // async componentDidMount() {
  //   try {
  //     const data = await fetch(this.state.url);
  //     const jsonData = await data.json();
  //     this.setState({
  //       recipe: jsonData.recipe
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  state = {
    recipe: recipe
  };
  async componentDidMount() {
    const id = this.props.id;
    const url = `https://www.food2fork.com/api/get?key=eecbc55cf3fad89f9130c071989edbc6&rId=${id}`;
    try {
      const data = await fetch(url);
      const jsonData = await data.json();
      this.setState(
        (state, props) => {
          return { recipe: jsonData.recipe };
        },
        () => {}
      );
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const {
      image_url,
      publisher,
      publisher_url,
      source_url,
      title,
      ingredients
    } = this.state.recipe;

    const { handleIndex } = this.props;

    return (
      <React.Fragment>
        <div className="container my-5">
          <div className="row">
            <div className="col-10 mx-auto col-md-6 my-3">
              <button
                type="button"
                className="btn btn-danger mb-5 text-capitalize"
                onClick={() => handleIndex(1)}
              >
                <i class="fas fa-angle-double-left" /> back
              </button>
              <img src={image_url} className="d-block w-100" alt="cookbook" />
            </div>

            <div className="col-10 mx-auto col-md-6 my-3">
              <h6 className="text-uppercase">{title}</h6>
              <h6 className="text-info text-capitalize text-slanted">
                from <i>{publisher}</i>
              </h6>
              <hr />
              <div className="text-right">
                <a
                  href={source_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-info mt-2 text-capitalize"
                >
                  <i class="fas fa-concierge-bell" /> Open Cookbook
                </a>
              </div>

              <ul className="list-group mt-4">
                <h6 className="mt-3 mb-4">
                  <i class="fas fa-utensils" /> Ingredients
                </h6>
                {ingredients.map((item, index) => {
                  return (
                    <li key={index} className="list-group-item text-slanted">
                      {item}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <hr />
          <div className="text-right pb-5">
            <a
              href={publisher_url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 text-uppercase"
            >
              <i class="far fa-copyright" /> publisher
            </a>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
