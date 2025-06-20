const $predictive_search = document.querySelector("#predictive-search");

const $header_search = document.querySelectorAll("#search-btn");
const $search_modal = document.querySelector(".search-modal");
const $search_modal_close = document.querySelector(".search-modal_close");
const $search_modal_form = document.querySelector(".ps-f form");
const $search_modal_input = document.querySelector("#Search-input");

// SEARCH BUTTON
$header_search.forEach(($sb) => {
  $sb.addEventListener("click", (e) => {
    $search_modal.style.display = "flex";
    document.body.classList.add("s-s");
  });
});

//  SEARCH MODAL CLOSE
$search_modal_close.addEventListener("click", (e) => {
  $search_modal.style.display = "none";
  $search_modal_input.value = "";
  $search_modal_input.dispatchEvent(new Event("input"));
  document.body.classList.remove("s-s");
});

const debounce = (fn, wait) => {
  let t;
  return (...args) => {
    clearTimeout(t);
    t = setTimeout(() => fn.apply(this, args), wait);
  };
};

const handleChange = (e) => {
  const searchTerm = e.target.value.trim();
  getSearchResults(searchTerm);
};

const getSearchResults = async (searchTerm) => {
  if (!searchTerm) {
    $predictive_search.innerHTML = "";
    return;
  }

  try {
    const url = `/search/suggest?q=${encodeURIComponent(
      searchTerm
    )}&section_id=predictive-search`;
    const res = await fetch(url);

    if (!res.ok) throw new Error("Network response was not ok");

    const text = await res.text();

    const resultsMarkup = new DOMParser()
      .parseFromString(text, "text/html")
      .querySelector("#shopify-section-predictive-search")?.innerHTML;

    $predictive_search.innerHTML = resultsMarkup || "";
  } catch (err) {
    console.error("Failed to fetch predictive search results:", err);
    $predictive_search.innerHTML = "";
  }
};

$search_modal_input.addEventListener("input", debounce(handleChange, 300));
