let v1 = NaN;
const v3 = new WeakMap();
class C6 extends WeakMap {
    toString(a8, a9, a10, a11) {
        v1 = a11;
    }
}
for (let v12 = 0; v12 < 1000; v12++) {
    function F13() {
        if (!new.target) { throw 'must be called with new'; }
        v3.delete(v12);
        Symbol(v1);
    }
    new F13();
}
