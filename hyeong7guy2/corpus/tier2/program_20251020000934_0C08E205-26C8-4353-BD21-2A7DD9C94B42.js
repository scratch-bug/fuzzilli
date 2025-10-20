function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            const v7 = {};
            let v8;
            try { v8 = v7(a2); } catch (e) {}
            const v11 = new Float32Array(3725);
            v11[398] = v8;
            return a3;
        }
        f5();
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    f4();
    Object.defineProperty(this, "toString", { get: f4 });
}
const v14 = new F0(F0, F0);
v14.toString(v14, F0, v14, v14);
