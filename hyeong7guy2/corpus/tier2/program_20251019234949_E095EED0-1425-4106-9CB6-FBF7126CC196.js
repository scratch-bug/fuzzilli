function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            f5[4] | 7;
            const v11 = { a: 1.1 };
            function F13(a15, a16, a17, a18) {
                if (!new.target) { throw 'must be called with new'; }
                a18--;
                this.f = a18;
            }
            const v20 = new F13(Int8Array, 7, F13, 7);
            const t12 = v20.constructor;
            new t12();
            v11.a;
            return 7;
        }
        f5(f5());
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v26 = new F0(F0, F0);
class C27 {
    static [v26](a29, a30, a31) {
    }
}
