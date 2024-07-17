function Person(first, last) {
  this.first = first;
  this.last = last;
  this.fullName = function () {
    return this.first + " " + this.last;
  };
  this.fullNameReversed = function () {
    return this.last + ", " + this.first;
  };
}

var s = new Person("Simon", "Willison");

console.log(s.fullName());         // Simon Willison
console.log(s.fullNameReversed()); // Willison, Simon

var w = new Person("Willian", "Rodrigues");

console.log(w.fullName());         // Willian Rodrigues
console.log(w.fullNameReversed()); // Rodrigues, Willian
