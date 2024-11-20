import { renderDetailPage, renderNotFoundedPage } from "./ui.js";

const params = new URLSearchParams(window.location.search);

const id = parseInt(params.get("id"));

const outlet = document.getElementById("outlet");

document.addEventListener("DOMContentLoaded", async () => {
  const res = await fetch("../db.json");
  const data = await res.json();

  const product = data.menu.find((item) => item.id === id);

  if (!product) {
    renderNotFoundedPage(outlet);
  } else {
    renderDetailPage(product, outlet);
  }
});
