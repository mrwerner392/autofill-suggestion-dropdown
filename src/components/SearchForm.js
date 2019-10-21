import React, { Component } from 'react';
import sports from '../data';
import Suggestions from './Suggestions';

export default class SearchForm extends Component {

  state = {
    searchInput: '',
    showSuggestions: false,
    activeSuggestion: 0,
    suggestions: [],
    suggestionsKeyHit: null
  }

  suggestionsBox = React.createRef();

  onChange = evt => {
    this.setState({
      searchInput: evt.target.value
    })
  }

  onSubmit = evt => {
    evt.preventDefault();
  };

  onKeyDown = evt => {
    let { state: {activeSuggestion,showSuggestions},
          props: {suggestions} } = this.state;
    // console.log(evt.target);
    // console.log(evt.currentTarget);

    if (evt.keyCode === 13) {
      // enter key
      this.setState({
        activeSuggestion: 0,
        showSuggestions: false,
        teamInput: suggestions[activeSuggestion],
        suggestions: []
      });

    } else if (evt.keyCode === 27) {
      // escape key
      this.setState({
        showSuggestions: false
      })

    } else if (evt.keyCode === 38) {
      // up key
      evt.preventDefault();
      if (activeSuggestion !== 0) {
        activeSuggestion--;
        this.setState({
          activeSuggestion,
          suggestionsKeyHit: 'up'
        });
      } else {
        this.setState({
          showSuggestions: false
        });
      };

    } else if (evt.keyCode === 40) {
      // down key
      evt.preventDefault();
      if (showSuggestions === false && suggestions.length) {
        this.setState({
          showSuggestions: true,
        });
      } else if (activeSuggestion !== suggestions.length - 1) {
        activeSuggestion++;
        this.setState({
          activeSuggestion,
          suggestionsKeyHit: 'down'
        });
      };
    };
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
