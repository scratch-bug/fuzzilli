function f0(a1) {
    try { a1.call(); } catch (e) {}
    function F3(a5, a6) {
        if (!new.target) { throw 'must be called with new'; }
        function f7() {
            function f8(a9) {
                function f10(a11) {
                    a9 >>> f10;
                    return f10;
                }
                const v13 = [F3];
                for (let v14 = 0; v14 < 5; v14++) {
                    v13.forEach(f10);
                }
                a9 & a9;
                return f8;
            }
            %OptimizeMaglevOnNextCall(f8);
            return f8;
        }
        Object.defineProperty(this, "toString", { get: f7 });
    }
    const v17 = new F3(a1, f0);
    v17.toString();
    return f0;
}
f0(f0);
