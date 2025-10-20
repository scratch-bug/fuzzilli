for (let i1 = 10, i2 = 10; i2; i2--) {
}
const v9 = ["Rh"];
function f10(a11, a12) {
    a11.bold(a12, a12, a12, f10);
}
v9.constructor = f10;
function F14(a16, a17) {
    if (!new.target) { throw 'must be called with new'; }
    function f18() {
        function f19(a20) {
            const v22 = -9007199254740990 >> a16;
            const t12 = v9.constructor;
            const v24 = new t12("Rh");
            try { v24.constructor(v22); } catch (e) {}
            let v26;
            try { v26 = v24.constructor(v22); } catch (e) {}
            return v26;
        }
        f19();
        f19();
        %OptimizeMaglevOnNextCall(f19);
        return f19;
    }
    Object.defineProperty(this, "toString", { get: f18 });
}
const v29 = new F14();
class C30 {
    static [v29](a32, a33, a34) {
    }
}
