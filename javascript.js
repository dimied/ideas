// Indexed document access
var a = ['getElementById'];
function d(i) {
  var j = 1, y = [], z = document;
  if (i < 0) {
    j = -1;
    i = i * j + j;
  }
  if (i >= 0 && i < a.length) {
    i = z[a[i]];
    if (i) {
      if (j < 0) {
        return i.bind(z);
      }
      while (j < arguments.length) {
        y.push(arguments[j++]);
      }
      return i.apply(z, y);
    }
  }
}
