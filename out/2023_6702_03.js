async function poc() {
  try {
    const p1 = new Promise(() => {});
    const p2 = Promise.resolve();
    const p_any = Promise.any([p1, p2]);
    await p_any;
    await new Promise(r => r());
  } catch (e) {}
}

for (let i = 0; i < 10000; i++) {
  poc();
}