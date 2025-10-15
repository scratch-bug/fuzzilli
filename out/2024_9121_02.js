function hot_func(trigger) {
  let x = { a: 1 };
  const inner = () => x;

  if (trigger) {
    eval('let x = 2;');
  }

  return inner();
}

for (let i = 0; i < 100; i++) {
  hot_func(false);
}

hot_func(true);