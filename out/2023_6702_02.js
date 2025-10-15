function hot_function(is_trigger) {
  let p;
  if (is_trigger) {
    p = Promise.all([1]);
  } else {
    p = Promise.resolve(1);
  }

  async function run_and_trace() {
    await p;
    new Error();
  }

  run_and_trace().catch(() => {});
}

for (let i = 0; i < 1000; i++) {
  hot_function(false);
}

hot_function(true);