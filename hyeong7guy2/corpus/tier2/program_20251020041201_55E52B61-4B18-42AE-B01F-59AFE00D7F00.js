const v2 = new Int16Array(50);
function f3() {
    return v2;
}
const v4 = [693913.4712015034,-314050.5385797281];
function F5(a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    Object.defineProperty(a7, "constructor", { writable: true, configurable: true, enumerable: true, value: f3 });
    function f9() {
        function f10(a11) {
            const t10 = v4.constructor;
            t10()[9];
        }
        f10();
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
