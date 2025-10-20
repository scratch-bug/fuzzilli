function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    a3.f = -536870912;
}
function F5(a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    function f9() {
        function f10(a11) {
            new F1(Reflect.construct(Proxy, [BigUint64Array,Reflect]));
        }
        return f10;
    }
    Object.defineProperty(this, "toString", { get: f9 });
}
const v18 = new F5();
class C19 {
    static [v18](a21, a22, a23) {
    }
}
