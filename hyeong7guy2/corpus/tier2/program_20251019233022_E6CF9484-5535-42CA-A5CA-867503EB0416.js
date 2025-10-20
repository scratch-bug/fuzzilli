function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            function F7(a9, a10) {
                if (!new.target) { throw 'must be called with new'; }
            }
            const v11 = new F7(F0, a2);
            const v12 = v11.constructor;
            switch (Float64Array) {
                case f4:
                    break;
            }
            new v12(v12, a3, Float64Array, v11, v11);
            return a2;
        }
        f5();
        f5();
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v17 = new F0();
class C18 {
    static [v17](a20, a21, a22) {
    }
}
