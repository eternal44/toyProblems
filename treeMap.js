// This first solution is with a for loop
// Tree.prototype.map = function(callback) {
var newTree = new Tree(callback(this.value));
for (var i = 0; i < this.children.length; i++) {
  newTree.addChild(this.children[i].map(callback));
}
return newTree;
// This second solution is more in the functional style
Tree.prototype.map = function(callback) {
  var newTree = new Tree(callback(this.value));
  newTree.children = this.children.map(function(child) {
    return child.map(callback);
  });
  return newTree;
};
// This is the bonus solution for mapping in place that
// you were not required to do
Tree.prototype.mapInPlace = function(callback) {
  this.value = callback(this.value);
  this.children.forEach(function(child) {
    child.mapInPlace(callback);
  });
};
