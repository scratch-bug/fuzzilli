function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            const v8 = eval();
            const v9 = v8 ?? v8;
            v9 ?? v9;
            const v11 = [-Infinity,-1.3732131131445796e+308,6.318487400040212,-1000000000000.0,0.7110294938859892,1.0,208901.7668406295,-3.0,1e-15];
            v11[2] = v11;
            const v12 = {};
        }
        f5(this);
        f5(F0);
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v15 = new F0();
class C16 {
    static [v15](a18, a19, a20) {
    }
}
