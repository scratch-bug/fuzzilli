class C0 {
}
function f1(a2) {
    try { a2.call(); } catch (e) {}
    function F4(a6, a7) {
        if (!new.target) { throw 'must be called with new'; }
        this[127] = C0;
        this[127] = this;
        function f8() {
            function f9(a10) {
                function f11(a12) {
                    new a12();
                    return f11;
                }
                const v14 = [F4];
                for (let v15 = 0; v15 < 5; v15++) {
                    v14.forEach(f11);
                }
                a10 & a10;
                return F4;
            }
            %OptimizeMaglevOnNextCall(f9);
            return f9;
        }
        Object.defineProperty(this, "toString", { get: f8 });
    }
    const v18 = new F4();
    v18.toString();
    return a2;
}
f1(f1);
