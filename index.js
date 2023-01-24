// COLLECTION FUNCTIONS (ARRAYS OR OBJECTS)

// TASK ONE
function myEach(collection, callback) {
  if (Array.isArray(collection))
    for (const member of collection) callback(member);
  else {
    let collectionValues = Object.values(collection);
    for (const eachValue of collectionValues) callback(eachValue);
  }
  return collection;
}
// myEach([1, 2, 3], alert);
// myEach({ one: 1, two: 2, three: 3 }, alert);

// TASK TWO
function myMap(collection, callback) {
  let anotherArray = [];
  if (Array.isArray(collection)) {
    for (const member of collection) anotherArray.push(callback(member));
    return anotherArray;
  } else {
    let collectionValues = Object.values(collection);
    for (const eachValue of collectionValues)
      anotherArray.push(callback(eachValue));
    return anotherArray;
  }
}
// myMap([1, 2, 3], function (num) { return num * 3; });
// myMap({ one: 1, two: 2, three: 3 }, function (num, key) { return num * 3; });

// TASK THREE
function myReduce(collection, callback, acc = -2) {
  if (Array.isArray(collection)) {
    let finalValue = acc;
    for (const eachValue of collection)
      finalValue += callback((acc = 0), eachValue, collection);
    return finalValue;
  } else {
    let collectionValues = Object.values(collection);
    let finalValue = acc;
    for (const eachValue of collectionValues)
      finalValue += callback((acc = 0), eachValue, collectionValues);
    return finalValue;
  }
}
// [1, 2, 3, 4] should give 40
// myReduce([1, 2, 3], function(acc, val, collection) { return acc + val; }, 10);
// myReduce({one: 1, two: 2, three: 3}, function(acc, val, collection) { return acc + val; });

// TASK FOUR
function myFind(collection, predicate) {
  for (const eachValue of collection)
    if (predicate(eachValue)) return eachValue;
}
// myFind([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
// myFind({one: 1, three: 3, four: 4, six: 6}, function(num){ return num % 2 == 0; });

// TASK FIVE
function myFilter(collection, predicate) {
  if (Array.isArray(collection)) {
    let filteredValues = [];
    for (const value of collection)
      if (predicate(value)) filteredValues.push(value);
    return filteredValues;
  } else {
    let collectionValues = Object.values(collection);
    let filteredValues = [];
    for (const value of collectionValues)
      if (predicate(value)) filteredValues.push(value);
    return filteredValues;
  }
}
// myFilter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
// myFilter({one: 1, three: 3, five: 5}, function(num){ return num % 2 == 0; })

// TASK SIX
function mySize(collection) {
  if (Array.isArray(collection)) return collection.length;
  else {
    let collectionValues = Object.values(collection);
    return collectionValues.length;
  }
}

// ARRAY FUNCTIONS

// TASK SEVEN
function myFirst(array, n = 0) {
  if (n > 0) return array.slice(0, n);
  else return array[0];
}

// TASK EIGHT
function myLast(array, n = 0) {
  if (n > 0) return array.slice(-n);
  else return array[array.length - 1];
}

// OBJECT FUNCTIONS

// TASK NINE
function myKeys(obj) {
  let keysArray = [];
  for (let item in obj) keysArray.push(item);
  return keysArray;
}
// myKeys({ one: 1, two: 2, three: 3 });

// TASK TEN
function myValues(obj) {
  let valuesArray = [];
  for (let item in obj) valuesArray.push(obj[item]);
  return valuesArray;
}
