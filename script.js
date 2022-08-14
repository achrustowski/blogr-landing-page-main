const product = document.getElementById("product");
const company = document.getElementById("company");
const connect = document.getElementById("connect");

const productBtn = document.getElementById("product-btn");
const companyBtn = document.getElementById("company-btn");
const connectBtn = document.getElementById("connect-btn");

productBtn.addEventListener("click", function () {
  product.classList.toggle("hidden");
  company.classList.add("hidden");
  connect.classList.add("hidden");
});

companyBtn.addEventListener("click", function () {
  company.classList.toggle("hidden");
  product.classList.add("hidden");
  connect.classList.add("hidden");
});

connectBtn.addEventListener("click", function () {
  connect.classList.toggle("hidden");
  company.classList.add("hidden");
  product.classList.add("hidden");
});
