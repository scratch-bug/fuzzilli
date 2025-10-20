function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function f6() {
        function f7(a8) {
            const v10 = ("p").codePointAt(a8);
            ~v10;
            v10 - false;
        }
        f7(F2);
        %OptimizeMaglevOnNextCall(f7);
        return f7;
    }
    f6();
    Object.defineProperty(this, "toString", { get: f6 });
}
function f15() {
    return -11;
}
const v17 = Symbol.toPrimitive;
F2[v17] = f15;
const v18 = new F2();
const v19 = new F2(v18, v17);
v19.toString(v19, v19);
