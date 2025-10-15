class C1 extends Uint8ClampedArray {
}
const v2 = new C1();
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    function F8(a10, a11, a12, a13) {
        if (!new.target) { throw 'must be called with new'; }
        try { new a10(v2, undefined, v2); } catch (e) {}
        a12.Iterator;
    }
    new F8(F8, a5, this);
}
new F3();
