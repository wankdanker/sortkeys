/*
 * A simple function to sort the keys of an object recursively.
 */

module.exports = sortkeys;

function sortkeys(obj) {
  var o = {};
  
  Object.keys(obj).sort().forEach(function (key) {
    if (typeof(obj[key]) == "object") {
      o[key] = sortkeys(obj[key]);
    }
    else {
      o[key] = obj[key];
    }
  });
  
  return o;
}