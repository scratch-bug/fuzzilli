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
            const v13 = v4.constructor.apply(a8, f10);
            v13[406] = v13;
        }
        f10(v2);
        %OptimizeMaglevOnNextCall(f10);
        return f10;
    }
    f9();
    Object.defineProperty(this, "toString", { get: f9 });
}
const v16 = new F5(v4);
class C17 {
    static [v16](a19, a20, a21) {
    }
}
