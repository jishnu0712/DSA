//function that takes infinite args

function infCurryingAdd(a) {
  return function (b) {
    if (b) {
      return infCurryingAdd(a + b);
    }
    return a;
  };
}

function add(a) {
  return function(b) {
    if (b) {
      return add(a + b);
    }
    return a;
  };
}

const res = add(5)(5)(6)(11)();
console.log(res);
