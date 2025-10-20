class C1 extends Float64Array {
}
const v2 = new C1();
function F3(a5, a6, a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    Object.freeze(v2);
}
const v11 = new F3(Float64Array, C1, F3, C1);
new F3(v11, v11, C1, Float64Array);
