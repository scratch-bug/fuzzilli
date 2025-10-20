const v2 = { maxByteLength: 127 };
const v3 = new SharedArrayBuffer(127, v2);
const v5 = new BigInt64Array(v3);
function f6(a7, a8, a9) {
    return a9;
}
f6.apply(v2, v5);
