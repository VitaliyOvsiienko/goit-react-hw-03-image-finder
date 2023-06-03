import { Component } from "react";
import { Container } from "./App.styled";
import { Searchbar } from "./searchbar";
// import { ImageGallery } from "imageGallery";



export class App extends Component {
  state = {
    query: '',
  };

  handleSearchSubmit = (query) => {
    this.setState({ query });
  };

  render() {
    return (
      <Container>
        <Searchbar onSummit={this.handleSearchSubmit} />
        {/* <ImageGallery query={this.state.query} /> */}
      </Container>
    );
  };
};