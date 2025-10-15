function outer(flag) {
  function inner() {
    return val;
  }

  if (flag) {
    eval('var confuse = 1.1;');
  }

  var val = { p: 0 };
  let r = inner();

  if (flag) {
    r.p = 42;
  }
}

for (let i = 0; i < 10000; i++) {
  outer(false);
}
outer(true);