function F(trigger) {
  const arr = [{}];
  const provider = {
    get p() {
      if (trigger) {
        arr[0] = 1;
      }
      return {};
    }
  };
  arr.push(provider.p);
  const x = arr[0];
}

for (let i = 0; i < 20000; i++) {
  F(false);
}

F(true);