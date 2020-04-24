/* eslint-disable */
'use strict';

var OBJECT = {
  title: 'Blade runner',
  genre: 'cyberpunk',
  year: [1982, 2017]
};
var customObjKeys = [];

for (var key in OBJECT) {
  customObjKeys.push(key);
}

var customObjValues = [];

for (var _key in OBJECT) {
  customObjValues.push(OBJECT[_key]);
}

var objItemsMix = [];

for (var _key2 in OBJECT) {
  objItemsMix.push(_key2, OBJECT[_key2]);
}

var customObjEntries = [];

for (var i = 0; i < objItemsMix.length; i += 2) {
  customObjEntries.push(objItemsMix.slice(i, i + 2));
}

console.log('===========ObjectKeys==========');
console.log('JS method: ', Object.keys(OBJECT));
console.log('Custom method: ', customObjKeys);
console.log('==========ObjectValues==========');
console.log('JS method: ', Object.values(OBJECT));
console.log('Custom method: ', customObjValues);
console.log('==========ObjectEntries=========');
console.log('JS method: ', Object.entries(OBJECT));
console.log(objItemsMix);
console.log('Custom method: ', customObjEntries);