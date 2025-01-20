document.addEventListener("DOMContentLoaded", () => {
  fetchImage();
  let buttonAdd = document.querySelector(".add");
  buttonAdd.addEventListener("click", addImage);

  let buttonRemove = document.querySelector(".remove");
  buttonRemove.addEventListener("click", removeImage);
});

async function fetchImage() {
  const items = document.querySelectorAll(".item");

  for (let i = 0; i < items.length; i++) {
    let item = items[i];

    let response = await fetch("https://picsum.photos/1200/1200");

    let img = document.createElement("img");
    img.src = response.url;
    img.setAttribute("draggable", true);

    item.appendChild(img);

    addDragAndDrop(img);
  }
}

async function addImage() {
  let response = await fetch("https://picsum.photos/1200/1200");
  let item = document.createElement("div");
  item.classList.add("item");

  let img = document.createElement("img");
  img.src = response.url;

  item.appendChild(img);

  document.querySelector(".container").appendChild(item);
}
