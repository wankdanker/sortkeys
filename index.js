/*
 * A simple function to sort the keys of an object recursively.
 */

module.exports = sortkeys;

function sortkeys(obj, comparator) {
  var t;

  Object.keys(obj).sort(comparator).forEach(function (key) {
    if (typeof(obj[key]) == "object") {
      t = sortkeys(obj[key]);
    }
    else {
      t = obj[key];
    }

    delete obj[key];
    obj[key] = t;
  });
  
  return obj;
}
