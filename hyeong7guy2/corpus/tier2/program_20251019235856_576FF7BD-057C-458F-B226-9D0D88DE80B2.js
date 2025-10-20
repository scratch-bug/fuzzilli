for (let i1 = 10, i2 = 10; i2; i2--) {
}
const v9 = ["Rh","Rh","Rh","Rh","Rh"];
function f10(a11, a12) {
    for (const v13 in a11) {
    }
    return a11;
}
v9.constructor = f10;
function F14(a16, a17) {
    if (!new.target) { throw 'must be called with new'; }
    function f18() {
        function f19(a20) {
            -9007199254740990 >> a16;
            const t13 = v9.constructor;
            const v24 = new t13("Rh");
            v24.constructor;
        }
        f19(a17);
        f19();
        %OptimizeMaglevOnNextCall(f19);
        return f19;
    }
    Object.defineProperty(this, "toString", { get: f18 });
}
const v28 = new F14();
class C29 {
    static [v28](a31, a32, a33) {
    }
}
