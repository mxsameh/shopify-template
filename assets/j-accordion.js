const $accordions = document.querySelectorAll(".accordion");

const toggleAccordion = ($accordion) => {
  const $accordion_b_ = $accordion.querySelector(".accordion_b_");
  const $accordion_b = $accordion.querySelector(".accordion_b");
  const body_height = $accordion_b.offsetHeight;

  $accordion.classList.toggle("active");
  if ($accordion.classList.contains("active")) {
    $accordion_b_.style.height = body_height + "px";
  } else {
    $accordion_b_.style.height = 0;
  }
};

$accordions.forEach(($accordion) => {
  $accordion.addEventListener("click", () => toggleAccordion($accordion));
});
