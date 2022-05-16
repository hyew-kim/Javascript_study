export default function Suggestion(target, onSelect) {
  this.element = document.createElement("div");
  this.element.className = "Suggestion";
  target.appendChild(this.element);

  this.state = {
    selectedIndex: 0,
    items: [],
    inputValue: "",
  };
  this.setState = (nextState) => {
    this.state = {
      ...this.state,
      ...nextState,
    };
    this.render();
  };

  this.render = () => {
    const { selectedIndex, items } = this.state;
    if (items.length > 0) {
      this.element.style.display = "block";
      this.element.innerHTML = `
              <ul>
                  ${items
                    .map((el, index) => {
                      const splitArr = el.split(this.state.inputValue);
                      return `<li class="${
                        index === selectedIndex
                          ? "Suggestion__item--selected"
                          : ""
                      }" data-index=${index}>${
                        splitArr[0] +
                        `<span class="Suggestion__item--matched">${this.state.inputValue}</span>` +
                        splitArr[1]
                      }</li>`;
                    })
                    .join("")}
              </ul>
          `;
    } else {
      this.element.style.display = "none";
      this.element.innerHTML = "";
    }
  };

  window.addEventListener("keyup", (e) => {
    if (this.state.items.length > 0) {
      const lastIndex = this.state.items.length - 1;
      if (e.code === "ArrowUp") {
        this.setState({
          selectedIndex:
            this.state.selectedIndex > 0
              ? this.state.selectedIndex - 1
              : lastIndex,
        });
      } else if (e.code === "ArrowDown") {
        this.setState({
          selectedIndex:
            this.state.selectedIndex < lastIndex
              ? this.state.selectedIndex + 1
              : 0,
        });
      } else if (e.code === "Enter") {
        onSelect(this.state.items[this.state.selectedIndex]);
      }
    }
  });

  window.addEventListener("click", (e) => {
    const li = e.target.closest("li");
    if (li) {
      const { index } = li.dataset;
      onSelect(this.state.items[index]);
    }
  });

  this.render();
}
