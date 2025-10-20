const v0 = [593787958,4294967296,-822587873,-64716,-222532294,512];
function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            const t5 = v0.constructor;
            const v9 = t5();
            try { v9(); } catch (e) {}
            const v11 = v9.pop();
            try { v9.forEach(v9); } catch (e) {}
            return v11;
        }
        %OptimizeMaglevOnNextCall(f6);
        return f6;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v13 = new F1();
const v14 = v13.toString();
v13.toString(v13, v14, v13, v14);
