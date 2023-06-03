import { Component } from 'react';
import PropTypes from 'prop-types';
import { Header, Form, Button, ButtonLabel, Input } from './Searchbar.styled';



export class Searchbar extends Component {
    state = {
        query: '',
    };

    handleInputChange = event => {
        this.setState({ query: event.currentTarget.value });
    };

    handleSubmit = event => {
        event.preventDefault();

        if (this.state.query.trim() === '') {
            alert('Sorry, enter something in the search line');
            return;
        }

        this.props.onSubmit(this.state.query);
        this.setState({ query: '' });
    }

    render () {
    return (
            <Header>
                <Form onSubmit={this.handleSubmit}>
                    <Button type="submit"
                        aria-label="Search">
                        <ButtonLabel>Search</ButtonLabel>
                    </Button>
                    <Input autoComplete="off"
                        type="text"
                        value={this.state.query}
                        onChange={this.handleInputChange}
                        autoFocus
                        placeholder="Search images and photos" />
                </Form>
            </Header>
        );
};
};

Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};