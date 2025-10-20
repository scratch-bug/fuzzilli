function f0(a1) {
    try { a1.call(); } catch (e) {}
    function F3(a5, a6) {
        if (!new.target) { throw 'must be called with new'; }
        function f7() {
            function f8(a9) {
                function f10(a11) {
                    a11.d = a11;
                    return a9;
                }
                const v12 = [F3];
                for (let v13 = 0; v13 < 5; v13++) {
                    v12.forEach(f10);
                }
                a9 & a9;
                return f0;
            }
            %OptimizeMaglevOnNextCall(f8);
            return f8;
        }
        Object.defineProperty(this, "toString", { get: f7 });
    }
    const v16 = new F3(F3, F3);
    v16.toString();
    return f0;
}
f0(f0);
