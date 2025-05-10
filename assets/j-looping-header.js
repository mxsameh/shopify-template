const $lhs = document.querySelectorAll(".lh");
const vpw = window.innerWidth;

const addClones = ($lh) => {
  const $lhi = $lh.querySelector(".lh_i");

  const lhi_w = $lhi.offsetWidth;
  $lh.style.setProperty("--hw", `${lhi_w}px`);

  const clonesNo = Math.ceil(vpw / lhi_w);

  [...Array(clonesNo)].forEach((_) => {
    const clone = $lhi.cloneNode(true);
    $lh.appendChild(clone);
  });
};

$lhs.forEach(($lh) => {
  addClones($lh);
});
