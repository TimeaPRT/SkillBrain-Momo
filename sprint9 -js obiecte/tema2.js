// Write a function that returns a new object without the provided properties

function getPartOfObject(obj, propertyToRemove) {
    const obj2 = {...obj};
    delete obj2[propertyToRemove];

    return obj2;
}

const object = {
    a: 1,
    b: 2,
}

console.log(getPartOfObject(object, "b"));
console.log(object);