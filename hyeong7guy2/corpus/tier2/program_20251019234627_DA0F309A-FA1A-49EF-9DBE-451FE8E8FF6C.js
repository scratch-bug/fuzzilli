function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            function f7(a8) {
                const v10 = { 65536: 3946 };
                return F0;
            }
            const v11 = [F0];
            for (let v12 = 0; v12 < 5; v12++) {
                v12 >> v12;
                v11.forEach(f7);
            }
            return a3;
        }
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v15 = new F0(F0, F0);
v15.toString();
v15.toString(F0, F0, F0, v15, F0);
