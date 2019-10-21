import React, { Component } from 'react';
import sports from '../data';
import Suggestions from './Suggestions';

export default class SearchForm extends Component {

  state = {
    searchInput: '',
    showSuggestions: false
  }

  onChange = evt => {
    this.setState({
      searchInput: evt.target.value
    })
  }

  onSubmit = evt => {
    evt.preventDefault();
  };

  getSuggestions = () => {
    const currentInput = this.state.searchInput;
    return sports.filter(sport => sport.includess(currentInput))
  }

  render() {
    const {state: {searchInput},
            onChange,
            onSubmit,
            getSuggestion} = this;

    return (
      < form onSubmit={ onSubmit }>
        < input type='text' value={ searchInput } onChange={ onChange }/>
        { showSuggestions ? < Suggestions suggestions={ getSuggestion() }/> : null }
      </ form >

    )
  }
}
