var listSort = require("./addList");

for (i = 10; i > 0; i--) {
  listSort.addToList(i);
}

console.log(listSort.sortedList());