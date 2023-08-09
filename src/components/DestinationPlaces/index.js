import React from "react";
import DestinationItem from "../DestinationItem";
import "./index.css";

class DestinationPlaces extends React.Component {
  state = { searchInput: "" };

  onChangeSearchInput = (event) => {
    this.setState({ searchInput: event.target.value });
  };

  onSearchAgain = () => {
    this.setState({ searchInput: "" });
  };

  // -------- rendering destination images --------
  renderDestinationImages = () => {
    const { destinationsList } = this.props;
    const { searchInput } = this.state;
    const imagesList = destinationsList.filter((eachItem) =>
      eachItem.name.toLowerCase().includes(searchInput.toLowerCase())
    );
    if (imagesList.length > 1) {
      return (
        <ul className="images-list-container">
          {imagesList.map((eachDestination) => (
            <DestinationItem
              imageItem={eachDestination}
              key={eachDestination.id}
            />
          ))}
        </ul>
      );
    }
    return (
      <div className="no-data-container">
        <img
          src="https://img.freepik.com/free-vector/error-404-concept-landing-page_52683-18367.jpg?w=1060&t=st=1691578575~exp=1691579175~hmac=be4ae443bfc04ec9ec45207367f4a6e32cff66fa6b11dab19ef5a9902ba7cd09"
          alt="not found"
          className="no-data-image"
        />
        <button
          type="button"
          className="search-again"
          onClick={this.onSearchAgain}
        >
          Search Again
        </button>
      </div>
    );
  };

  render() {
    const { searchInput } = this.state;
    return (
      <div className="destination-container">
        <h1 className="title">Destination Places</h1>
        <div className="search-input-container">
          <input
            value={searchInput}
            type="search"
            className="search-input"
            placeholder="Search"
            onChange={this.onChangeSearchInput}
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            className="search-icon"
            alt="search icon"
          />
        </div>
        {this.renderDestinationImages()}
      </div>
    );
  }
}

export default DestinationPlaces;
