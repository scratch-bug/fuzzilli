class C1 extends Float64Array {
}
function F2(a4, a5, a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    function f8(a9) {
        return F2;
    }
    Object.defineProperty(a5, "length", { enumerable: true, set: f8 });
}
new F2(Float64Array, C1);
