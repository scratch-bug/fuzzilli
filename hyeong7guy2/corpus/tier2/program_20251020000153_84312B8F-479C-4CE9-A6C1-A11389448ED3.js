const v2 = new Int16Array(512);
function f3() {
    return v2;
}
const v4 = [693913.4712015034,-314050.5385797281];
function F5(a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    Object.defineProperty(a7, "constructor", { enumerable: true, value: f3 });
    function f9() {
        function f10(a11) {
            return v4.constructor.apply(a8, f10)[319];
        }
        f10();
        %OptimizeMaglevOnNextCall(f10);
        return f10;
    }
    f9();
    Object.defineProperty(this, "toString", { get: f9 });
}
const v17 = new F5(v4);
class C18 {
    static [v17](a20, a21, a22) {
    }
}
