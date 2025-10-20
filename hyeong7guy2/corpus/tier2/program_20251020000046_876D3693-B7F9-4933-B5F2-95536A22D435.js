function f2(a3, a4, a5) {
    function F6(a8, a9) {
        if (!new.target) { throw 'must be called with new'; }
        function f10() {
            function f11(a12) {
                return f11;
            }
            return f11;
        }
        Object.defineProperty(this, "toString", { get: f10 });
    }
    const v13 = new F6();
    const t12 = v13.toString;
    t12();
    const v19 = {
        construct(a17, a18) {
            return a18;
        },
    };
    v19.construct(11, Int8Array);
    return 11;
}
f2.call(f2);
f2(11, Int8Array, Int8Array);
%OptimizeMaglevOnNextCall(f2);
f2();
