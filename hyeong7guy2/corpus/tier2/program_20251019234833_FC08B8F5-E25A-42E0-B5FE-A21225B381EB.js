function f1() {
    const v4 = { maxByteLength: 2615505747 };
    const v5 = new ArrayBuffer(13, v4);
    const v7 = new Float64Array(v5);
    v7.reverse();
    return v4;
}
const v9 = { construct: f1 };
v9.construct(f1, v9, f1);
