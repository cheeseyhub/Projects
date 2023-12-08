let items = document.getElementsByClassName("item");
let list1 = document.getElementById("list-1");
let list2 = document.getElementById("list-2");
console.log(items);
for (item of items) {
  item.addEventListener("dragstart", (e) => {
    let selected = e.target;
    list2.addEventListener("dragover", (e) => {
      e.preventDefault();
    });
    list2.addEventListener("drop", (e) => {
      list2.appendChild(selected);
      selected = null;
    });
    list1.addEventListener("dragover", (e) => {
      e.preventDefault();
    });
    list1.addEventListener("drop", (e) => {
      list1.appendChild(selected);
      selected = null;
    });
  });
}
