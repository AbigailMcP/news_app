function it(string, callback){
  console.log(string);
  callback();
}

function describe(string, callback){
  console.log(string);
  callback();
}

function expect(actual) {
  //if actual is html, parse into string format
  return new Test(actual);
}

function Test(actual) {
  this.actual = actual;
}

Test.prototype = {

  toEqual: function(expected) {
    console.log(this.actual == expected);
  },

  toContain: function(expected) {
    console.log(this.actual.indexOf(expected) !== -1);
  },

  not: function(callback) { //returns bool
    return !this.actual.callback.apply(arguments);
  },

  to: function(callback) { //returns bool
    return this.actual.callback.apply(arguments);
  }

};
