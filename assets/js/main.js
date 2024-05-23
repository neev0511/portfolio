/*=============== SHOW SIDEBAR ===============*/
const navMenu = document.getElementById("sidebar");
const navToggle = document.querySelector("#nav-toggle");
const navClose = document.querySelector("#nav-close");
/*===== SIDEBAR SHOW =====*/
/* Validate If Constant Exists */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-sidebar");
  });
}

/*===== SIDEBAR HIDDEN =====*/
/* Validate If Constant Exists */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-sidebar");
  });
}

/*=============== SKILLS TABS ===============*/
const tabs = document.querySelectorAll("[data-target]"),
  tabContent = document.querySelectorAll("[data-content");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);

    tabContent.forEach((tabContents) => {
      tabContents.classList.remove("skills_active");
    });

    target.classList.add("skills_active");

    tabs.forEach((tab) => {
      tab.classList.remove("skills_active");
    });

    tab.classList.add("skills_active");
  });
});

/*=============== MIXITUP FILTER PORTFOLIO ===============*/
let mixerPortfolio = mixitup(".work_container", {
  selectors: {
    target: ".work_card",
  },
  animation: {
    duration: 300,
  },
});

/*===== Link Active Work =====*/
const linkWork = document.querySelectorAll(".work_item");
function activeWork() {
  linkWork.forEach((l) => l.classList.remove("active-work"));
  this.classList.add("active-work");
}

linkWork.forEach((l) => l.addEventListener("click", activeWork));

/*===== Work Popup =====*/
// Do yourself

/*=============== SERVICES MODAL ===============*/

/*=============== SCROLL NAVBAR CHANGE ===============*/
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 50,
      sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav_menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav_menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}

window.addEventListener("scroll", scrollActive);

/*=============== INPUT ANIMATION ===============*/
const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

function resume() {
  window.open("./assets/img/Resume.pdf");
}

function email_details() {
  url = "https://portfolio-backend-nxm5.onrender.com/addSiteMessage";
  var name = document.getElementById("form-name").value;
  var email = document.getElementById("form-email").value;
  var phone = document.getElementById("form-phone").value;
  var message = document.getElementById("form-message").value;
  console.log(name, email, phone, message);
  if (name === "" || email === "" || phone === "" || message === "") {
    window.alert("All details are required");
  }
  axios
    .post(url, {
      name: name,
      email: email,
      phone: phone,
      message: message,
    })
    .then(function (response) {
      window.alert("Message Sent");
    })
    .catch(function (error) {
      console.log(error);
      window.alert("Message was not sent due to server error");
    });
}

// 768px
function changeWidth() {
  if (screen.width <= 768) {
    f = document.getElementById("frontend");
    s = document.getElementById("software");
    b = document.getElementById("backend");
    fr = document.getElementById("fr");
    sf = document.getElementById("sf");
    bk = document.getElementById("bk");

    f.classList.remove("skills_active");
    s.classList.remove("skills_active");
    b.classList.remove("skills_active");
    fr.classList.remove("skills_active");
    sf.classList.remove("skills_active");
    bk.classList.remove("skills_active");

    b.classList.add("skills_active");
    bk.classList.add("skills_active");
  }
}

changeWidth();
