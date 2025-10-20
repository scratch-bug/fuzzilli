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
            const t10 = v4.constructor;
            const v13 = t10(f10, F5, f10);
            v13[218] = v13;
            return a11;
        }
        f10(f10());
        %OptimizeMaglevOnNextCall(f10);
        return f10;
    }
    Object.defineProperty(this, "toString", { get: f9 });
}
const v16 = new F5(v4);
class C17 {
    static [v16](a19, a20, a21) {
    }
}
