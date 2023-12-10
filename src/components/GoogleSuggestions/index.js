// Write your code here
import {Component} from 'react'

import SuggestionItem from '../SuggestionItem'

import './index.css'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  updateSearchInput = value => {
    this.setState({
      searchInput: value,
    })
  }

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  render() {
    const {searchInput} = this.state
    const {suggestionsList} = this.props

    const searchReasults = suggestionsList.filter(eachsearch =>
      eachsearch.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="bg-container">
        <div className="google-container">
          <img
            className="image-url"
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            alt="google logo"
          />
          <div className="search-main-container">
            <div className="search-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png "
                className="search-image"
                alt="search icon"
              />
              <input
                type="search"
                placeholder="Search Google"
                value={searchInput}
                className="search"
                onChange={this.onChangeSearchInput}
              />
            </div>
            <ul className="items-con">
              {searchReasults.map(eachItem => (
                <SuggestionItem
                  key={eachItem.id}
                  updateSearchInput={this.updateSearchInput}
                  suggetionDetails={eachItem}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default GoogleSuggestions
