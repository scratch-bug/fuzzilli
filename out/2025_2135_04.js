function poc(b) {
  let v2 = [1.1, 2.2, 3.3, 4.4];
  const v3 = v2;
  if (b) {
    v2.push({});
  }
  v3[2] = 5.5;
}

for (let i = 0; i < 100000; i++) {
  poc(false);
}

poc(true);