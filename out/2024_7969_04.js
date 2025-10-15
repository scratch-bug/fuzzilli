let a = true;

function bug(x) {
  let v;
  if (a) {
    v = 1;
  } else {
    v = x;
  }
  return v | 0;
}

for (let i = 0; i < 20000; ++i) {
  bug(1);
}

a = false;
bug({});