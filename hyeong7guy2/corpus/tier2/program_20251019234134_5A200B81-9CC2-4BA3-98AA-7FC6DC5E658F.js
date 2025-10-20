const v1 = [1.0,-1.7555813913450518e+308,-Infinity,-0.0,1.7976931348623157e+308];
const v2 = new Uint8ClampedArray(v1);
function f3() {
    v2.__proto__ = v1;
    return v2;
}
const v4 = [693913.4712015034,-314050.5385797281];
function F5(a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    Object.defineProperty(a7, "constructor", { enumerable: true, value: f3 });
    function f9() {
        function f10(a11) {
            const t12 = v4.constructor;
            t12();
            v2.length;
        }
        f10(this);
        f10();
        %OptimizeMaglevOnNextCall(f10);
        return f10;
    }
    Object.defineProperty(this, "toString", { get: f9 });
}
const v17 = new F5(v4);
class C19 extends Uint8Array {
    static [v17](a21, a22, a23) {
    }
}
