function hot_function(a, v) {
  a.push(v);
}

for (let i = 0; i < 10000; ++i) {
  hot_function([], 1);
}

let provider = {
  get p() {
    eval('function f() { return 1; }');
    return 2;
  }
};

hot_function([], provider.p);