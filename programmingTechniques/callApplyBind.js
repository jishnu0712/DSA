let userDetails = {
  name: "jishnu",
  age: "25",
  designation: "Software Engineer",
  // printDetails: function() {
  //     console.log(this);
  // }
};

let printDetails = function (state) {
  console.log(this.name + " " + state);
};

let userDetails2 = {
  name: "Biswa",
  age: "25",
  designation: "Software Engineer",
};

// userDetails.printDetails();
// function borrowing
// userDetails.printDetails.call(userDetails2);
printDetails.call(userDetails, "Malda");

printDetails.apply(userDetails, ["Malda"]);

let nFun = printDetails.bind(userDetails, "bind");

nFun();
