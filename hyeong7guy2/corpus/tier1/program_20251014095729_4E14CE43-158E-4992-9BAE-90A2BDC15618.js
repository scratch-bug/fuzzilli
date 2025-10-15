class C1 extends Float64Array {
}
class C2 extends C1 {
}
new C2();
function F5(a7, a8, a9, a10) {
    if (!new.target) { throw 'must be called with new'; }
    new Float64Array(1073741824);
    class C12 {
    }
    for (let i15 = 0; i15 < 20000; ++i15) {
        C12.d *= 1.1356230574660949e+308;
    }
}
new F5(F5);
