const v1 = ["128","128","128","128","128"];
function f2(a3) {
    a3 === a3;
    return f2;
}
f2("128");
const v6 = f2();
function F7(a9, a10) {
    if (!new.target) { throw 'must be called with new'; }
    function f11() {
        function f12(a13) {
            const v14 = f12[4];
            v1.forEach(v6);
            v14 | 7;
            return a10;
        }
        f12.call(this, "128");
        f12();
        %OptimizeMaglevOnNextCall(f12);
        return f12;
    }
    Object.defineProperty(this, "toString", { get: f11 });
}
const v20 = new F7();
class C21 {
    static [v20](a23, a24, a25) {
    }
}
