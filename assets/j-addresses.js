const $popup_ = document.querySelector(".popup_");
const $popup = document.querySelector(".popup");
const $popup_close_btn = document.querySelector(".popup .close");
const $address_edit_btn = document.querySelector(".address_edit");
const $address_form = document.querySelector("form");

// Set country select default value
$address_form.querySelector("select").value = x.country;

// Update customer address
const updateAddress = async (e) => {
  e.preventDefault();
  const formData = new FormData($address_form);
  const url = $address_form.action;

  const res = await fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json", // Optional: signals you expect JSON back
    },

    body: formData,
  });
  //   if (res.ok) {
  //     window.location.href = "/addresses";
  //   }
};

// Close edit address popup
const closePopup = () => {
  $popup_.classList.add("d-n");
};

// Open edit address popup
const openPopup = () => {
  $popup_.classList.remove("d-n");
};

// ADD EVENT LISTENERS
$popup.addEventListener("click", (e) => e.stopPropagation());
$popup_.addEventListener("click", closePopup);
$address_edit_btn.addEventListener("click", openPopup);
$popup_close_btn.addEventListener("click", closePopup);
$address_form.addEventListener("submit", updateAddress);
