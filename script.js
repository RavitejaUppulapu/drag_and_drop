var draggedItem;

function resetContainers() {
  var targetContainer = document.getElementById("target-container");
  targetContainer.innerHTML = "";

  var sourceContainer = document.getElementById("source-container");
  var items = sourceContainer.getElementsByClassName("item");
  for (var i = 0; i < items.length; i++) {
    sourceContainer.appendChild(items[i]);
  }
}

document.addEventListener("dragstart", function (event) {
  draggedItem = event.target;
  event.dataTransfer.setData("text/plain", event.target.innerHTML);
  event.target.classList.add("dragging");
});

document.addEventListener("dragend", function (event) {
  event.target.classList.remove("dragging");
});

document.addEventListener("dragover", function (event) {
  event.preventDefault();
});

document.addEventListener("dragenter", function (event) {
  if (event.target.classList.contains("container")) {
    event.target.classList.add("drag-enter");
  }
});

document.addEventListener("dragleave", function (event) {
  if (event.target.classList.contains("container")) {
    event.target.classList.remove("drag-enter");
  }
});

document.addEventListener("drop", function (event) {
  event.preventDefault();
  if (event.target.classList.contains("container")) {
    event.target.classList.remove("drag-enter");
    event.target.appendChild(draggedItem);
    draggedItem.classList.remove("dragging");
    draggedItem.classList.add("success");
  }
});
s;
