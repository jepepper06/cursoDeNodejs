const _ = require('lodash');

const items = [1,[2,3,[4,5]]];

const newItems = _.flattenDeep(items);

console.log(newItems);
console.log('Hola mundo');
console.log('esto está en tiempo real');