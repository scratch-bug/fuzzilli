function poc() {
  try {
    delete ({})?.[y]?.a;
  } catch (e) {
  }
  let y;
}
for (let i = 0; i < 25000; ++i) {
  poc();
}