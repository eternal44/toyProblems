function spiralTraversal (matrix) {
  var width = matrix[0].length;
  var height = matrix.length;
  
  var currentSide = 'top';
  // object with 'left' and 'right' properties
  var leftRightLimit;

  // object with 'top' and 'bottom' properties
  var topBottomLimit;

  // helper functions
  // top - left to right
    // direct flow of traversal from left to right
    // use topBottomLimit to find index array and traverse on leftRightLimit
  // left - top to bottom
  // bottom - right to left
  // right - bottom to top
}

console.log(spiralTraversal([ [ 1, 2, 3, 4, 5 ], [ 6, 7, 8, 9, 10 ], [ 11, 12, 13, 14, 15 ], [ 16, 17, 18, 19, 20 ], [ 21, 22, 23, 24, 25 ] ]));//[ 1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13 ]
console.log(spiralTraversal([ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ], [ 10, 11, 12 ], [ 13, 14, 15 ], [ 16, 17, 18 ], [ 19, 20, 21 ], [ 22, 23, 24 ] ]));//[ 1, 2, 3, 6, 9, 12, 15, 18, 21, 24, 23, 22, 19, 16, 13, 10, 7, 4,   5, 8, 11, 14, 17, 20 ]
console.log(spiralTraversal([ [ 1 ], [ 2 ], [ 3 ], [ 4 ] ]));//[ 1, 2, 3, 4 ]
console.log(spiralTraversal([ [ 1, 2, 3, 4, 5, 6, 7 ] ]));//[ 1, 2, 3, 4, 5, 6, 7 ]
