const v0 = [];
function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            const v8 = v0.constructor;
            let v9 = v8.length;
            v9--;
            let v11;
            try { v11 = v8.forEach(f5, v9); } catch (e) {}
            v11 ?? v11;
            const v14 = eval();
            v14 ** v14;
            return F1;
        }
        %OptimizeMaglevOnNextCall(f6);
        return f6;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v16 = new F1();
v16.toString(v16, F1);
v16.toString();
