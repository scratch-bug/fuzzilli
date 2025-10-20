function f2() {
    return Float64Array;
}
const v5 = new ArrayBuffer(3, { maxByteLength: 3 });
const v6 = new Float64Array(v5);
f2.apply(v6, v6);
