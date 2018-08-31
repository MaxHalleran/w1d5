var list = [];

var sortAscend = function(list) {
  var newLIst = [];
  newList = list.sort( function(num1, num2) {
    return (num1 === num2 ? 0 : (num1 < num2 ? -1 : 1));
  });
  return newList;
}

module.exports = {
    addToList: function(number) {
    return list.push(number);
  },
    sortedList: function() {
    return sortAscend(list);
  }
};