// Import stylesheets
import './style.css';


// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

function assert(condition, messageWhileCondtionIsTrue) {
  const textNodeToShow = document.createTextNode(`${messageWhileCondtionIsTrue}`);
 if (condition === true) {
   var node = document.createElement("DIV");
   node.appendChild(textNodeToShow);
   appDiv.appendChild(node);
 } else {
   var node = document.createElement("STRIKE");
   node.appendChild(textNodeToShow);
   appDiv.appendChild(node);
 }
 appDiv.appendChild(document.createElement("BR"));
}

function Ola() {
  this.name = "Ola";
}

Ola.prototype = { move: function () {}};

const olaObj = new Ola();


assert(olaObj instanceof Ola, "olaObj is instanceof Ola.");
assert(typeof olaObj.move === 'function', 'olaObj has its own method "move" got from prototype');
assert(!!olaObj.name, `olaObj name is ${olaObj.name}`);
assert(olaObj.constructor == Ola, 'olaObj.constructor === Ola "function"');

function Person() {}
Person.prototype = { getName: function () { return this.name }};

const secondOlaObj = new olaObj.constructor();

console.log(secondOlaObj);

assert(secondOlaObj instanceof Ola, "Yes");


