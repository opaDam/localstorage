// ?localStorage /////////////////////////////////////////////////
const addData = document.querySelector("#add");
const delData = document.querySelector("#del");
const prt_data = document.querySelector("#prt_data");

let existingEntries = [];
// let del_item = "";
// let add_item = "";
// ****************************************************************
// read Localstorage and Print data /////////////////////////////
existingEntries = JSON.parse(
  localStorage.getItem("list_items") || "[]"
);
prt_localstorage.innerText = existingEntries; //? PRINT
// ****************************************************************
function addItemLocaLstorage(add_item) {
  // parse existing storage key or string representation of empty array
  existingEntries = JSON.parse(
    localStorage.getItem("list_items") || "[]"
  );
  // Add item if it's not already in the array, then store array again
  if (!existingEntries.includes(add_item)) {
    existingEntries.push(add_item);
    localStorage.setItem("list_items", JSON.stringify(existingEntries));
    console.log(existingEntries);
  } else {
    // or tell user it's already there
    console.log(add_item + " already exists");
  }
  prt_localstorage.innerText = existingEntries; //? PRINT
}
// ****************************************************************
function removeItemLocalstorage(del_item) {
  existingEntries = JSON.parse(
    localStorage.getItem("list_items") || "[]"
  );
  for (var i = 0; i < existingEntries.length; i++) {
    if (existingEntries[i] === del_item) {
      existingEntries.splice(i, 1);
      i--;
    }
  }
  localStorage.setItem("list_items", JSON.stringify(existingEntries));
  console.log(existingEntries);
  prt_localstorage.innerText = existingEntries; // ?PRINT
}
// *****************************************************************
function delAllItemLocalstorage() {
  key = "list_items"
  localStorage.removeItem(key);  //item
  localStorage.clear(); //all items
  existingEntries = [];
  prt_localstorage.innerText = existingEntries; //? PRINT
}
  // einde localStorage ///////////////////////////////////////////