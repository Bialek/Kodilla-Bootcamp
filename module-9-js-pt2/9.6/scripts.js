var add = document.getElementById("addElem");
var list = document.getElementById("list");

add.addEventListener("click", clickEvent);

function clickEvent() {
  var element = document.createElement("li");
  var itemNumber = document.getElementsByTagName("li");
  element.innerHTML = ("item " + itemNumber.length);
  list.appendChild(element);
}
