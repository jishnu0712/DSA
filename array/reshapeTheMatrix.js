/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
 var matrixReshape = function(mat, r, c) {
    let m = mat.length;
    let n = mat[0].length;
    
    if(m * n !== r * c) {
        return mat;
    }
    
    //let res = new Array(r).fill(new Array(c).fill(0));
    let res = [];
    for (let i = 0; i < r; i++) {
        for (let j = 0; j < c; j++) {
        res[i] = [];
        }
    }
        
    let startRow = 0;
    let startCol = 0;
   
    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            if(startCol ===  c) {
                startRow++;
                startCol = 0;
            }
            res[startRow][startCol] =  mat[i][j];
            startCol++;            
        }
    }
    return res;
};