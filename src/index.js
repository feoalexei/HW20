/* eslint-disable */
'use strict';

const OBJECT = {
    title: 'Blade runner',
    genre: 'cyberpunk',
    year: [1982, 2017] 
};

const customObjKeys = [];
for (const key in OBJECT) {
    customObjKeys.push(key);
}

const customObjValues = [];
for (const key in OBJECT) {
    customObjValues.push(OBJECT[key]);
}

const objItemsMix = [];
for (const key in OBJECT) {
    objItemsMix.push(key, OBJECT[key]);
}

const customObjEntries = [];
for (let i = 0; i < objItemsMix.length; i += 2) { 
    customObjEntries.push(objItemsMix.slice(i, i+2)); 
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