import React, { Component } from 'react';

export default class Suggestions extends Component {

  state = {
    activeSuggestion: 0,
    showSuggestions: false,
    keyHit: null
  }

  suggestionsBox = React.createRef();

  onKeyDown = evt => {
    let { state: {activeSuggestion,showSuggestions},
          props: {filteredSuggestions} } = this.state;
    // console.log(evt.target);
    // console.log(evt.currentTarget);

    if (evt.keyCode === 13) {
      // enter key
      this.setState({
        activeSuggestion: 0,
        showSuggestions: false,
        teamInput: filteredSuggestions[activeSuggestion],
        filteredSuggestions: []
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
        // down key
        this.setState({
          showSuggestions: false
        });
      };
    } else if (evt.keyCode === 40) {
      evt.preventDefault();
      if (showSuggestions === false && filteredSuggestions.length) {
        this.setState({
          showSuggestions: true,
        });
      } else if (activeSuggestion !== filteredSuggestions.length - 1) {
        activeSuggestion++;
        this.setState({
          activeSuggestion,
          suggestionsKeyHit: 'down'
        });
      };
    };
  };

  render() {
    return (
      < ul >

      </ ul >
    )
  }
}
