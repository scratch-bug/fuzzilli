function poc(x) {
  delete x?.[y]?.a;
  let y = 1;
}

for (let i = 0; i < 100; i++) {
  try {
    poc({});
  } catch (e) {}
}