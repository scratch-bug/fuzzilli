const v0 = [593787958,4294967296,-822587873,-64716,-222532294,512];
function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            const t5 = v0.constructor;
            const v9 = t5();
            v9.pop();
            const v11 = v9.length;
            let v12;
            try { v12 = v9.forEach(v11); } catch (e) {}
            return v12;
        }
        %OptimizeMaglevOnNextCall(f6);
        return f6;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v13 = new F1(F1, F1);
const v14 = v13.toString();
v13.toString(v13, v14, v13, v14);
