const $nav_items_with_dropdown = document.querySelectorAll(".h_n .has-dd");
const $menu_btn = document.querySelector("#menu-icon");
const $menu_drawer = document.querySelector("#menu-drawer");
const $drawer_item_with_dropdown = document.querySelectorAll(
  "#menu-drawer .has-dd"
);

$nav_items_with_dropdown.forEach(($item) => {
  const $dd = $item.querySelector(".h_dd");
  const $btn = $item.querySelector("button");
  $item?.addEventListener("mouseenter", () => {
    $dd.style.display = "flex";
  });

  $item?.addEventListener("mouseleave", (e) => {
    $dd.style.display = "none";
  });

  $btn?.addEventListener("mouseenter", () => {
    $dd.style.display = "none";
  });
});

// MENU BTN
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
