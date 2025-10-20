function f0(a1) {
    try { a1.call(); } catch (e) {}
    function F3(a5, a6) {
        if (!new.target) { throw 'must be called with new'; }
        a5 & a5;
        function f8() {
            function f9(a10) {
                function f11(a12) {
                    new a12(f0);
                    return a12;
                }
                const v14 = [F3];
                for (let v15 = 0; v15 < 5; v15++) {
                    v14.forEach(f11);
                }
                a10 & a10;
                return f0;
            }
            %OptimizeMaglevOnNextCall(f9);
            return f9;
        }
        Object.defineProperty(this, "toString", { get: f8 });
    }
    const v18 = new F3();
    return v18.toString();
}
f0(f0);
