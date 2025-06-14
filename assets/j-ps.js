class PredictiveSearch extends HTMLElement {
  constructor() {
    super();

    this.input = this.querySelector('input[type="search"]');
    this.predictiveSearchResults = this.querySelector("#predictive-search");

    this.input.addEventListener(
      "input",
      this.debounce((event) => {
        this.onChange(event);
      }, 300).bind(this)
    );
  }

  onChange() {
    const searchTerm = this.input.value.trim();

    if (!searchTerm.length) {
      this.close();
      return;
    }

    this.getSearchResults(searchTerm);
  }

  async getSearchResults(searchTerm) {
    const url = `/search/suggest?q=${searchTerm}&section_id=predictive-search`;
    const res = await fetch(url);

    // const text = await res.text();
    const x = await res.json();
    console.log("x", x);
    // console.log("text", text);

    // if (!res.ok) {
    //   var error = new Error(res.status);
    //   this.close();
    //   throw error;
    // }

    //   .then((text) => {
    //     const resultsMarkup = new DOMParser()
    //       .parseFromString(text, "text/html")
    //       .querySelector("#shopify-section-predictive-search").innerHTML;
    //     this.predictiveSearchResults.innerHTML = resultsMarkup;
    //     this.open();
    //   })
    //   .catch((error) => {
    //     this.close();
    //     throw error;
    //   });
  }

  open() {
    this.predictiveSearchResults.style.display = "block";
  }

  close() {
    this.predictiveSearchResults.style.display = "none";
  }

  debounce(fn, wait) {
    let t;
    return (...args) => {
      clearTimeout(t);
      t = setTimeout(() => fn.apply(this, args), wait);
    };
  }
}

customElements.define("predictive-search", PredictiveSearch);
