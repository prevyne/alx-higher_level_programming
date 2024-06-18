#!/usr/bin/node

const data = require('./100-data.js');

const initial = data.list;
const newList = initial.map((value, index) => value * index);

console.log(initial);
console.log(newList);
