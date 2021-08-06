import React from "react";
import SearchBar from "./Searchbar";
import youtube from "../apis/youtube";
import Videolist from "./videolist";

class App extends React.Component {

    state = {videos: []};
  onTermSubmit = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });
    // console.log(response);
    this.setState({videos: response.data.items});
  };
  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <div className = "field" >Videos Fetched : {this.state.videos.length} nos.</div>
        <Videolist videos={this.state.videos}/>
      </div>
    );
  }
}

export default App;