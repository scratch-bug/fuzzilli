function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function F4(a6, a7) {
        if (!new.target) { throw 'must be called with new'; }
        function f8() {
            function f9(a10) {
                function f13(a14) {
                    a14.length = a14;
                    return a3;
                }
                const v15 = [9];
                v15[0] = v15;
                v15.forEach(f13);
                Math.sinh(a10);
                a10 >> 9;
            }
            %OptimizeMaglevOnNextCall(f9);
            return f9;
        }
        Object.defineProperty(this, "toString", { get: f8 });
    }
    const v19 = new F4();
    v19.toString(v19);
}
new F0(F0, F0);
