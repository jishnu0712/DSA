//function that takes infinite args

function infCurryingAdd(a) {
    return function (b) {
        if (b) {
            return infCurryingAdd(a + b);
        }
        return a;
    }
}

const res = infCurryingAdd(5)(5)(6)(11)();
console.log(res);