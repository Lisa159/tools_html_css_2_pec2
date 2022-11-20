/**
 * Import dependencies from node_modules
 * see commented examples below
 */
import * as bootstrap from "bootstrap";

/**
 * Write any other JavaScript below
 */

bootstrap;

(function () {
  let loc = window.location.pathname;
  _removeActiveLinks();
  if (loc.includes("profile")) {
    document.getElementsByClassName("nav-link")[0];
    document.getElementsByClassName("nav-link")[0].ariaCurrent = "page";
    document.getElementsByClassName("nav-link")[0].classList.add("active");
  } else if (loc.includes("festival")) {
    document.getElementsByClassName("nav-link")[1];
    document.getElementsByClassName("nav-link")[1].ariaCurrent = "page";
    document.getElementsByClassName("nav-link")[1].classList.add("active");
  } else if (loc.includes("contact")) {
    document.getElementsByClassName("nav-link")[2];
    document.getElementsByClassName("nav-link")[2].ariaCurrent = "page";
    document.getElementsByClassName("nav-link")[2].classList.add("active");
  }
})();

function _removeActiveLinks() {
  [0, 1, 2].map((el) => {
    document.getElementsByClassName("nav-link")[el].ariaCurrent = null;
    document.getElementsByClassName("nav-link")[el].classList.remove("active");
  });
}

(function () {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll(".needs-validation");
  console.log("forms: ", forms);
  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();
