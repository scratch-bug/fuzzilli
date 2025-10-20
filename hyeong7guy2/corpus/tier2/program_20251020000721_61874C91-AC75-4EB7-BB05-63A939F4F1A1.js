function f0() {
    const v4 = new ArrayBuffer(2615505747, { maxByteLength: 2615505747 });
    const v6 = new Float64Array(v4);
    v6.fill();
    return Float64Array;
}
const v8 = { construct: f0 };
v8.construct(v8, f0);
