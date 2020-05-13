import React, { Component } from "react";
import Artist from "./artist";
import Tracks from "./Tracks";
import Navbar from "./navbar";
const api_address = "https://spotify-api-wrapper.appspot.com";
class Search extends Component {
  state = { artistquery: "", artist: null, tracks: [] };

  artistsearchquery = (event) => {
    this.setState({
      artistquery: event.target.value,
    });
  };
  handlekeypress = (event) => {
    if (event.Key === "Enter") {
      this.Searchartist();
    }
  };
  Searchartist = () => {
    fetch(`${api_address}/artist/${this.state.artistquery}`)
      .then((response) => response.json())
      .then((json) => {
        if (json.artists.total > 0) {
          const artist = json.artists.items[0];
          console.log(artist);
          this.setState({ artist });
          fetch(`${api_address}/artist/${artist.id}/top-tracks`)
            .then((response) => response.json())
            .then((json) => this.setState({ tracks: json.tracks }))
            .catch((error) => alert(error.message));
        }
      })
      .catch((error) => alert(error.message));
  };
  render() {
    return (
      <div className="container">
        <Navbar />
        <div className="container">
          <div className="jumbotron my-3 border border-2 bg-light border-dark   ">
            <div className="container">
              <h2>
                <b>MUSIC MASTER</b>
              </h2>
              <input
                className="form-control rounded-2 border-dark"
                style={{ width: "200px" }}
                onChange={this.artistsearchquery}
                onKeyPress={this.handlekeypress}
                placeholder="-Search for an Artist-"
              />
              <br />
              <button
                className="btn btn-outline-dark rounded-0"
                onClick={this.Searchartist}
              >
                <b>Search</b>
              </button>
              <Artist artist={this.state.artist} />
              <Tracks tracks={this.state.tracks} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
