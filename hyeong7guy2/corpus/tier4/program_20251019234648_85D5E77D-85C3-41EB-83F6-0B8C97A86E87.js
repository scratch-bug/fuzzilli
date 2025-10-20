const v4 = new ArrayBuffer(10, { maxByteLength: 67 });
const v6 = new Float64Array(v4);
const v8 = { ...v6 };
const v9 = new Float64Array(4);
function F10(a12, a13) {
    if (!new.target) { throw 'must be called with new'; }
    const v14 = { ...v9 };
}
new F10();
