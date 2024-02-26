document.addEventListener("DOMContentLoaded", function () {
  const list = document.getElementById("infi-list");
  const listItemHeight = 40; // Adjust according to your list item height

  // Add 10 list items by default
  for (let i = 1; i <= 10; i++) {
    const listItem = document.createElement("li");
    listItem.textContent = "Item " + i;
    list.appendChild(listItem);
  }

  // Function to add more list items
  function addMoreItems() {
    for (let i = 1; i <= 2; i++) {
      const listItem = document.createElement("li");
      listItem.textContent = "Item " + (list.children.length + i);
      list.appendChild(listItem);
    }
  }

  // Detect when user scrolls to the bottom
  list.addEventListener("scroll", function () {
    const scrollTop = list.scrollTop;
    const clientHeight = list.clientHeight;
    const scrollHeight = list.scrollHeight;

    if (scrollTop + clientHeight >= scrollHeight - listItemHeight) {
      addMoreItems();
    }
  });
});
