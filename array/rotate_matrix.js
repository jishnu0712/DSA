// You are given an n x n 2D matrix representing an image,
//  rotate the image by 90 degrees(clockwise).

// You have to rotate the image in -place, 
// which means you have to modify the input
//  2D matrix directly.DO NOT allocate another 
//  2D matrix and do the rotation.

var rotate = function (matrix) {
    let n = matrix.length;

    //transpose the matrix
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < i; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
        }
    }
    //reverse every row
    for (let i = 0; i < n; i++) {
        matrix[i].reverse();
    }

};