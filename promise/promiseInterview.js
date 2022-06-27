// make a fun isOdd
// returns a rejected promise if not a number
// if num is Odd it returns fulfilled after 3 sec

function isOdd(num) {
    const promise = new Promise((res,rej) => {
        if(isNaN(num)){
            rej('error');
        }
        if( num%2 !== 0 ){
            setTimeout(()=>{
                res('done');
            },3000)
        }
    })
    return promise;
}
const res = isOdd(5);
res.then((data)=>console.log(data));