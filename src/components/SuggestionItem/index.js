// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {suggetionDetails, updateSearchInput} = props
  const {suggestion} = suggetionDetails

  const onClickSuggestions = () => {
    updateSearchInput(suggestion)
  }

  return (
    <li className="items-container">
      <p className="suggestion-paragraph">{suggestion}</p>
      <button
        type="button"
        className="search-button"
        onClick={onClickSuggestions}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          className="arrow"
          alt="arrow"
        />
      </button>
    </li>
  )
}
export default SuggestionItem
