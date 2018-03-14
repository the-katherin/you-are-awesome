// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = property => {
  /*Object.defineProperty(Object.prototype, property, {

configurable: true,
writable: true,
enumerable: true,
});*/

   property;
};
const createNotEnumerableProperty = property => {
  Object.defineProperty(Object.prototype, property, {
    value: 'value',
  // writable: true, // так не работает
   configurable: true,
    enumerable: false,

  });
    return property;
};


const createProtoMagicObject = () => {
  var protoMagicObject = new Function();
  return Function;
};
let increment = 0;
Function.prototype.valueOf = () => increment;
const incrementor = () => {increment ++;
  return incrementor;
};
let asyncInc = 0;

const asyncIncrementor = () => {};
const createIncrementer = () => {};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = (arg) => {
	return promise = new Promise((resolve) => {setTimeout(() => {resolve(arg);}, 1000)})
};
const getDeepPropertiesCount = (obj) => {
    let counter = Object.getOwnPropertyNames(obj).length;

    Object.getOwnPropertyNames(obj).forEach(property => {
        if (Object.getOwnPropertyNames(obj[property]).length > 0){
            counter += getDeepPropertiesCount(obj[property]);
        }
    })
    return counter;
};



const createSerializedObject = () => {
	return new String(JSON.parse(JSON.stringify(Object.prototype)));
};
const toBuffer = () => {};
const sortByProto = array => {
  array.sort(
    (a, b) => {
    return a.__proto__ - b.__proto__;
  }
)
  return array;
};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;
