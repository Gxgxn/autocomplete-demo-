let countries = [];
const countryElement = document.querySelector("#list");
const countryInput = document.querySelector("#search");
function fetchCountries() {
  fetch("https://restcountries.com/v3.1/all")
    .then((response) => response.json())
    .then((data) => {
      countries = data.map((x) => x.name.common);
      countries.sort();
      //   loadData(countries, countryElement);
    });
}
function loadData(data, element) {
  if (data) {
    element.innerHTML = "";
    let listItems = "";
    data.forEach((item) => {
      listItems += `<li class="list-group-item">${item}</li>`;
    });
    element.innerHTML = listItems;
  }
}
function filterData(data, searchInput) {
  return data.filter((x) =>
    x.toLowerCase().includes(searchInput.toLowerCase())
  );
}
fetchCountries();
countryInput.addEventListener("input", () => {
  const filtered = filterData(countries, countryInput.value);
  loadData(filtered, countryElement);
  document.addEventListener("click", (e) => {
    if (!countryElement.contains(e.target)) {
      countryElement.innerHTML = "";
    }
  });
  countryElement.addEventListener("click", (e) => {
    countryInput.value = e.target.innerHTML;
    countryElement.innerHTML = "";
  });
});
document.removeEventListener;
let darkModeBtn = document.querySelector("#checkbox");
darkModeBtn.addEventListener("change", () => {
  document.body.classList.toggle("darkmode");
});
