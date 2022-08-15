const product = document.getElementById("product");
const company = document.getElementById("company");
const connect = document.getElementById("connect");

const productBtn = document.getElementById("product-btn");
const companyBtn = document.getElementById("company-btn");
const connectBtn = document.getElementById("connect-btn");

const productArrow = document.getElementById("product-arrow");
const companyArrow = document.getElementById("company-arrow");
const connectArrow = document.getElementById("connect-arrow");

const productBtnMobile = document.getElementById("product-btn-mobile");
const companyBtnMobile = document.getElementById("company-btn-mobile");
const connectBtnMobile = document.getElementById("connect-btn-mobile");

const productArrowMobile = document.getElementById("product-arrow-mobile");
const companyArrowMobile = document.getElementById("company-arrow-mobile");
const connectArrowMobile = document.getElementById("connect-arrow-mobile");

const hamburgerIcon = document.getElementById("hamburger-icon");
const btnMobile = document.getElementById("btn-mobile");

const mobileMenu = document.getElementById("mobile-menu");

const productDropDown = document.getElementById("product-drop");
const companyDropDown = document.getElementById("company-drop");
const connectDropDown = document.getElementById("connect-drop");

const startBtn = document.getElementById("start");
const learnBtn = document.getElementById("learn");

btnMobile.addEventListener("click", function () {
  if (!btnMobile.classList.contains("close-active")) {
    hamburgerIcon.src = "./images/icon-close.svg";
    btnMobile.classList.add("close-active");
    startBtn.classList.add("hidden");
    learnBtn.classList.add("hidden");
    startBtn.classList.remove("z-index-999");
    learnBtn.classList.remove("z-index-999");
    startBtn.classList.add("z-index-1");
    learnBtn.classList.add("z-index-1");
  } else if (btnMobile.classList.contains("close-active")) {
    hamburgerIcon.src = "./images/icon-hamburger.svg";
    btnMobile.classList.remove("close-active");
    startBtn.classList.remove("hidden");
    learnBtn.classList.remove("hidden");
    startBtn.classList.remove("z-index-1");
    learnBtn.classList.remove("z-index-1");
    startBtn.classList.add("z-index-999");
    learnBtn.classList.add("z-index-999");
  }
});

btnMobile.addEventListener("click", function () {
  mobileMenu.classList.toggle("hidden");
});

productBtn.addEventListener("click", function () {
  product.classList.toggle("hidden");
  company.classList.add("hidden");
  connect.classList.add("hidden");
  productArrow.classList.toggle("rotate");
  companyArrow.classList.remove("rotate");
  connectArrow.classList.remove("rotate");
});
companyBtn.addEventListener("click", function () {
  company.classList.toggle("hidden");
  product.classList.add("hidden");
  connect.classList.add("hidden");
  companyArrow.classList.toggle("rotate");
  productArrow.classList.remove("rotate");
  connectArrow.classList.remove("rotate");
});
connectBtn.addEventListener("click", function () {
  connect.classList.toggle("hidden");
  company.classList.add("hidden");
  product.classList.add("hidden");
  connectArrow.classList.toggle("rotate");
  companyArrow.classList.remove("rotate");
  productArrow.classList.remove("rotate");
});

productBtnMobile.addEventListener("click", function () {
  productArrowMobile.classList.toggle("rotate");
  companyArrowMobile.classList.remove("rotate");
  connectArrowMobile.classList.remove("rotate");

  productDropDown.classList.toggle("hidden");
  productDropDown.classList.toggle("float");

  companyDropDown.classList.add("hidden");
  companyDropDown.classList.add("float");

  connectDropDown.classList.add("hidden");
  connectDropDown.classList.add("float");

  mobileMenu.classList.toggle("fix-product-height");
  companyBtnMobile.classList.toggle("product-menu-drop");
});

companyBtnMobile.addEventListener("click", function () {
  companyArrowMobile.classList.toggle("rotate");
  productArrowMobile.classList.remove("rotate");
  connectArrowMobile.classList.remove("rotate");

  companyDropDown.classList.toggle("hidden");
  companyDropDown.classList.toggle("float");

  productDropDown.classList.add("hidden");
  productDropDown.classList.add("float");

  connectDropDown.classList.add("hidden");
  connectDropDown.classList.add("float");

  mobileMenu.classList.toggle("fix-company-height");
  companyBtnMobile.classList.toggle("product-menu-drop");
});

connectBtnMobile.addEventListener("click", function () {
  connectArrowMobile.classList.toggle("rotate");
  productArrowMobile.classList.remove("rotate");
  companyArrowMobile.classList.remove("rotate");

  connectDropDown.classList.toggle("hidden");
  connectDropDown.classList.toggle("float");

  companyDropDown.classList.add("hidden");
  companyDropDown.classList.add("float");

  productDropDown.classList.add("hidden");
  productDropDown.classList.add("float");

  mobileMenu.classList.toggle("fix-connect-height");
  companyBtnMobile.classList.toggle("product-menu-drop");
});
