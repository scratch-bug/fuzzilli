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
            const v13 = t10();
            v13[45] = v13;
            v13[203] = v13;
            function f14(a15) {
                return a15;
            }
            v13.toString = f14;
        }
        f10();
        %OptimizeMaglevOnNextCall(f10);
        return f10;
    }
    f9();
    Object.defineProperty(this, "toString", { get: f9 });
}
const v18 = new F5(v4);
class C19 {
    static [v18](a21, a22, a23) {
    }
}
