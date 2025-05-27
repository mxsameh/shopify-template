const $nav_items = document.querySelectorAll(".h_l .h_n-item");
const $menu_btn = document.querySelector("#menu-icon");
const $menu_drawer = document.querySelector("#menu-drawer");
const $drawer_item_with_dropdown = document.querySelectorAll(
  "#menu-drawer .has-dd"
);

// NAV DROPDOWN
$nav_items.forEach(($item) => {
  // Nav item dropdown
  const $item_link = $item.querySelector("a");
  $item_link?.addEventListener("click", (e) => {
    const href = $item_link.getAttribute("href");
    if (href != "#") return;
    e.preventDefault();
    $item.classList.toggle("active");
  });

  // Dropdown close button
  const $close_btn = $item.querySelector("button");

  $close_btn?.addEventListener("click", () => {
    $item.classList.remove("active");
  });
});

// MENU DRAWER BTN
$menu_btn.addEventListener("click", () => {
  $menu_btn.classList.toggle("open");
  // Open drawer
  $menu_drawer.classList.toggle("d-n");
  // Fixed body
  document.body.classList.toggle("s-s");
});

// MENU DRAWER DROPDOWN
$drawer_item_with_dropdown.forEach(($item) => {
  const $dd_btn = $item.querySelector("button");
  const $dd_list = $item.querySelector("ul");
  const $dd = $item.querySelector(".d_dd");

  // on click
  $dd_btn.addEventListener("click", () => {
    $item.classList.toggle("opened");
    if ($item.classList.contains("opened")) {
      const dd_list_height = $dd_list.offsetHeight;
      $dd.style.height = dd_list_height + "px";
    } else {
      $dd.style.height = "0px";
    }
  });
});
