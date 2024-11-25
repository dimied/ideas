/**
 * Argument slice
 * @param {*} a 
 * @param {*} i 
 * @returns 
 */
function as(a,i) {
  var r = [];
  while(i < a.length) {
    r.push(a[i++]);
  }
  return r;
}

// Indexed document access
var a = ['getElementById'];
function d(i) {
  var j = 1, y = [], z = document, x = arguments;
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
      while (j < x.length) {
        y.push(x[j++]);
      }
      return i.apply(z, y);
    }
  }
}

var b = ['body', 'children'];
// Document element
function de(i) {
  return (i >= 0 && i < b.length) ? document[b[i]]:undefined;
}
