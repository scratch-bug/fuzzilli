class C1 {
}
const v2 = class extends C1 {
}
function f3(a4, a5) {
    const v9 = new SharedArrayBuffer(129, { maxByteLength: 2853 });
    const v11 = new Int16Array(v9);
    const t7 = v11.constructor;
    const v13 = new t7(v11);
    return v13;
}
v2.constructor = f3;
v2.constructor();
