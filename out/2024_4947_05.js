(async () => {
  function f(o, v) {
    o.p = v;
  }
  let o1 = {p: 0};
  for (let i = 0; i < 25000; ++i) {
    f(o1, i);
  }
  try {
    const o2 = await import('data:text/javascript,export let p = 1;');
    f(o2, 1.1);
  } catch(e) {}
})();