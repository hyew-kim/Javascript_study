import { fetchLanguages } from "./api.js";
import SearchInput from "./SearchInput.js";
import SelectedLanguages from "./SelectedLanguages.js";
import Suggestion from "./Suggestion.js";

export default function App(target) {
  this.state = {
    fetchedLanguages: [],
    selectedLanguages: [],
    selectedIndex: 0,
    inputValue: "",
  };

  this.setState = (nextState) => {
    this.state = {
      ...this.state,
      ...nextState,
    };
    suggestion.setState({
      selectedIndex: 0,
      items: this.state.fetchedLanguages,
      inputValue: this.state.inputValue,
    });
    selectedLanguages.setState({
      items: this.state.selectedLanguages,
    });
  };

  const selectedLanguages = new SelectedLanguages(target);

  const searchInput = new SearchInput(target, async (value) => {
    if (value.length > 0) {
      const result = await fetchLanguages(value);
      this.setState({ fetchedLanguages: result, inputValue: value });
    } else {
      this.setState({ fetchedLanguages: [], inputValue: "" });
    }
  });

  const suggestion = new Suggestion(target, (value) => {
    if (!this.state.selectedLanguages.includes(value)) {
      this.setState({
        selectedLanguages: [...this.state.selectedLanguages, value],
      });
    }
  });
}
