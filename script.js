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
});
companyBtnMobile.addEventListener("click", function () {
  companyArrowMobile.classList.toggle("rotate");
  productArrowMobile.classList.remove("rotate");
  connectArrowMobile.classList.remove("rotate");
});
connectBtnMobile.addEventListener("click", function () {
  connectArrowMobile.classList.toggle("rotate");
  companyArrowMobile.classList.remove("rotate");
  productArrowMobile.classList.remove("rotate");
});
