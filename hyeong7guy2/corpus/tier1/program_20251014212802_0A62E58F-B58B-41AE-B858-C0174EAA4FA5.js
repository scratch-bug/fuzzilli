function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            const t4 = [-59161,-38111,-8,41058,-10044,-1255646682,256];
            t4.constructor = f4;
            return a3;
        }
        f5();
        f5();
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v10 = new F0(F0, F0);
v10.toString(F0, v10, v10, v10);
