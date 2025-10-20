const v0 = [593787958,4294967296,-822587873,-64716,-222532294,512];
function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            const t5 = v0.constructor;
            const v9 = t5();
            const v10 = v9.length;
            let v11;
            try { v11 = v9.forEach(v10); } catch (e) {}
            return v11;
        }
        %OptimizeMaglevOnNextCall(f6);
        return f6;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v12 = new F1();
const v13 = v12.toString();
v12.toString(v12, v13, v12, v13, v12);
