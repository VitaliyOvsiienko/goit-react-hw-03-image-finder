import { Component } from "react";
import { Container } from './App.styled';
import { Searchbar } from "../searchbar";
import { ImageGallery } from "components/imageGallery";


export class App extends Component {
  state = {
    query: '',
  }
  
  SearchFormSubmitHandler = (query) => {
    this.setState({ query });
  };

  render() {
    return(
      <Container>
        <Searchbar onSubmit={this.SearchFormSubmitHandler} />
        <ImageGallery query={this.state.query} />
      </Container>
    );
  };
};