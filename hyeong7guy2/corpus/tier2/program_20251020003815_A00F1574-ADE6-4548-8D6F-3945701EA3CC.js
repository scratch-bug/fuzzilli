class C0 {
}
function f1(a2) {
    let v3;
    try { v3 = a2.call(); } catch (e) {}
    function F4(a6, a7) {
        if (!new.target) { throw 'must be called with new'; }
        this[127] = C0;
        function f8() {
            function f9(a10) {
                function f11(a12) {
                    const v13 = new a12(f8);
                    v13[127];
                    return v3;
                }
                const v15 = [F4];
                for (let v16 = 0; v16 < 5; v16++) {
                    v15.forEach(f11);
                }
                a10 & a10;
                return v15;
            }
            %OptimizeMaglevOnNextCall(f9);
            return f9;
        }
        Object.defineProperty(this, "toString", { get: f8 });
    }
    const v19 = new F4();
    v19.toString();
    return v19;
}
f1(f1);
