function poc(flag) {
  let a;
  if (flag) {
    a = {p1: 1.1, p2: 2.2};
  }
  let b = {q1: {}};
  if (flag) {
    return a.p1;
  }
}

for (let i = 0; i < 20000; i++) {
  poc(false);
}

poc(true);